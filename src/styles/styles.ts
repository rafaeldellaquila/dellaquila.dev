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

    @media (max-width: 1024px) {
      svg {
        display: none;
      }
    }

    ${media.lessThan('medium')`
    margin: 0 ${theme.sizes.xlarge} ${theme.sizes.huge} ${theme.sizes.xlarge};
    `}
  `}
`

export const AboutMeSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: ${theme.sizes.xhuge} ${theme.sizes.xxhuge};

    ${media.lessThan('medium')`
    flex-direction: column;
    align-items: center;
    margin: ${theme.sizes.huge} ${theme.sizes.xlarge};
    `}
  `}
`

export const MyWorkSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.sizes.xhuge} ${theme.sizes.xhuge} ${theme.sizes.xhuge};

    ${media.lessThan('medium')`
    margin: 0 ${theme.sizes.xlarge} ${theme.sizes.huge} ${theme.sizes.xlarge};
    `}
  `}
`

export const ContactSection = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.large};
  `}
`
