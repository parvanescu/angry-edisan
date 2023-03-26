import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './template/components/Menu';
import Page from './template/pages/Page';

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
import MainMenu from './main-menu';
import AppContainer from './common/AppContainer';
import Options from './options';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
          <AppContainer>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/main-menu-ojisan" />
            </Route>
            <Route path="/main-menu-ojisan" exact={true}>
              <MainMenu/>
            </Route>
            <Route path="/options" exact={true}>
              <Options/>
            </Route>
          </IonRouterOutlet>
          </AppContainer>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
