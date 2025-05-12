import { useState, useEffect } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput,
  IonLabel, IonModal, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonAlert, IonText, IonAvatar, IonCol, IonGrid, IonRow, IonIcon, IonPopover
} from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';
import { pencil } from 'ionicons/icons';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [dbUser, setDbUser] = useState<{ user_id: number, username: string, user_avatar_url: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [popoverState, setPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  const fetchUser = async () => {
    const { data: authData } = await supabase.auth.getUser();
    if (authData?.user?.email?.endsWith('@nbsc.edu.ph')) {
      setUser(authData.user);

      const { data: userData, error } = await supabase
        .from('users')
        .select('user_id, username, user_avatar_url')
        .eq('user_email', authData.user.email)
        .single();

      if (!error && userData) {
        setDbUser(userData);
      }
    }
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('post') // Corrected table name
      .select('*')
      .order('post_created_at', { ascending: false });

    if (!error) {
      setPosts(data as Post[]);
    } else {
      console.error('Fetch posts error:', error);
    }
  };

  const createPost = async () => {
    if (!postContent || !user || !dbUser) return;

    const avatarUrl = dbUser.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    const { data, error } = await supabase
      .from('post')
      .insert([
        {
          post_content: postContent,
          user_id: dbUser.user_id,
          username: dbUser.username,
          avatar_url: avatarUrl
        }
      ])
      .select(); // Return new post

    if (!error && data) {
      setPosts(prev => [data[0] as Post, ...prev]); // Add new post on top
      setPostContent('');
    } else {
      console.error('Post creation error:', error);
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('post').delete().match({ post_id });
    fetchPosts(); // Refresh after deletion
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;

    const { error } = await supabase
      .from('post')
      .update({ post_content: postContent, post_updated_at: new Date().toISOString() })
      .match({ post_id: editingPost.post_id });

    if (!error) {
      fetchPosts(); // Refresh after update
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    } else {
      console.error('Update post error:', error);
    }
  };

  return (
    <>
      <IonContent>
        {user ? (
          <>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Create Post</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput
                  value={postContent}
                  onIonChange={e => setPostContent(e.detail.value!)}
                  placeholder="Write a post..."
                />
              </IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}>
                <IonButton onClick={createPost}>Post</IonButton>
              </div>
            </IonCard>

            {posts.map(post => (
              <IonCard key={post.post_id} style={{ marginTop: '2rem' }}>
                <IonCardHeader>
                  <IonRow>
                    <IonCol size="1.85">
                      <IonAvatar>
                        <img alt={post.username} src={post.avatar_url} />
                      </IonAvatar>
                    </IonCol>
                    <IonCol>
                      <IonCardTitle style={{ marginTop: '10px' }}>
                        {post.username || 'Unknown User'}
                      </IonCardTitle>
                      <IonCardSubtitle>
                        {new Date(post.post_created_at).toLocaleString()}
                      </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="auto">
                      <IonButton
                        fill="clear"
                        onClick={(e) =>
                          setPopoverState({
                            open: true,
                            event: e.nativeEvent,
                            postId: post.post_id,
                          })
                        }
                      >
                        <IonIcon color="secondary" icon={pencil} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardHeader>

                <IonCardContent>
                  <IonText style={{ color: 'black' }}>
                    <h1>{post.post_content}</h1>
                  </IonText>
                </IonCardContent>

                <IonPopover
                  isOpen={popoverState.open && popoverState.postId === post.post_id}
                  event={popoverState.event}
                  onDidDismiss={() =>
                    setPopoverState({ open: false, event: null, postId: null })
                  }
                >
                  <IonButton
                    fill="clear"
                    onClick={() => {
                      startEditingPost(post);
                      setPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    Edit
                  </IonButton>
                  <IonButton
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      deletePost(post.post_id);
                      setPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    Delete
                  </IonButton>
                </IonPopover>
              </IonCard>
            ))}
          </>
        ) : (
          <IonLabel>Loading...</IonLabel>
        )}
      </IonContent>

      {/* Modal for editing post */}
      <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput
            value={postContent}
            onIonChange={e => setPostContent(e.detail.value!)}
            placeholder="Edit your post..."
          />
        </IonContent>
        <IonFooter style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <IonButton onClick={savePost}>Save</IonButton>
          <IonButton color="medium" onClick={() => setIsModalOpen(false)}>Cancel</IonButton>
        </IonFooter>
      </IonModal>

      {/* Alert after successful edit */}
      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="Success"
        message="Post updated successfully!"
        buttons={['OK']}
      />
    </>
  );
};

export default FeedContainer;
