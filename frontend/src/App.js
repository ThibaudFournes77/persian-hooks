import React from 'react';
import './index.css';
import {Route, Switch, Link} from "react-router-dom";
import Choice from './Components/Choice';
import FindAnswer from './Components/FindAnswer/index';
import Results from './Components/Results';
//import datas from './datas';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div  className="choice">
            <Link to="/find-answer">Trouver le signe correspondant</Link>
            <Link to="/type-answer">Ecrire la lettre montrée</Link>
            <Link to="/draw-letter">Dessiner la lettre</Link>
          </div>
        </Route>
        <Route exact path="/find-answer" component={Choice} />
        <Route exact path="/find-answer/:position" component={FindAnswer} />
        <Route exact path="/type-answer" render={(props)=><div>Ecrire lettre montrée</div>} />
        <Route exact path="/draw-letter" render={(props)=><div>Dessiner lettre montrée</div>} />
        <Route exact path="/results" component={Results} />
        <Route render={()=><div>Route inconnue</div>} />
      </Switch>
    </div>
  )
}

export default App;