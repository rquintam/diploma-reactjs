import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <h1>Diploma</h1>
      <nav>
        <a href="teste">Consultar</a>
        <a href="teste">Cadastrar</a>
        <a href="teste">Importar</a>
      </nav>
    </header>
  </Container>
);

export default Header;
