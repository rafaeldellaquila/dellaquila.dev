import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.large};
    text-transform: uppercase;
    font-weight: ${theme.fonts.bold};
    margin-bottom: ${theme.sizes.large};

    svg {
      width: ${theme.sizes.large};
      margin-right: ${theme.sizes.medium};
    }

    ${media.lessThan('medium')`
    h1 {
      font-size: ${theme.sizes.medium};
    }`}
  `}
`
