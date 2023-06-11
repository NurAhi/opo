import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  .c-input-form__input-text {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .c-input-form__button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ffc700;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #36454f;
      color: #fff
    }
  }
`;