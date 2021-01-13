import styled from 'styled-components';

export const Container = styled.div`
  background: #363f5f;

  header {
    max-width: 1120px;
    height: 90px;
    margin: 0 auto;
    padding: '0 20px 150px';
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 24px;
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: color 0.2s;

        & + a {
          margin-left: 40px;
        }

        &:hover {
          color: #3662d3;
        }
      }
    }
  }
`;
