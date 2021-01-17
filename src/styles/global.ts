import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F2F5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 18px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  section {
    max-width: 1120px;
    padding: 0 25px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }
`;
