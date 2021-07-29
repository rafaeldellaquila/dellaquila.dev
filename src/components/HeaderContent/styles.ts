import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 780px;
    h1 {
      color: ${theme.colors.primary};
      font-family: ${theme.fonts.plex};
      font-weight: ${theme.fonts.bold};
      font-size: ${theme.sizes.huge};

      line-height: 0.9;
      margin-bottom: ${theme.sizes.large};
      &::before {
        content: ' ';
        display: block;
        background-color: ${theme.colors.lightPrimary};
        height: ${theme.sizes.small};
        width: 25%;
        border-radius: ${theme.border.smallRadio};
        margin-bottom: ${theme.sizes.xxlarge};
      }
    }
    h2 {
      font-family: ${theme.fonts.karla};
      font-weight: ${theme.fonts.bold};
      font-size: ${theme.sizes.large};
      color: ${theme.colors.lightPrimary};
      margin-bottom: ${theme.sizes.large};
    }
    p {
      font-size: ${theme.sizes.large};
      color: ${theme.colors.white};
    }
    ${media.lessThan('medium')`
    max-width: 480px;
    h1 {
      font-size: ${theme.sizes.xlarge};
    }
    h2 {
      font-size: ${theme.sizes.medium};
    }
    p {
      font-size: ${theme.sizes.medium};
    }
    `}
  `}
`
