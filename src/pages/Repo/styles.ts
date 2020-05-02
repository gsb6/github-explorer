import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepoInfo = styled.section`
  margin-top: 60px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
    }

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      margin-top: 4px;
      font-size: 18px;
      color: #737380;
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        margin-top: 4px;
        display: block;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  max-width: 700px;
  margin-top: 60px;

  a {
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    background: #fff;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
