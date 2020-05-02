import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  width: 450px;
  margin-top: 60px;
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;
`;

export const Error = styled.span`
  margin-top: 8px;
  display: block;
  font-size: 12px;
  color: #c53030;
`;

export const Form = styled.form<FormProps>`
  max-width: 700px;
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid white;
    border-right: 0;
    color: #3a3a3a;

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 60px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
