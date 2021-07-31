import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const NavSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.sizes.xxlarge} ${theme.sizes.xhuge} ${theme.sizes.xhuge} 0;
    ${media.lessThan('medium')`
    margin: ${theme.sizes.large} ${theme.sizes.xlarge} ${theme.sizes.huge} 0;
    `}
  `}
`
export const HeaderSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: 0 ${theme.sizes.xhuge} ${theme.sizes.xhuge} ${theme.sizes.xhuge};

    svg {
      max-width: 582px;
      margin-left: ${theme.sizes.huge};
    }

    @media (max-width: 1700px) {
      svg {
        display: none;
      }
    }

    ${media.lessThan('medium')`
    margin: 0 ${theme.sizes.xlarge} ${theme.sizes.huge} ${theme.sizes.xxlarge};
    `}
  `}
`

export const AboutMeSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin: ${theme.sizes.xhuge} ${theme.sizes.xxhuge};
    ${media.lessThan('medium')`
    flex-direction: column;
    margin: 0;
    margin: ${theme.sizes.huge} ${theme.sizes.xlarge};
    `}
  `}
`
