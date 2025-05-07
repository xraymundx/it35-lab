import React, { useState } from 'react';
import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonPage, 
  IonText, 
  IonToolbar, 
  IonTitle, 
  useIonRouter, 
  IonAlert, 
  IonModal, 
  IonToast
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons';


  const Login: React.FC = () => {
    const navigation = useIonRouter();

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const validUsername = 'user123';
  const validPassword = 'password123';


  const doLogin = () => {
    if (!username || !password) {
      setShowAlert(true);
    } else {
      if (username === validUsername && password === validPassword) {
        setShowSuccessModal(true);
        setShowToast(true);
      } else {
        setLoginError(true);
      }
    }
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
  };


  const doSignUp = () => {
    navigation.push('/it35-lab/register', 'forward', 'replace');
  }

    return (
      <IonPage>        
        <IonContent className='ion-padding'>
       
        <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width:'100%',
                  marginTop:'-10rem',
                  marginBottom:'-18rem',
                }}>
             <IonAvatar
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%', 
                      overflow: 'hidden' 
                    }}
                  >
                    {/* <img alt="Silhouette of a person's head" src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/457628660_1592580897993280_557695295736145833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEfyz7WC1Idegr07u9_DNo0nB__l3Tp5_ucH_-XdOnn-6kmxG7nvDuoCcQVTE0FLnaVCwDGtLa0av4LCODGN0Hp&_nc_ohc=QzkN6gJV28gQ7kNvgH7t4gw&_nc_oc=Adgpm7Xny_2bsaGS1ZQiFjhZuzuU7dZxyU3-ndUQvh4-ucThrwfd0qmZE5Y0HwJo-Rg&_nc_zt=23&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=AabNn05ywewNzlnan4r-cRr&oh=00_AYBt5Bvwt-qz1OJoKX8Zau10eCQsC27pQSdiyo7-mrNlHg&oe=67CCD83A" /> */}
                    {
                     <IonIcon 
                      icon={logoTwitter}
                      color='primary'
                      style={{ fontSize: '120px', color: '#6c757d' }} 
                    />
                    }
                  </IonAvatar>
                  <h1 style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>USER LOGIN</h1>
                    
          </div>

        <IonTitle>Login</IonTitle>
          <IonItem>
        <IonInput label="Email input" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      
      <IonItem>
          <IonInput
            type="password"
            label="Password"
            value="NeverGonnaGiveYouUp"
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
        </IonItem>

        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>
        <IonButton onClick={doSignUp} expand="full">
          SignUp
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowAlert(false); 
            navigation.push('/it35-lab/app', 'forward', 'replace');
          }}
          header={'Login Successful'}
          message={'You have successfully logged in.'}
          buttons={['OK']}
        />

        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;