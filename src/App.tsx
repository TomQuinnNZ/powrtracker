import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { useAuth0 } from './react-auth0-spa';
import Layout from './components/Layout/Layout';
import './App.scss';

function App() {

    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="app">
            <header>
                <NavBar />
                <Layout />
            </header>
        </div>
    )
}

export default App;
