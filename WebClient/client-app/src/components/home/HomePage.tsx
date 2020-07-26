import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../../redux/actions/userActions";
import { IUser } from "../../redux/actions/types";
import UserCard from "../common/UserCard";
import TableView from "../common/TableView";

interface StateProps {
  loginUser: IUser;
  users: Array<IUser>;
}

interface DispatchProps {
  actions: any;
}

interface OwnProps {
  history: any;
}

type Props = StateProps & DispatchProps & OwnProps;

function HomePage(props: Props) {
  useEffect(() => {
    const { loginUser, users, actions } = props;

    if (loginUser.userId === undefined) props.history.push("/");

    if (users.length === 0) {
      actions.getUsers().catch((error: any) => {
        console.log(error);
      });
    }
  });

  return (
    <div className="row">
      <div className="col-3">
        <UserCard user={props.loginUser} />
      </div>
      <div className="col-9">
        <h2>Available Users</h2>
        {props.users.length !== 0 && <TableView data={props.users} />}
      </div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { loginUser: state.login, users: state.users };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      getUsers: bindActionCreators(getUsers, dispatch),
    },
  };
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
