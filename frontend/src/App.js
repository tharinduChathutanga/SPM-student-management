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

//Teacher payment - shamali
import Teachersaladd from './component/TeacherSalay/TeacherSalAdd.js';
import TeacherDetails from './component/TeacherSalay/TeacherSalDetails.js';
import TeacherpayUpdate from './component/TeacherSalay/TeachSalUpdate.js';
import TeacherSalaryReport from './component/TeacherSalay/SalaryReport.js';


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

     

      <Footer />
    </Router>
  );
}

export default App;
