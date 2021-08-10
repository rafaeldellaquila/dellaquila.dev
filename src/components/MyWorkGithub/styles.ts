import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .other-link {
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-family: ${theme.fonts.plex};
      font-size: ${theme.sizes.large};
      display: block;
      text-align: center;
      margin-top: ${theme.sizes.large};
      text-decoration: underline;
    }
  `}
`

export const HighLightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.sizes.xxlarge};
    justify-content: center;
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
  aspect-ratio: 2/1;
  ${media.greaterThan('medium')`
  grid-template-columns: 50% 50%;
    `}

  ${media.greaterThan('large')`
  grid-template-columns: 33% 33% 33%;
    `}
`
