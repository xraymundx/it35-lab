import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import './Login.css';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        history.push('/it35-lab/app');
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Handle registration
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some((u: any) => u.email === email)) {
        alert('Email already registered!');
        return;
      }
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! Please login.');
      setIsLogin(true);
    }
  };

  const toggleForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    // Reset form fields when toggling
    setEmail('');
    setPassword('');
    setUsername('');
    setConfirmPassword('');
  };

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            
            {!isLogin && (
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)} required />
              </IonItem>
            )}

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
            </IonItem>

            {!isLogin && (
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} required />
              </IonItem>
            )}

            <IonButton expand="block" type="submit">
              {isLogin ? 'Login' : 'Register'}
            </IonButton>

            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <a href="#" onClick={toggleForm}>
                {isLogin ? 'Register' : 'Login'}
              </a>
            </p>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;