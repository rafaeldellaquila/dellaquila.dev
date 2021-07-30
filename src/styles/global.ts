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
    list-style: none;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fonts.karla};
      font-size: ${theme.sizes.medium};
      background-color: ${theme.colors.secondary};

      #__next {
        position: absolute;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  `}
`

export default GlobalStyles
