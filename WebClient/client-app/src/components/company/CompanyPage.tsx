import React, { useEffect } from "react";
import { IUser, ICompany } from "../../redux/actions/types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserCard from "../common/UserCard";
import TableView from "../common/TableView";
import { getCompanies } from "../../redux/actions/companyActions";

interface StateProps {
  loginUser: IUser;
  companies: Array<ICompany>;
}

interface DispatchProps {
  actions: any;
}

interface OwnProps {
  history: any;
}

type Props = StateProps & DispatchProps & OwnProps;

function CompanyPage(props: Props) {
  useEffect(() => {
    const { loginUser, companies, actions } = props;

    if (loginUser.userId === undefined) props.history.push("/");

    if (companies.length === 0) {
      actions.getCompanies().catch((error: any) => {
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
        <h2>Available Companies</h2>
        {props.companies.length !== 0 && <TableView data={props.companies} />}
      </div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { loginUser: state.login, companies: state.companies };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      getCompanies: bindActionCreators(getCompanies, dispatch),
    },
  };
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPage);
