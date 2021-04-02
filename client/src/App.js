import './App.css';
import OnBoarding from './Routes/OnBoarding/OnBoarding'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
        <Router>
            <Switch>
                <Route exact path='/' component={OnBoarding}/>
            </Switch>
        </Router>
  );
}

export default App;
