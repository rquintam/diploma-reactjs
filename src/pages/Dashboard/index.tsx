import React, { useState, useEffect, FormEvent } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import Header from '../../components/Header';

import { Alert, Error, Form, Search } from './styles';

interface Diploma {
  id: string;
  name: string;
  record_id: number;
  course: string;
  date_end_program: Date;
  book: number;
  page: number;
  status: 'S' | 'R' | 'D';
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);

  useEffect(() => {
    console.log('teste');
  }, [diplomas]);

  function handleFindDiploma(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!search) {
      setInputError('O campo está vazio!');
      return;
    }

    setInputError('Erro na busca por esse repositório');
    setSearch('');
  }

  return (
    <>
      <Header />
      <Search>
        <h1>Consultar</h1>
        <Form hasError={!!inputError} onSubmit={handleFindDiploma}>
          <input
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setValue(e.target.value);
              setInputError('');
            }}
            placeholder="Informe o REGISTRO DE MATRÍCULA, CPF, RG, NOME ou CURSO"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        {inputError === '' || inputError === 'O campo está vazio!' ? (
          <Alert>{inputError}</Alert>
        ) : (
          <Error>
            <FiAlertCircle size={50} />
            <p>
              {`Nenhum diploma encontrado para `}
              <strong>{` ${value}`}</strong>
            </p>
          </Error>
        )}
      </Search>
    </>
  );
};

export default Dashboard;
