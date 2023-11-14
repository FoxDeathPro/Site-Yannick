import React from 'react';

const error = () => {
    return (
        <div>
      <h1 className="error">404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="return">
        Retourner sur la page d'accueil
      </a>
    </div>
    );
};

export default error;