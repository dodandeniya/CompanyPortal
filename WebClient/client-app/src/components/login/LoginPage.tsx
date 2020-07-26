import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveUser, loginUser } from "../../redux/actions/loginActions";
import { IUser } from "../../redux/actions/types";
import React, { useState, useEffect } from "react";
import { User } from "../../models/User";
import { ErrorList } from "../../models/Error";
import SignInForm from "./SignInForm";
import CreateAccountForm from "./CreateAccountForm";
import { toast } from "react-toastify";

interface StateProps {
  loginUser: IUser;
}

interface DispatchProps {
  actions: any;
}

interface OwnProps {
  history: any;
}

type Props = StateProps & DispatchProps & OwnProps;

function LoginPage(props: Props) {
  const [errors, setErrors] = useState({});
  const [usr, setUsr] = useState({} as User);
  const [isLogin, setLoginState] = useState(true);

  useEffect(() => {
    if (props.loginUser.userId !== undefined) props.history.push("/home");
  });

  function handelLogin(event: any) {
    event.preventDefault();
    if (!loginFormIsValid()) return;

    console.log(props.loginUser);

    props.actions
      .getUser(usr)
      .then(() => {
        props.history.push("/home");
      })
      .catch((error: any) => {
        console.log(error);
        setErrors({ onSave: error.message });
      });
  }

  function handelCreate(event: any) {
    event.preventDefault();
    if (!createFormIsValid()) return;
    props.actions
      .saveUser(usr)
      .then(() => {
        setLoginState(true);
        toast.success("Account has successfully created!");
      })
      .catch((error: any) => {
        console.log(error);
        setErrors({ onSave: error.message });
      });
  }

  function handelChange(event: any) {
    const { name, value } = event.target;

    setUsr((prv) => ({
      ...prv,
      [name]: value,
    }));
  }

  function changePageState() {
    setLoginState(!isLogin);
    setErrors({});
  }

  function createFormIsValid() {
    const { firstName, lastName, address, email, password } = usr;
    const errors = {} as ErrorList;

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required";
    if (!address) errors.address = "Address is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function loginFormIsValid() {
    const { email, password } = usr;
    const errors = {} as ErrorList;

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div className="form">
      {isLogin ? (
        <SignInForm
          user={usr}
          errors={errors}
          onLogin={handelLogin}
          onChange={handelChange}
        />
      ) : (
        <CreateAccountForm
          user={usr}
          errors={errors}
          onCreate={handelCreate}
          onChange={handelChange}
        />
      )}

      <button
        className={
          isLogin ? "btn btn-success btn-block" : "btn btn-secondary btn-block"
        }
        style={{ marginTop: "5px" }}
        onClick={changePageState}
      >
        {isLogin ? "Create an Accunt" : "Already has an Account"}
      </button>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { loginUser: state.login };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      saveUser: bindActionCreators(saveUser, dispatch),
      getUser: bindActionCreators(loginUser, dispatch),
    },
  };
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
