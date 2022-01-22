import Home from "./components/Home/Home";
import s from './App.module.css';
import { Route, Switch } from "react-router";
import EditNote from './components/EditNote/EditNote';

function App() {
  return (
    <div className={s.app}>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/:id'>
          <EditNote/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
