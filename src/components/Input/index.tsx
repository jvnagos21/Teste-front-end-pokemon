import React from "react";
import { IInput } from "../../Interfaces/Components";
import { ContainerInput } from "./Styles";

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ valueLabel, idInPut, typeInput, placeholder, ...rest }, ref) => {
    return (
      <>
        <ContainerInput>
          <label htmlFor={idInPut}>{valueLabel}</label>
          <input
            id={idInPut}
            type={typeInput}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </ContainerInput>
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
