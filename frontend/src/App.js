import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';
import './App.css';
import UploadModel from './pages/upload-model/upload-model';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/upload">
            <UploadModel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
