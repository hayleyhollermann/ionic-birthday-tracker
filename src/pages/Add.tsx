import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemDivider, IonItem, IonInput, IonButton, IonActionSheet } from '@ionic/react';
import React from 'react';
import { inject, observer } from "mobx-react";
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { BirthdayStore } from "./BirthdayStore";

type AddProps = {
    birthdayStore: BirthdayStore,
};

const Add: React.FC<AddProps> = ({ birthdayStore }) => {

    const [values, setValues] = React.useState({ name: "", birthdate: new Date() } as any);

    const addBirthday = async() => {
        console.log('In add birthday function', values.name, values.birthdate)
        birthdayStore.save(values.name, values.birthdate);
        setValues({ name: "", birthdate: new Date() })
    }

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
                <IonList id="inputFields">
                    <IonItemDivider>Name</IonItemDivider>
                    <IonItem id="nameItem">
                        <IonInput
                            type="text"
                            name="name"
                            value={values.name}
                            onIonChange={ev =>
                                setValues({ ...values, name: (ev.target as any).value })
                            }
                        />
                    </IonItem>
                    <IonItemDivider>Birthday</IonItemDivider>
                    <IonItem id="dateItem">
                        <IonInput
                            type="date"
                            value={values.date}
                            onIonInput={input =>
                                setValues({...values, birthdate: (input.target as any).value})
                            }
                            name="birthdate"
                        />
                    </IonItem>
                    <IonItem>
                        <IonButton expand="block" onClick={addBirthday}>Add</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default inject("birthdayStore")(observer(Add));