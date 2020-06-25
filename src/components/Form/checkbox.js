import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput, Col } from "reactstrap";
import "./style.scss";

function Checkbox({ name, label, ...rest }) {
  return (
    <ul className="checkbox">
      <li>
        <TextInput type="checkbox" id={`${name}_1`} name={name} {...rest} />
        <label for={`${name}_1`}>Masculino</label>
      </li>
      <li>
        <TextInput type="checkbox" id={`${name}_2`} name={name} {...rest} />
        <label for={`${name}_2`}>Feminino</label>
      </li>
    </ul>
  );
}

export default Checkbox;
