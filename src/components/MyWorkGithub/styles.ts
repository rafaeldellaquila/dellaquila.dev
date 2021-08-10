import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HighLightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.sizes.xxlarge};

    ${media.greaterThan('small')`
    flex-direction: row;
    `}

    @media (max-width: 650px) {
      flex-direction: column;
    }
  `}
`

export const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;

  ${media.greaterThan('medium')`
  grid-template-columns: 50% 50%;
    `}

  ${media.greaterThan('large')`
  grid-template-columns: 33% 33% 33%;
    `}
`
