import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/karla-v15-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/karla-v15-latin-700.woff2') format('woff2');
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/ibm-plex-mono-v6-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('../fonts/ibm-plex-mono-v6-latin-700.woff2') format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.fonts.karla};
      font-size: ${theme.sizes.medium};
      background-color: ${theme.colors.secondary};

      a {
        color: inherit;
        text-decoration: none;
      }

      h1,
      h2,
      span {
        ::selection {
          background-color: ${theme.colors.white};
        }
      }

      a,
      p,
      li,
      h3,
      h4 {
        ::selection {
          background-color: ${theme.colors.primary};
        }
      }
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`

export default GlobalStyles
