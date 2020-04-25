import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            alt="Gabriel Brunichaki"
            src="https://avatars1.githubusercontent.com/u/59578980?s=460&u=5824ad2edf97f9b4c6ce9039b20e432c00d42230&v=4"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            alt="Gabriel Brunichaki"
            src="https://avatars1.githubusercontent.com/u/59578980?s=460&u=5824ad2edf97f9b4c6ce9039b20e432c00d42230&v=4"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            alt="Gabriel Brunichaki"
            src="https://avatars1.githubusercontent.com/u/59578980?s=460&u=5824ad2edf97f9b4c6ce9039b20e432c00d42230&v=4"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
