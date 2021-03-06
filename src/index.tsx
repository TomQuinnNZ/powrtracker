import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';
import './index.scss';

interface AppState {
    targetUrl: string;
}

// redirect the user back to the front page after login.
const onRedirectCallback = (appState: AppState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl : window.location.pathname,
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
