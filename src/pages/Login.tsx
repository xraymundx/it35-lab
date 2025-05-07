import { 
    IonAvatar,
    IonButton,
    IonContent, 
    IonIcon, 
    IonInput, 
    IonInputPasswordToggle, 
    IonItem, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter, 
    IonAlert 
  } from '@ionic/react';
  import { logoTwitter } from 'ionicons/icons';
  import { useState } from 'react';


  const Login: React.FC = () => {
    const navigation = useIonRouter();

    
  const [showAlert, setShowAlert] = useState(false);

  const doLogin = () => {
    setShowAlert(true); 
  }

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

      <IonInput type="password" label="Password" value="NeverGonnaGiveYouUp">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>

    <IonButton onClick={() => doLogin()} expand="full">
                Login
            </IonButton>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;