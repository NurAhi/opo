import React from "react";
import { InputFormProps } from "./input-form.interface";
import { FormContainer } from "./input-form.styles";

export const InputForm: React.FC<InputFormProps> = ({
  onPresentedClick,
  inputValue,
  setInputValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value));
  };

  const handleClick = () => {
    onPresentedClick(inputValue);
    setInputValue(0);
  };

  return (
    <FormContainer>
      <input
        className="c-input-form__input-text"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="c-input-form__button" onClick={handleClick}>
        Actualizar
      </button>
    </FormContainer>
  );
};
