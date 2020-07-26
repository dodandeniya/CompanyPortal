import React from "react";

interface inputs {
  name: string;
  label: string;
  onChange: any;
  placeholder: string;
  value: string;
  error: string;
}

export function PasswordInput(config: inputs) {
  let wrapperClass = "form-group";
  if (config.error && config.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={config.name}>{config.label}</label>
      <div className="field">
        <input
          type="password"
          name={config.name}
          className="form-control"
          placeholder={config.placeholder}
          value={config.value}
          onChange={config.onChange}
        />
        {config.error && (
          <div className="alert alert-danger">{config.error}</div>
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
