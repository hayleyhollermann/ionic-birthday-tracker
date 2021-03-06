import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { calendar, add } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from "mobx-react";
import { create } from "mobx-persist";
import { BirthdayStore } from "./pages/BirthdayStore";
import Home from './pages/Home';
import Add from './pages/Add';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const hydrate = create({});
  const birthdayStore = new BirthdayStore();

  // on page load, mobx-persist loads up the previously saved state of the store from localStorage
  hydrate("BirthdayStore", birthdayStore);

  return (
    <IonApp>
      <Provider birthdayStore={birthdayStore}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                path="/birthdays"
                component={Home}
                exact={true}
              />
              <Route
                path="/add"
                component={Add}
                exact={true}
              />
              <Route
                exact path="/"
                render={() => <Redirect to="/home" />}
              />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="birthdays" href="/birthdays">
                <IonIcon icon={calendar} />
                <IonLabel>Birthdays</IonLabel>
              </IonTabButton>
              <IonTabButton tab="add" href="/add">
                <IonIcon icon={add} />
                <IonLabel>Add Birthday</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </Provider>
    </IonApp>
  );

};

export default App;
