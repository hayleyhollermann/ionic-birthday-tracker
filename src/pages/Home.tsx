
import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { trash as trashIcon } from "ionicons/icons";
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonAlert,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

import { BirthdayStore } from "./BirthdayStore";

type HomeProps = {
  birthdayStore: BirthdayStore;
};

const printDate = (date: Date | string): string => {
  // ensures correct format for date
  if (typeof date === "string") {
    console.log("Date string is: ", date)
    date = new Date(date);
  }
  // prints date according to users location
  return date.toLocaleDateString('en-US', {timeZone: 'UTC'});
};

const Home: React.FC<HomeProps> = ({ birthdayStore }) => {

  const [removingBirthdayId, setRemovingBirthdayId] = useState<number>(0);


  return (
    <IonPage>
      <IonAlert
        isOpen={removingBirthdayId > 0}
        onDidDismiss={() => setRemovingBirthdayId(0)}
        header={"Remove Birthday?"}
        message={`Sure you want to remove birthday?`}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => setRemovingBirthdayId(0)
          },
          {
            text: "Yes, Remove It",
            handler: () => {
              birthdayStore.remove(removingBirthdayId);
              setRemovingBirthdayId(0);
            }
          }
        ]}
      />
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
          {/* maps through to print out all birthdays */}
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
                  onClick={() => setRemovingBirthdayId(birthday.id)}
                >
                  <IonIcon icon={trashIcon} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        {/* {JSON.stringify(birthdayStore)} */}
      </IonContent>
    </IonPage>
  );
};

export default inject("birthdayStore")(observer(Home));