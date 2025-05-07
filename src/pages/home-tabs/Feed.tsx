import { 
    IonButton,
      IonButtons,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonContent, 
        IonHeader, 
        IonItem, 
        IonLabel, 
        IonList, 
        IonMenuButton, 
        IonPage, 
        IonThumbnail, 
        IonTitle, 
        IonToolbar 
    } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
       
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>

    <IonCard>
      <img alt="Silhouette of mountains" src="https://www.facebook.com/photo.php?fbid=1592580907993279&set=pb.100017241556675.-2207520000&type=3" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/481227329_1714394939145208_8238415467104153736_n.jpg?stp=c0.75.684.684a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHOKdGG0T9_wu-xdXA9UqIuqDxdn2Sy_uyoPF2fZLL-7K9wwxWSTTto6m8eOt7J_k_2NvCHJV8kTz-NipFsdw9A&_nc_ohc=SDZ4hs9exMEQ7kNvgGTlajo&_nc_oc=Adjq28PWD7bbuw9M-yIGQOxCDWfjVrbb23UcKgCjtZ5rRfefIMAZjOAUIroxm7ednVM&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=AyhWz59AXurQkA_8tDWiUdU&oh=00_AYD7KmIkvSFiAPYgI5VhoN26TovSvy7k8EoTqVxTPElWfg&oe=67CF6F79" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/450918464_1563444837573553_9149915073399953813_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFs16fHPqcEdYLMvXccpUybk1AAwmZNMSCTUADCZk0xIN0vDFCD4Mxl4iZmfZYJRZSyDvy791ToOFrtgLZhRbmD&_nc_ohc=u2NU3rVYfmUQ7kNvgEWKErP&_nc_oc=AdhN1JdL8bjZd-iWxjrP4HSJ5IpwKU4YeG8YAVU-EduLA7xuJlb8sZXU4bLR5DkJCZY&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=AyhWz59AXurQkA_8tDWiUdU&oh=00_AYCZpuo3_v4x-lxrYXk4KUSyogNatfv1gg-CQ5yKycQSFw&oe=67CF5094" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/432330241_1490878124830225_7906686116569135279_n.jpg?stp=c0.83.750.750a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEDUDoq190Ag0Z6rhnqwjzWmpgxzO_xAiGamDHM7_ECIYHcOSairoC2QyreSlNhlgO9qeBiDXYEtUNnoLg5RGjz&_nc_ohc=t0g4vla3fdIQ7kNvgE-Ccqy&_nc_oc=Adhdwk4yxEXWXtCqWJK5XqVTCcmB7IqkpyaSNhQ3MzWhtOZ7YRtMt_W_DolDdQUuSZg&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=AyhWz59AXurQkA_8tDWiUdU&oh=00_AYCIADkRuoJ3y4Cnj_kOgJYypBCVJFIcBddLKHlbXUSppA&oe=67CF60CB" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://www.facebook.com/photo.php?fbid=1322617181656321&set=pb.100017241556675.-2207520000&type=3" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;