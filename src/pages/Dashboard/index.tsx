import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repo {
  owner: {
    login: string;
    avatar_url: string;
  };
  full_name: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repos, setRepos] = useState<Repo[]>(() => {
    const storagedRepos = localStorage.getItem('@github_explorer:repos');

    if (!storagedRepos) return [];

    return JSON.parse(storagedRepos);
  });

  useEffect(() => {
    localStorage.setItem('@github_explorer:repos', JSON.stringify(repos));
  }, [repos]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repo>(`/repos/${newRepo}`);

      setRepos([...repos, response.data]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Não foi possível encontrar o respositório');
    }
  }

  return (
    <>
      <img src={Logo} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
          value={newRepo}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repos.map((repo) => (
          <Link key={repo.full_name} to={`/repo/${repo.full_name}`}>
            <img alt={repo.owner.login} src={repo.owner.avatar_url} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
