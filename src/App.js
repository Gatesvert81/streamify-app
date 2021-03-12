import './App.css';
import Homepage from './Pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  withRouter,
  useLocation
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Authentication from './Pages/Authentication';
import UserHome from './Pages/UserComponents/UserHome';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history} >
      <Switch>
        <Route exact path="/" >
          <Homepage />
        </Route>
        <Route exact path="/authentication"
          component={withRouter(Authentication)} />
          <Route exact path="/UserHome"
          component={withRouter(UserHome)} />
          <Route >
            {/* <PrivateRoute exact path="/Home" >
              <UserHome />
            </PrivateRoute> */}
          </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
