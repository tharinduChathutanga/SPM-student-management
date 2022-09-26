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
import TimeTables from './components/Exam Time Table/TimeTables';
import CreateTimeTable from './components/Exam Time Table/CreateTimeTable';
import EditTimeTable from './components/Exam Time Table/EditTimeTable';


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
    
       
        <Route path="/Sreport" exact component={stdReport} />

        <Route path="/timetables" exact component={TimeTables}></Route>
        <Route path="/timetables/add" component={CreateTimeTable}></Route>
        <Route path="/timetables/update/:id" component={EditTimeTable}></Route>
        


    
      </div>
      </BrowserRouter>
      
    )
  }
}
