import React from 'react';

import Header from '../../components/Header';

import { Search, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Search>
        <h1>Consultar</h1>
        <Form hasError={false}>
          <input placeholder="Informe o REGISTRO DE MATRÍCULA, CPF, RG, NOME ou CURSO" />
          <button type="submit">Pesquisar</button>
        </Form>
      </Search>
    </>
  );
};

export default Dashboard;
