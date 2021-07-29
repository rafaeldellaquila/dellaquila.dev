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
    justify-content: space-between;

    margin: 0 ${theme.sizes.xhuge} ${theme.sizes.xhuge} ${theme.sizes.xhuge};
    svg {
      max-width: 582px;
      margin-left: ${theme.sizes.huge};
    }

    @media (max-width: 1700px) {
      justify-content: center;
      svg {
        display: none;
      }
    }

    ${media.lessThan('medium')`
    margin: 0 ${theme.sizes.huge} ${theme.sizes.huge} ${theme.sizes.huge};
    `}
  `}
`
