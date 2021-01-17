import React, { useState, FormEvent, useEffect } from 'react';
import Moment from 'react-moment';
import {
  FiAlertCircle,
  FiAward,
  FiCheckSquare,
  FiSearch,
} from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

import { Content, Diploma, Error, Form, Result, SearchWrapper } from './styles';

interface Diploma {
  id: string;
  student: {
    name: string;
    record_id: number;
    course: string;
    date_end_program: Date;
  };
  book: number;
  page: number;
  authorized_representative: string;
  date_pickup: Date;
}

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);

  async function handleFindDiploma(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!search) {
      setInputError('O campo está vazio!');
      setValue('');
      setDiplomas([]);
      return;
    }

    try {
      const response = await api.get(`/?record_id=${search}`);

      const diploma = response.data;

      setDiplomas(diploma);
      setSearch('');
      setInputError('');
    } catch (err) {
      setInputError(err.response.data.error);
      setSearch('');
    }
  }

  return (
    <>
      <Header />
      <Content>
        <SearchWrapper>
          <h1>Consultar</h1>
          <Form hasError={!!inputError} onSubmit={handleFindDiploma}>
            <input
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setValue(e.target.value);
                setInputError('');
              }}
              placeholder="Informe o REGISTRO DE MATRÍCULA"
            />
            <button type="submit">
              <FiSearch size={25} />
              Pesquisar
            </button>
          </Form>
        </SearchWrapper>

        {inputError && (
          <Result>
            <Error>
              <FiAlertCircle size={60} />
              <div>
                <p>{inputError}</p>
                {value && <strong>{`${value}`}</strong>}
              </div>
            </Error>
          </Result>
        )}

        {diplomas.length > 0 && (
          <Result>
            {diplomas.map(item => (
              <Diploma hasDiploma={!item.date_pickup} key={item.id}>
                <div>
                  <h1>{item.student.name}</h1>
                  <p>{`Registro de Matrícula: ${item.student.record_id}`}</p>
                  <p>{`Cursou: ${item.student.course}`}</p>
                  <p>
                    {`Encerramento Programa: `}
                    <Moment format="DD/MM/YYYY">
                      {`${item.student.date_end_program}`}
                    </Moment>
                  </p>
                  <p>{`Diploma: Livro ${item.book} - página ${item.page}`}</p>
                </div>

                {!item.date_pickup ? (
                  <div>
                    <FiAward size={100} />
                    <h1>Disponível</h1>
                    <h1>{`Livro ${item.book} - p. ${item.page}`}</h1>
                  </div>
                ) : (
                  <div>
                    <FiCheckSquare size={100} />
                    <h1>Retirado em</h1>
                    <h1>
                      <Moment format="DD/MM/YYYY">{item.date_pickup}</Moment>
                    </h1>
                  </div>
                )}
              </Diploma>
            ))}
          </Result>
        )}
      </Content>
    </>
  );
};

export default Search;
