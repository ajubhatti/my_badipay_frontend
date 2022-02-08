import React,{ useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import { BrowserRouter, Redirect, Route, Switch ,useLocation} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TaskAddPage from './pages/TaskAddPage';
import TaskEditPage from './pages/TaskEditPage';
import Header from './component/Header';
import Footer from './component/Footer';
import PrivateRoute from './component/PrivateRoute';
import { accountService } from './services/account.service';
import { Role } from './helpers/role';
import Login from './account/Login';
import Register from './account/Register';

function App() {
  // const { pathname } = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe((x) => setUser(x));
        return subscription.unsubscribe;
    }, []);

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
         
          <Route exact path='/registers' component={ RegisterPage } />
          <Route exact path='/task' component={ DashboardPage } />
          <Route exact path='/task/add' component={ TaskAddPage } />
          <Route path='/task/:slug' component ={TaskEditPage} />
              
          {/* <Route exact path="/account/login" component={Account} /> */}
          <Route path="/account/login" component={Login} />
          <Route exact path="/account/register" component={Register} />
          <Route path='/login' >
            <LoginPage />
          </Route>
          <Redirect from="*" to="/login" />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
