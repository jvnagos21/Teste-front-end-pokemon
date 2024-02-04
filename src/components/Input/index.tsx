import React from "react"
import { IInput } from "../../Interfaces/Components"
import { ContainerInput } from "./Styles"

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ valueLabel, idInput, typeInput, placeholder, ...rest }, ref) => {
    return (
      <>
        <ContainerInput>
          <label htmlFor={idInput}>{valueLabel}</label>
          <input
            id={idInput}
            type={typeInput}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </ContainerInput>
      </>
    )
  }
)

Input.displayName = "Input"

export default Input
