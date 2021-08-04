import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HighLightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.sizes.xxlarge};
    ${media.lessThan('medium')`
    flex-direction: column;
    `}
  `}
`

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  justify-content: center;
  width: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
    `}
`
