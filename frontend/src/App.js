import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import createClass from './components/createClass';
import classHome from './components/classHome';
import editClass from './components/editClass';
import classTeacherEmailer from './components/classTeacherEmailer';
import classDetailsReport from './components/classDetailsReport';
import stdpay from './components/StdpayAdd.js';
import stdpayH from './components/StdPayDetails.js';
import stdReport from './components/StdpayReport.js';
import stdUpdate from './components/StdpayUpdate.js';
import stdDe from './components/StdpayD.js';
import maill from './components/stpMail.js';
import success from './components/StdpaySuccess.js';
import teachersaladd from './components/TeacherSalAdd.js';
import teachHome from './components/TeacherSalDetails.js';
import teacSalUpdate from './components/TeachSalUpdate.js';
import teachReport from './components/SalaryReport.js';

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
        
   
        <Route path="/payadd" exact component={stdpay} />
        <Route path="/paydetails" exact component={stdpayH} />
      
        <Route path="/StdUpdate/:id" exact component={stdUpdate} />
        <Route path="/mail" exact component={maill} />
        <Route path="/success" component={success}></Route>
        <Route path="/teacSadd" component={teachersaladd}></Route>
        <Route path="/teachHome" component={teachHome}></Route>
        <Route path="/teachUpdate/:id" component={teacSalUpdate}></Route>
       
        <Route path="/Sreport" exact component={stdReport} />
        <Route path="/teachReport" component={teachReport}></Route>
      </div>
      </BrowserRouter>
      
    )
  }
}
