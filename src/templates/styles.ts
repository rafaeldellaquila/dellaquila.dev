import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const NavSection = styled.section`
  ${({ theme }) => css`
    margin: ${theme.sizes.xxlarge} ${theme.sizes.xhuge} ${theme.sizes.xhuge} 0;
    ${media.lessThan('medium')`
    margin: ${theme.sizes.large} ${theme.sizes.xlarge} ${theme.sizes.xhuge} 0;
    `}
  `}
`
