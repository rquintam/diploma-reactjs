import styled from 'styled-components';

export const Container = styled.header`
  background: #363f5f;

  div {
    max-width: 1120px;
    height: 100px;
    margin: 0 auto;
    padding: '0 20px 150px';
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 36px;
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: background-color 0.2s;
        padding: 5px 15px;
        border-bottom: 4px solid #3662d3;
        cursor: default;

        & + a {
          margin-left: 30px;
          border-bottom: 0;
          opacity: 60%;
          cursor: pointer;
        }

        & + a:hover {
          opacity: 100%;
          background: #3662d3;
          padding: 10px 15px;
          border-bottom: 0;
          border-radius: 5px;
        }
      }
    }
  }
`;
