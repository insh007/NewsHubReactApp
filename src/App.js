import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
// import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  pageSize = 6
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App