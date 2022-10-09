import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//Supi
//Class Management Function
import createClass from './components/Classes/createClass';
import classHome from './components/Classes/classHome';
import editClass from './components/Classes/editClass';
import classTeacherEmailer from './components/Classes/classTeacherEmailer';
import classDetailsReport from './components/Classes/classDetailsReport';

//Notice Management Function
import createNotice from './components/Notices/createNotice';
import noticeHome from './components/Notices/noticeHome';
import editNotice from './components/Notices/editNotice';
import noticeReport from './components/Notices/noticeReport';

// shamali
// student payment
import stdpay from './components/StudentPayment/StdpayAdd.js';
import stdpayH from './components/StudentPayment/StdPayDetails.js';
import stdReport from './components/StudentPayment/StdpayReport.js';
import stdUpdate from './components/StudentPayment/StdpayUpdate.js';
import maill from './components/StudentPayment/stpMail.js';
import success from './components/StudentPayment/StdpaySuccess.js';

//Teacher payment - shamali
import Teachersaladd from './components/TeacherSalay/TeacherSalAdd.js';
import TeacherDetails from './components/TeacherSalay/TeacherSalDetails.js';
import TeacherpayUpdate from './components/TeacherSalay/TeachSalUpdate.js';
import TeacherSalaryReport from './components/TeacherSalay/SalaryReport.js';


//shonali
import TimeTables from './components/Exam Time Table/TimeTables';
import CreateTimeTable from './components/Exam Time Table/CreateTimeTable';
import EditTimeTable from './components/Exam Time Table/EditTimeTable';
import TimeTableReport from './components/Exam Time Table/TimeTableReport';

import ExamResults from './components/Exam Results/ExamResults';
import createExamResults from './components/Exam Results/CreateExamResults';
import EditExamResults from './components/Exam Results/EditExamResults';
import ExamResultsReport from './components/Exam Results/ExamResultsReport';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div classname ="container">

    {/* Supi - IT20153236 */}
        <Route path = "/classHome" exact component = {classHome}></Route>
        <Route path = "/addClass" exact component = {createClass}></Route>
        <Route path = "/editClass/:id" exact component = {editClass}></Route>
        <Route path="/emailTeacher" exact component={classTeacherEmailer}></Route>
        <Route path="/classReport" exact component={classDetailsReport}></Route>

        <Route path = "/fetchNotice" exact component = {noticeHome}></Route>
        <Route path = "/addnotice" exact component = {createNotice}></Route>
        <Route path = "/editnotice/:id" exact component = {editNotice}></Route>
        <Route path = "/noticeReport" exact component={noticeReport}></Route>
        
   {/* shamali */}
        <Route path="/payadd" exact component={stdpay} />
        <Route path="/paydetails" exact component={stdpayH} />
        <Route path="/StdUpdate/:id" exact component={stdUpdate} />
        <Route path="/mail" exact component={maill} />
        <Route path="/success" component={success}></Route>
        <Route path="/Sreport" exact component={stdReport} />
        <Route path="/TeachpayAdd" component={Teachersaladd}></Route>
        <Route path="/TeacherSalDetails" exact component={TeacherDetails} />
        <Route path="/TeacherSalUpdate" exact component={TeacherpayUpdate} />
        <Route path="/SalaryReport" exact component={TeacherSalaryReport} />


{/* Shonali */}
        <Route path="/timetables" exact component={TimeTables}></Route>
        <Route path="/timetables/add" component={CreateTimeTable}></Route>
        <Route path="/timetables/update/:id" component={EditTimeTable}></Route>
        <Route path="/timetablesReport" exact component={TimeTableReport}></Route>
        
        <Route path="/results" exact component={ExamResults}></Route>
        <Route path="/result/add" exact component={createExamResults}></Route>
        <Route path="/result/update/:id" exact component={EditExamResults}></Route>
        <Route path="/resultsReport" exact component={ExamResultsReport}></Route>
        


   
 main
      </div>
      </BrowserRouter>
      
    )
  }
}
