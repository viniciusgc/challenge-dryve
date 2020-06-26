import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput } from "reactstrap";
import "./style.scss";

function Select({ name, label, invalid, data, ...rest }) {
  return (
    <FormGroup>
      <Label for={name} className={invalid ? "invalid" : ""}>
        {label}
      </Label>
      <TextInput type="select" id={name} {...rest} invalid={invalid}>
        {data.map((i) => (
          <option value={i.value}>{i.label}</option>
        ))}
      </TextInput>
    </FormGroup>
  );
}

export default Select;
