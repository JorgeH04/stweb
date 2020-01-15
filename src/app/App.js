import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Create from "./components/Create";
import List from "./components/List";
import Salary from "./components/Salary";



function App() {
  return (
  <Router>
      <Nav />

  <Route path="/" component={Create} exact />
  <Route path="/list" component={List}  />
  <Route path="/salary" component={Salary}  />

 
  </Router>
  );
}

export default App;

