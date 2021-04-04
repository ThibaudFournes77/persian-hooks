import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Choice() {
    const {pathname: gamePath} = useLocation();
    
    return (
        <div className="choice">
            <Link to={`${gamePath}/start`}>Lettres positionnées au début</Link>
            <Link to={`${gamePath}/middle`}>Lettres positionnées au milieu</Link>
            <Link to={`${gamePath}/end`}>Lettres positionnées à la fin</Link>
            <Link to={`${gamePath}/alone`}>Lettres isolées</Link>
        </div>
    );
}

export default Choice;
