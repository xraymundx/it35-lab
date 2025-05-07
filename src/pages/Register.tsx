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
    }