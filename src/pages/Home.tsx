import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { BirthdayStore } from "./BirthdayStore";

type HomeProps = {
  birthdayStore: BirthdayStore,
};

const Home: React.FC<HomeProps> = ({ birthdayStore }) => { 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Birthdays</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Birthdays</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
