import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonItem, IonInput, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { BirthdayStore } from "./BirthdayStore";

type HomeProps = {
    birthdayStore: BirthdayStore,
};

const Add: React.FC<HomeProps> = ({ birthdayStore }) => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Birthday</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Add Birthday</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonItemDivider>Name</IonItemDivider>
                    <IonItem>
                        <IonInput />
                    </IonItem>
                    <IonItemDivider>Birthday</IonItemDivider>
                    <IonItem>
                        <IonInput />
                    </IonItem>
                </IonList>
                <IonButton>Add</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Add;