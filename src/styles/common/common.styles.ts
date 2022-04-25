import { css } from 'styled-components';
import { Theme } from '../../components/app.theme';
import { theme } from '../theme';

export const Global = css`
  html {
    font-family: 'Poppins', sans-serif;
    color: ${theme.color.secondary};
    font-size: ${Theme.base.fontSize}px;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1rem;
  }

  ::selection {
    color: ${theme.color.primary};
    background: ${theme.color.secondary};
  }

  a {
    color: ${theme.color.secondary};
    text-decoration: none;

    &:active {
      text-decoration: none;
    }
  }
`;
