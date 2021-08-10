import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.xlarge};
    text-transform: uppercase;
    font-weight: ${theme.fonts.bold};
    margin-bottom: ${theme.sizes.large};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: ${theme.sizes.xlarge};
      margin-right: ${theme.sizes.medium};
    }

    ${media.lessThan('medium')`
      font-size: ${theme.sizes.large};
    `}
  `}
`
