import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

interface DiplomaProps {
  hasDiploma: boolean;
}

export const SearchWrapper = styled.div`
  padding-top: 50px;

  h1 {
    color: #363f5f;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  padding-top: 25px;

  input {
    flex: 1;

    height: 70px;
    padding: 0 25px;

    color: #3a3a3a;

    border: 0;
    border-radius: 5px 0 0 5px;
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 0 20px;
    height: 70px;
    width: 190px;

    border-radius: 0px 5px 5px 0px;
    border: 0;

    background: #363f5f;
    color: #fff;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: #3662d3;
    }
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  background: #c53030;
  color: #fff;
  padding: 30px;
  border: 0;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;

    p {
      flex: 1;
      padding-left: 25px;
      font-size: 22px;
      font-weight: 500;
    }

    strong {
      font-size: 28px;
      padding-left: 25px;
    }
  }
`;

export const Diploma = styled.div<DiplomaProps>`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 40px;
    padding: 50px 40px 40px 50px;

    color: #fff;
    background: #12a454;
    text-decoration: none;

    border: 0;
    border-radius: 5px;

    transition: transform 0.3s;

    div {
      display: flex;
      flex-direction: column;

      h1 {
        line-height: 30px;
        color: #fff;
      }

      h1:first-child {
        font-size: 36px;
        padding-bottom: 25px;
      }

      h1:nth-child(2) {
        padding-top: 20px;
      }

      p {
        line-height: 30px;
      }
    }

    div:nth-child(2) {
      min-width: 150px;
      align-items: center;
      justify-content: center;
    }

    ${props =>
      props.hasDiploma &&
      css`
        background: #3662d3;
      `}

    &:hover {
      transform: translate3d(50px, 10px, 10px);
    }
  }
`;
