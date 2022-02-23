import { IonRange,IonBadge, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React, { useState } from 'react';


const Tab3: React.FC = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const [rangeValue2, setRangeValue2] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  const customFormatter = (value: number) => `${value}%`;
  const customFormatter2 = (value2: number) => `${value2}%`;
  return (
    
    <IonPage className='tab3-page'>
      <IonHeader className='header'>
        <IonToolbar>
          <IonTitle color='warning'>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='brightness-container'>
      <IonRange pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)} />
      <IonBadge color="primary">Brightness: {value}</IonBadge>
      </div>
      <div className='brightness-container'>
      <IonRange color="warning" pin={true} value={value2} onIonChange={e => setValue2(e.detail.value as number)} />
      <IonBadge color="warning">Hapiness: {value2}</IonBadge>
      </div>
    </IonPage>
  );
};

export default Tab3;
