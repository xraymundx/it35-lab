import { 
    IonAvatar,
      IonButton,
      IonButtons,
        IonContent, 
        IonHeader, 
        IonIcon, 
        IonInput, 
        IonInputPasswordToggle, 
        IonItem, 
        IonMenuButton, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        useIonRouter
    } from '@ionic/react';
    import { logoFacebook, logoIonic, logoTwitter } from 'ionicons/icons';
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
            <IonButton onClick={() => doLogin()} expand="full">
                Login
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;