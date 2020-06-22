import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Main} from './components/Main/Main'
import './App.css';
import './assets/style.css'

class App extends React.Component {
  render(){
    return (
     <React.Fragment>
       <Router>
          <Route path="/" component={Main} />
       </Router>
     </React.Fragment>
  );
  }
  
}

export default App;
