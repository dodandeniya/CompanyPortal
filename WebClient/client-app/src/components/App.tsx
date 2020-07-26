import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import LoginPage from "./login/LoginPage";
import HomePage from "./home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { IUser } from "../redux/actions/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../redux/actions/loginActions";
import { PageNotFound } from "./common/PageNotFound";
import CompanyPage from "./company/CompanyPage";

interface StateProps {
  loginUser: IUser;
}

interface DispatchProps {
  actions: any;
}

type Props = StateProps & DispatchProps;

function App(props: Props) {
  return (
    <>
      <Header login={props.loginUser} actions={props.actions} />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/companies" component={CompanyPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
      />
    </>
  );
}

function mapStateToProps(state: any) {
  return { loginUser: state.login };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      logout: bindActionCreators(logoutUser, dispatch),
    },
  };
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
