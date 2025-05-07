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
        <IonContent className='ion-padding'>
       

        <IonTitle>Login</IonTitle>
          <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;