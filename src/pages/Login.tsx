import React, { useState } from 'react';
import { 
    IonContent, 
    IonPage,
    IonInput, 
    IonButton, 
    IonItem, 
    IonLabel,
    useIonRouter,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonToast
} from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const navigation = useIonRouter();

    const validateEmail = (email: string): boolean => {
        return email.endsWith('@nbsc.edu.ph');
    };

    const showMessage = (message: string, type: 'success' | 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            showMessage('Please use an @nbsc.edu.ph email address!', 'error');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.email === email && u.password === password);
        
        if (user) {
            showMessage('Login successful!', 'success');
            setTimeout(() => {
                navigation.push('/it35-lab/app', 'forward', 'replace');
            }, 1000);
        } else {
            showMessage('Invalid credentials', 'error');
        }
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className="container">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Login</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <form onSubmit={handleLogin}>
                                <IonItem>
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput 
                                        type="email" 
                                        value={email} 
                                        onIonChange={e => setEmail(e.detail.value!)} 
                                        required 
                                        helperText="Use your @nbsc.edu.ph email"
                                    />
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput 
                                        type="password" 
                                        value={password} 
                                        onIonChange={e => setPassword(e.detail.value!)} 
                                        required 
                                    />
                                </IonItem>

                                <IonButton expand="block" type="submit" className="ion-margin-top">
                                    Login
                                </IonButton>

                                <div className="ion-text-center ion-margin-top">
                                    <IonButton 
                                        fill="clear" 
                                        routerLink="/it35-lab/register"
                                    >
                                        Don't have an account? Register
                                    </IonButton>
                                </div>
                            </form>
                        </IonCardContent>
                    </IonCard>
                </div>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                    color={toastType === 'success' ? 'success' : 'danger'}
                    position="top"
                />
            </IonContent>
        </IonPage>
    );
};

export default Login;