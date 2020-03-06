import React from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { useAuth0 } from './react-auth0-spa';
import Layout from './components/Layout/Layout';
import './App.scss';

function App() {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (loading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="app">
      {!isAuthenticated && (
        loginWithRedirect({})
      )}

      {isAuthenticated && (
        <>
          <Layout />
        </>
      )}
    </div>
  );
}

export default App;
