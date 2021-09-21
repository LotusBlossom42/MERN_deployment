import './App.css';
import Create from './views/Create';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Details from './views/Details';
import Update from './views/Update';

function App() {
 //REMEMBER THAT EXACT PATHS GO INSIDE ROUTES!!! NOT THE VIEW OR COMPONENT ITSELF!!!
  //if you have :var you'll need user params
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <div className="App">
        <h1>Pet Shelter</h1>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Dashboard  />
          </Route>
          <Route exact path="/pets/new">
            <Create/>
          </Route>
          <Route exact path="/pets/:id">
            <Details/>
          </Route>
          <Route exact path="/pets/:id/edit">
            <Update/>
          </Route>
        </Switch>
        </div>
    </fieldset>
  );
}

export default App;
