import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/searchPage';
import NavBar from './component/navBar';
import Notmatch from './pages/404';
import SavedPage from './pages/savedPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={['/', '/searchPage']}>
            <SearchPage />
          </Route>

          <Route exact path='/savedPage'>
            <SavedPage />
          </Route>
          <Route>
            <Notmatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
