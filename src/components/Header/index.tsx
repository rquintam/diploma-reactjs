import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  console.log(location.pathname.toString());

  return (
    <Container>
      <div>
        <h1>Diploma</h1>
        <nav>
          <a href="/">Consultar</a>
          <a href="/create">Cadastrar</a>
          <a href="/import">Importar</a>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
