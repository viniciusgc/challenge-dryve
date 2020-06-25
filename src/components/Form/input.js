import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput } from "reactstrap";

import "./style.scss";

function Input({ name, label, ...rest }) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <TextInput id={name} {...rest} />
    </FormGroup>
  );
}

export default Input;
