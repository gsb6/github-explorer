import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';

import { Header, Issues, RepoInfo } from './styles';

interface RepoParams {
  full_name: string;
}

interface Repo {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();

  const [repo, setRepo] = useState<Repo | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    (async () => {
      const [reposResponse, issuesResponse] = await Promise.all([
        api.get(`repos/${params.full_name}`),
        api.get(`repos/${params.full_name}/issues`),
      ]);

      setRepo(reposResponse.data);
      setIssues(issuesResponse.data);
    })();
  }, [params.full_name]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repo && (
        <RepoInfo>
          <header>
            <img src={repo.owner.avatar_url} alt={repo?.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
