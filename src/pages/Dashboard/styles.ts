import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Search = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 48px;
  display: block;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #363f5f;
    font-size: 36px;
    font-weight: 500;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  padding-top: 14px;

  input {
    display: block;
    flex: 1;
    max-width: 1120px;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  & + input {
    flex: 1;
  }

  button {
    width: 190px;
    height: 70px;
    background: #363f5f;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#3662d3')};
    }
  }
`;

export const Alert = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-top: 36px;
  padding: 24px 24px;
  border: 0;
  min-height: 70px;
  background: #c53030;
  border-radius: 5px;

  p {
    padding-left: 24px;
    font-weight: 500;
  }

  strong {
    display: flex;
    align-items: center;
    font-size: 22px;
  }
`;
