
import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { trash as trashIcon } from "ionicons/icons";
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonAlert,
  IonImg,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

import { BirthdayStore } from "./BirthdayStore";

type HomeProps = {
  birthdayStore: BirthdayStore;
};

const printDate = (date: Date | string): string => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleDateString();
};

const Home: React.FC<HomeProps> = ({ birthdayStore }) => {

  const [removingBirthdayId, setRemovingBirthdayId] = useState<number>(0);


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
        <IonList>
          {birthdayStore.entries.map(birthday => (
            <IonItemSliding key={birthday.id}>
              <IonItem>
                <IonLabel>
                  <h3>{printDate(birthday.date)}</h3>
                  <p>{birthday.name || "No Details"}</p>
                </IonLabel>
              </IonItem>{" "}
              <IonItemOptions side="end">
                <IonItemOption
                  color="danger"
                  // onClick={() => setRemovingBirthdayId(birthday.id)}
                >
                  <IonIcon icon={trashIcon} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        {JSON.stringify(birthdayStore)}
      </IonContent>
    </IonPage>
  );
};

export default inject("birthdayStore")(observer(Home));