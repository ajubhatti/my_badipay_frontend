import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/DashboardPage';
import TaskAddPage from './Pages/TaskAddPage';
import TaskEditPage from './Pages/TaskEditPage';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
