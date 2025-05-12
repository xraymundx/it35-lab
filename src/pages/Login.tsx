import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoTwitter } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="login-container" fullscreen>
        <div className="background-overlay">
          <div className="center-wrapper">
            <div className="form-container">
              <div className="avatar-container">
                <IonAvatar className="avatar">
                  <img
                  src="https://th.bing.com/th/id/OIP.ULapetmoz5AgnulzGNttFAHaFh?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Avatar"
                  className="avatar-icon"
                  />
                </IonAvatar>
              </div>
              <h1 className="title">FAIRYTAIL USERS ONLY</h1>
              <IonInput
                label="Email"
                labelPlacement="floating"
                fill="outline"
                type="email"
                placeholder="Enter Email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
              <IonInput
                fill="outline"
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              >
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              </IonInput>
              <IonButton onClick={doLogin} expand="full" shape="round">
                Login
              </IonButton>
              <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape="round">
                Don't have an account? Register here
              </IonButton>
            </div>
          </div>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>

      <style>
        {`
          .login-container {
            --padding-start: 0;
            --padding-end: 0;
            position: relative;
            overflow: hidden;
          }

          .background-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black; /* Set background to black */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            z-index: -1;
          }

          .center-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
          }

          .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 400px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 12px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }

          .avatar-container {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          }

          .avatar {
            width: 99%;
            height: 99%;
            border-radius: 50%;
            overflow: hidden;
          }

          .avatar-icon {
            font-size: 80px;
            color: #6c757d;
          }

          .title {
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 15px;
          }
        `}
      </style>
    </IonPage>
  );
};

export default Login;
