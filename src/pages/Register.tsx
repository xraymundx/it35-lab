import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonModal,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonAlert
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const doRegister = async () => {
        if (!email.endsWith("@nbsc.edu.ph")) {
            setAlertMessage("Only @nbsc.edu.ph emails are allowed.");
            setShowAlert(true);
            return;
        }

        if (password !== confirmPassword) {
            setAlertMessage("Passwords do not match.");
            setShowAlert(true);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw new Error(error.message);

            const hashedPassword = await bcrypt.hash(password, 10);
            await supabase.from("users").insert([{
                username,
                user_email: email,
                user_firstname: firstName,
                user_lastname: lastName,
                user_password: hashedPassword
            }]);

            setShowSuccessModal(true);
        } catch (err) {
            setAlertMessage(err instanceof Error ? err.message : "An error occurred.");
            setShowAlert(true);
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="background-wrapper">
                    <div className="form-wrapper">
                        <IonCard className="register-card">
                            <IonCardHeader>
                                <IonCardTitle>Create Account</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonInput placeholder="Username" value={username} onIonChange={e => setUsername(e.detail.value!)} fill="outline" />
                                <IonInput placeholder="First Name" value={firstName} onIonChange={e => setFirstName(e.detail.value!)} fill="outline" />
                                <IonInput placeholder="Last Name" value={lastName} onIonChange={e => setLastName(e.detail.value!)} fill="outline" />
                                <IonInput type="email" placeholder="youremail@nbsc.edu.ph" value={email} onIonChange={e => setEmail(e.detail.value!)} fill="outline" />
                                <IonInput type="password" placeholder="Password" value={password} onIonChange={e => setPassword(e.detail.value!)} fill="outline">
                                    <IonInputPasswordToggle slot="end" />
                                </IonInput>
                                <IonInput type="password" placeholder="Confirm Password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} fill="outline">
                                    <IonInputPasswordToggle slot="end" />
                                </IonInput>

                                <IonButton expand="full" shape="round" size="default" onClick={doRegister}>Register</IonButton>
                                <IonButton routerLink="/it35-lab" expand="full" fill="clear" size="default">Sign In</IonButton>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </div>

                <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding ion-text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <IonTitle>🎉 Registration Successful</IonTitle>
                        <IonText>Your account has been created. Check your email.</IonText>
                        <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">Go to Login</IonButton>
                    </IonContent>
                </IonModal>

                <IonAlert isOpen={showAlert} onDidDismiss={() => setShowAlert(false)} header="Error" message={alertMessage} buttons={['OK']} />
            </IonContent>

            {/* Embedded Styles */}
            <style>
                {`
                    .background-wrapper {
                        background: url('https://anhdepfree.com/wp-content/uploads/2021/02/hinh-fairy-tail-natsudragneel-ngau-33922-1536x1112.png') no-repeat center center;
                        background-size: cover;
                        width: 100%;
                        min-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .form-wrapper {
                        width: 100%;
                        max-width: 400px;
                        padding: 20px;
                    }

                    .register-card {
                        background-color: rgba(255, 255, 255, 0.9);
                        padding: 20px;
                        border-radius: 12px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    }

                    ion-input {
                        margin-bottom: 12px;
                    }
                `}
            </style>
        </IonPage>
    );
};

export default Register;
