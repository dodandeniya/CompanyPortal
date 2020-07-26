import React from "react";
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";

interface signinInputs {
  user: any;
  onLogin: any;
  onChange: any;
  errors: any;
}

export default function SignInForm(config: signinInputs) {
  return (
    <form onSubmit={config.onLogin}>
      <h3 className="form-h3">Sign In</h3>
      {config.errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {config.errors.onSave}
        </div>
      )}
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
        Login
      </button>
    </form>
  );
}
