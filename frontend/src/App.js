import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Webfont from "webfontloader";
import Home from "./component/Home/Home.js";
import React from "react";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./action/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import usersHome from "./components/usersHome";
import editUser from "./components/editUser";
import Dashboard from "./component/Dashboard/Dashboard";

// shamali
// student payment
import stdpay from './component/StudentPayment/StdpayAdd.js';
import stdpayH from './component/StudentPayment/StdPayDetails.js';
import stdReport from './component/StudentPayment/StdpayReport.js';
import stdUpdate from './component/StudentPayment/StdpayUpdate.js';
import maill from './component/StudentPayment/stpMail.js';
import success from './component/StudentPayment/StdpaySuccess.js';

import TimeTables from './components/Exam Time Table/TimeTables';
import CreateTimeTable from './components/Exam Time Table/CreateTimeTable';
import EditTimeTable from './components/Exam Time Table/EditTimeTable';
import TimeTableReport from './components/Exam Time Table/TimeTableReport';

import ExamResults from './components/Exam Results/ExamResults';
import createExamResults from './components/Exam Results/CreateExamResults';
import EditExamResults from './components/Exam Results/EditExamResults';
import ExamResultsReport from './components/Exam Results/ExamResultsReport';




function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginSignUp} />
      <ProtectedRoute exact path="/account" component={Profile} />
      <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

      <Route path="/admin/users" exact component={usersHome}></Route>
      <Route path="/admin/edit/:id" exact component={editUser}></Route>
      <Route path="/admin/dashboard" exact component={Dashboard}></Route>


      {/* shamali */}
        <Route path="/payadd" exact component={stdpay} />
        <Route path="/paydetails" exact component={stdpayH} />
        <Route path="/StdUpdate/:id" exact component={stdUpdate} />
        <Route path="/mail" exact component={maill} />
        <Route path="/success" component={success}></Route>
        <Route path="/Sreport" exact component={stdReport} />


        <Route path="/timetables" exact component={TimeTables}></Route>
        <Route path="/timetables/add" component={CreateTimeTable}></Route>
        <Route path="/timetables/update/:id" component={EditTimeTable}></Route>
        <Route path="/timetablesReport" exact component={TimeTableReport}></Route>
        
        <Route path="/results" exact component={ExamResults}></Route>
        <Route path="/result/add" exact component={createExamResults}></Route>
        <Route path="/result/update/:id" exact component={EditExamResults}></Route>
        <Route path="/resultsReport" exact component={ExamResultsReport}></Route>
     

      <Footer />
    </Router>
  );
}

export default App;
