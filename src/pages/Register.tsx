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
    IonToast,
    IonAlert
} from '@ionic/react';
import './Login.css';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigation = useIonRouter();

    const validateEmail = (email: string): boolean => {
        return email.endsWith('@nbsc.edu.ph');
    };

    const showMessage = (message: string, type: 'success' | 'error') => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
    };

    const validateForm = () => {
        if (!validateEmail(email)) {
            showMessage('Please use an @nbsc.edu.ph email address!', 'error');
            return false;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match!', 'error');
            return false;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some((u: any) => u.email === email)) {
            showMessage('Email already registered!', 'error');
            return false;
        }

        return true;
    };

    const handleSubmitRequest = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Show confirmation modal
            setShowConfirmation(true);
        }
    };

    const handleConfirmedSubmit = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        showMessage('Registration successful!', 'success');
        
        // Redirect after showing success message
        setTimeout(() => {
            navigation.push('/it35-lab', 'back');
        }, 2000);
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div className="container">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Register</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <form onSubmit={handleSubmitRequest}>
                                <IonItem>
                                    <IonLabel position="floating">Username</IonLabel>
                                    <IonInput 
                                        type="text" 
                                        value={username} 
                                        onIonChange={e => setUsername(e.detail.value!)} 
                                        required 
                                    />
                                </IonItem>

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

                                <IonItem>
                                    <IonLabel position="floating">Confirm Password</IonLabel>
                                    <IonInput 
                                        type="password" 
                                        value={confirmPassword} 
                                        onIonChange={e => setConfirmPassword(e.detail.value!)} 
                                        required 
                                    />
                                </IonItem>

                                <IonButton expand="block" type="submit" className="ion-margin-top">
                                    Register
                                </IonButton>

                                <div className="ion-text-center ion-margin-top">
                                    <IonButton 
                                        fill="clear" 
                                        routerLink="/it35-lab"
                                    >
                                        Already have an account? Login
                                    </IonButton>
                                </div>
                            </form>
                        </IonCardContent>
                    </IonCard>
                </div>

                {/* Confirmation Alert with custom styling */}
                <IonAlert
                    isOpen={showConfirmation}
                    onDidDismiss={() => setShowConfirmation(false)}
                    header="Confirm Registration"
                    message={`Please confirm your registration details:
                                                
                            Username: ${username}
                            Email: ${email}`}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'alert-button-cancel',
                            handler: () => {
                                setShowConfirmation(false);
                            },
                        },
                        {
                            text: 'Confirm',
                            cssClass: 'alert-button-confirm',
                            handler: () => {
                                handleConfirmedSubmit();
                            },
                        },
                    ]}
                    cssClass="alert-modal"
                />

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                    color={toastType === 'success' ? 'success' : 'danger'}
                    position="top"
                    cssClass={toastType === 'success' ? 'success-toast' : 'error-toast'}
                />
            </IonContent>
        </IonPage>
    );
};

export default Register;