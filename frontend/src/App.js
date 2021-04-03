import React from 'react';
import './index.css';
import {Route, Switch, Link} from "react-router-dom";
import FindAnswer from './Components/FindAnswer';
//import datas from './datas';

function App() {
  return (
    <div>
      <Link to="/find-answer">Trouver le signe correspondant</Link>
      <Link to="/type-answer">Ecrire la lettre montrée</Link>
      <Link to="/draw-letter">Dessiner la lettre</Link>
      <Switch>
        <Route exact={true} path="/find-answer" render={(props)=><FindAnswer {...props} />} />
        <Route exact={true} path="/type-answer" render={(props)=><div>Ecrire lettre montrée</div>} />
        <Route exact={true} path="/draw-letter" render={(props)=><div>Dessiner lettre montrée</div>} />
        <Route render={()=><div>Route inconnue</div>} />
      </Switch>
    </div>
  )
}

export default App;