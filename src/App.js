import logo from './logo.svg';
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import Main from "./components/Main"

import { Scale } from 'chart.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Prediction from './components/Prediction';

const App = () => {
  return (
    <div>
      <Router basename="/OSP_final" >
      <Switch>
          <Route exact path="/">
          <Main/>
          </Route>
          <Route path="/charts">
          <BarChart/>
          <LineChart/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/predict">
          <Prediction/>
          </Route>
        </Switch>
        </Router>
      
    </div>
  )
}


export default App;
