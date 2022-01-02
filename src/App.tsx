import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TaskAddPage from './pages/TaskAddPage';
import TaskEditPage from './pages/TaskEditPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/registers' component={ RegisterPage } />
          <Route exact path='/task' component={ DashboardPage } />
          <Route exact path='/task/add' component={ TaskAddPage } />
          <Route path='/task/:slug' component ={TaskEditPage} />
              
          <Route path='/' >
            <LoginPage />
          </Route>
          {/* <Route exact path='/register' >
            <RegisterPage />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
