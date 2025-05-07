import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput, 
      IonItem, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTextarea, 
      IonTitle, 
      IonToolbar,
      useIonRouter
  } from '@ionic/react';
  
  const Register: React.FC = () => {
     const navigation = useIonRouter();
     const Register = () => {
        navigation.push('/it35-lab', 'forward', 'replace');
      }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            {/* <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons> */}
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonItem>
        <IonTextarea label="First Name" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
        </IonItem>
        <IonItem>
        <IonTextarea label="Last Name" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
        </IonItem>
        <IonItem>
        <IonTextarea label="Address" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
        </IonItem>
        <IonTextarea label="Email" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
        <IonItem>
        <IonInput label="Password" labelPlacement="floating" fill="solid" type="password" placeholder="Enter password"/>
        </IonItem>
        <IonItem>
        <IonInput label="Confirm Password" labelPlacement="floating" fill="solid" type="password" placeholder="Confirm password"/>
        </IonItem>
        <IonButton onClick={Register} expand="full">Register</IonButton>
        </IonContent>
      </IonPage>
    );
  };

  export default Register;