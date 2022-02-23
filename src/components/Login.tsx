import { useIonAlert ,IonButton, IonContent, IonItemDivider, IonItem, IonInput, IonList, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import './Login.css'
const Login: React.FC = () => {
  const [accountText, setaccountText] = useState<string>();
  const [passwordText, setpasswordText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [present] = useIonAlert();
  return (
    <div className='loginContainer'>
      <IonList className='ionList'>
        <IonLabel className='label'>Username</IonLabel>
        <IonItem>
          <IonInput className='input' value={accountText} placeholder="Enter Username" onIonChange={e => setaccountText(e.detail.value!)}></IonInput>
        </IonItem>
        <IonLabel className='label'>Password</IonLabel>
        <IonItem>
          <IonInput className='input' type="password" value={passwordText} placeholder="Enter Password" onIonChange={e => setpasswordText(e.detail.value!)}></IonInput>
        </IonItem>
        <div className="login-container">
          <IonButton fill="outline" size="default" color="warning" className='login-button' onClick={() =>
            present({
              cssClass: 'my-css',
              header: 'Feature Is Devloping',
              buttons: [
                { text: 'OK', handler: (d) => console.log('ok pressed') },
              ],
              onDidDismiss: (e) => console.log('did dismiss'),
            })
          }>
            Login
          </IonButton>
        </div>
      </IonList>
    </div>
  );
};

export default Login;
