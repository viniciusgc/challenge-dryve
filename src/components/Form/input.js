import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput } from "reactstrap";
import InputMask from "react-input-mask";
import "./style.scss";

function Input({ name, label, mask, invalid, ...rest }) {
  return (
    <FormGroup>
      <Label for={name} className={invalid ? "invalid" : ""}>
        {label}
      </Label>
      {mask ? (
        <InputMask
          name={name}
          mask={mask}
          {...rest}
          className={invalid ? "form-control is-invalid" : "form-control "}
        />
      ) : (
        <TextInput id={name} {...rest} invalid={invalid} name={name} />
      )}
    </FormGroup>
  );
}

export default Input;
