export default {
  border: {
    smallRadio: '.4rem'
  },
  fonts: {
    karla:
      "Karla, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    plex: "'IBM Plex Mono', Courier, 'Lucida Console', monospace;",
    normal: 400,
    bold: 600
  },
  colors: {
    primary: '#E53D1E',
    lightPrimary: '#F27613',
    secondary: '#00001B',
    lightSecondary: '#0A72CF',
    white: '#A2C5E5'
  },
  sizes: {
    xsmall: '.618rem',
    small: '1rem',
    medium: '1.618rem',
    large: '2.618rem',
    xlarge: '4.236rem',
    xxlarge: '6.854rem',
    huge: '11.089rem',
    xhuge: '17.942rem',
    xxhuge: '29.03rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
