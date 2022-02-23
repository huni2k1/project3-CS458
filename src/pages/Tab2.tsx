import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Price from '../components/Price';
const Tab2: React.FC = () => {
  return (
    <IonPage className='tab2Page'>
      <IonHeader className='header'>
        <IonToolbar>
          <IonTitle color='warning'>Image</IonTitle>
        </IonToolbar>
      </IonHeader>
        <div className='item-container'>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Nike Air Force One SP Wheat Low</IonCardTitle>
              <img src='\assets\NikeAirForceOneSPWheatLow.jpg' />
              <Price val={150} />
              <IonCardSubtitle>Men's Shoes</IonCardSubtitle>
              <IonCardSubtitle>3 Color</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Jordan 1 Low Bred Toe</IonCardTitle>
              <img src='\assets\Jordan1LowBredToe.jpg' />
              <Price val={170} />
              <IonCardSubtitle>Men's Shoes</IonCardSubtitle>
              <IonCardSubtitle>1 Color</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Jordan 1 Low Diamond Shorts</IonCardTitle>
              <img src='\assets\Jordan1LowDiamondShorts.jpg' />
              <Price val={110} />
              <IonCardSubtitle>Men's Shoes</IonCardSubtitle>
              <IonCardSubtitle>1 Color</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Jordan 1 Low Shattered Backboard</IonCardTitle>
              <img src='\assets\Jordan1LowShatterbackboard.jpg' />
              <Price val={300} />
              <IonCardSubtitle>Men's Shoes</IonCardSubtitle>
              <IonCardSubtitle>1 Color</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Jordan 1 Low Off-White Chicago</IonCardTitle>
              <img className="img"src='\assets\Jordan1LowOffWhiteChicago.jpg' />
              <Price val={390} />
              <IonCardSubtitle>Men's Shoes</IonCardSubtitle>
              <IonCardSubtitle>1 Color</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        </div>
    </IonPage>
  );
};

export default Tab2;
