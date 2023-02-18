import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? (
          <>
            <Header logOut={this.props.logOut} />
            <Outlet />
            <Footer />
          </>
        ) : (
          <Navigate to={"/Login"} />
        )}
      </div>
    );
  }
}
