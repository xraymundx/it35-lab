import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonInput, 
  IonItem, 
  IonTextarea, 
  IonPage, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonAlert,
  IonLoading,
  IonLabel,
  IonText,
  useIonRouter
} from '@ionic/react';
  
  const Register: React.FC = () => {
     const navigation = useIonRouter();

     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [address, setAddress] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [showAlert, setShowAlert] = useState(false);
     const [alertMessage, setAlertMessage] = useState('');
     const [isLoading, setIsLoading] = useState(false);
   

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