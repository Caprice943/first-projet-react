import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation/>
            <Logo />
            <h1>Erreur 404</h1>
        </div>
    );
};

export default NotFound;
