import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user?.name}'s Profile`} />
          <div className="body">
            <div className="profileContainer">
              <div>
                <h1>{user?.name}</h1>
              </div>
              <div>
                <div>
                  <h4>Full Name</h4>
                  <p>{user?.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user?.email}</p>
                </div>
                <div>
                  <h4>Username</h4>
                  <p>{user?.username}</p>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>{user?.address}</p>
                </div>
                <div>
                  <h4>Contact Number</h4>
                  <p>{user?.contactno}</p>
                </div>
                <div>
                  <h4>ID Number</h4>
                  <p>{user?.idNumber}</p>
                </div>
                <div>
                  <h4>Joined On</h4>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
