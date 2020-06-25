import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput } from "reactstrap";
import "./style.scss";

function Select({ name, label, ...rest }) {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <TextInput type="select" id={name} {...rest}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </TextInput>
    </FormGroup>
  );
}

export default Select;
