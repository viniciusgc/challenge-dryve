import React, { useEffect, useRef } from "react";
import { FormGroup, Label, Input as TextInput, Col } from "reactstrap";
import "./style.scss";

function Radio({ name, label, invalid, value, ...rest }) {
  return (
    <ul className="radio">
      <li>
        <TextInput
          type="radio"
          id="masculino"
          name={name}
          className={invalid ? "invalid-radio" : ""}
          checked={value == "masculino"}
          {...rest}
        />
        <label for="masculino" className={invalid ? "invalid" : ""}>
          Masculino
        </label>
      </li>
      <li>
        <TextInput
          type="radio"
          id="feminino"
          name={name}
          className={invalid ? "invalid-radio" : ""}
          checked={value == "feminino"}
          {...rest}
        />
        <label for="feminino" className={invalid ? "invalid" : ""}>
          Feminino
        </label>
      </li>
    </ul>
  );
}

export default Radio;
