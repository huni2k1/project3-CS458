import { IonImg,IonIcon,IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Login from '../components/Login'
import './Tab1.css';
import React, { useState } from 'react';
const Tab1: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage className='tab1Page'>
      <IonHeader className='header'>
        <IonToolbar>
          <IonTitle color='warning'>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="imageContainer">
      <img className='amazonLogo' src="\assets\amazonIcon.jpg"/>
      </div>
      <Login/>
    </IonPage>
  );
};

export default Tab1;