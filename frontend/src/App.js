import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import createClass from './components/createClass';
import classHome from './components/classHome';
import editClass from './components/editClass';
import classTeacherEmailer from './components/classTeacherEmailer';
import classDetailsReport from './components/classDetailsReport';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div classname ="container">

        <Route path = "/" exact component = {classHome}></Route>
        <Route path = "/add" exact component = {createClass}></Route>
        <Route path = "/edit/:id" exact component = {editClass}></Route>
        <Route path="/email" exact component={classTeacherEmailer}></Route>
        <Route path="/classReport" exact component={classDetailsReport}></Route>

      </div>
      </BrowserRouter>
      
    )
  }
}
