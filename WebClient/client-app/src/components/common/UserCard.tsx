import React from "react";

export default function UserCard(props: any) {
  let user = props.user;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.firstName + " " + user.lastName}</h5>
      </div>

      <div className="row">
        <div className="col-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">First Name</li>
            <li className="list-group-item">Last Name</li>
            <li className="list-group-item">Email</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.firstName}</li>
            <li className="list-group-item">{user.lastName}</li>
            <li className="list-group-item">{user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
