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

teacher-salary-dilrukshi
//Teacher payment - shamali
import Teachersaladd from './component/TeacherSalay/TeacherSalAdd.js';
import TeacherDetails from './component/TeacherSalay/TeacherSalDetails.js';
import TeacherpayUpdate from './component/TeacherSalay/TeachSalUpdate.js';
import TeacherSalaryReport from './component/TeacherSalay/SalaryReport.js';

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
        <Route path="/TeachpayAdd" component={Teachersaladd}></Route>
        <Route path="/TeacherSalDetails" exact component={TeacherDetails} />
        <Route path="/TeacherSalUpdate" exact component={TeacherpayUpdate} />
        <Route path="/SalaryReport" exact component={TeacherSalaryReport} />

     
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

      <Footer />
    </Router>
  );
}

export default App;
