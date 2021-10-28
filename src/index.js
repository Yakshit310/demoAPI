import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Form from "./components/form";
import Response from "./components/response";
import Content from "./components/Content";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Form}></Route>
      <Route exact path='/response' component={Response}></Route>
      <Route exact path='/172.105.39.53/:id' component={Content}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);