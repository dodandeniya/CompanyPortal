import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";

interface createAccountInputs {
  user: any;
  onCreate: any;
  onChange: any;
  errors: any;
}

export default function CreateAccountForm(config: createAccountInputs) {
  return (
    <form onSubmit={config.onCreate}>
      <h3 className="form-h3">Create Account</h3>
      {config.errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {config.errors.onSave}
        </div>
      )}
      <TextInput
        name="firstName"
        label="First Name"
        placeholder=""
        value={config.user.FirstName}
        onChange={config.onChange}
        error={config.errors.firstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        placeholder=""
        value={config.user.LastName}
        onChange={config.onChange}
        error={config.errors.lastName}
      />
      <TextInput
        name="address"
        label="Address"
        placeholder=""
        value={config.user.Address}
        onChange={config.onChange}
        error={config.errors.address}
      />
      <TextInput
        name="email"
        label="Email"
        placeholder=""
        value={config.user.Email}
        onChange={config.onChange}
        error={config.errors.email}
      />
      <PasswordInput
        name="password"
        label="Password"
        placeholder=""
        value={config.user.Password}
        onChange={config.onChange}
        error={config.errors.password}
      />
      <button type="submit" className="btn btn-primary btn-block">
        Create
      </button>
    </form>
  );
}
