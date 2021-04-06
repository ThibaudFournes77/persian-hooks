import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();

    return (
        <main className="results">
            <p>Félicitations, tu as terminé cette partie !</p>
            <p>Que veux-tu faire maintenant ?</p>
            <Link to={`/${location.state.game}/${location.state.position}`}>Rejouer</Link>
            <Link to=''>Retour à l'accueil</Link>
        </main>
    );
}

export default Results;
