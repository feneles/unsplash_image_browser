import React from 'react'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {

  
  return (
    
    <div className="app">
      <Router>
      <Switch>
        <Route path="/" exact>
        <HomePage/>
        </Route>
        <Route path="/search/:searched">
          <SearchPage/>
        </Route>
        <Route path="*" component={()=>(<><h1>404!</h1></>)}></Route>
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
