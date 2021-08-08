import styled, { css, DefaultTheme } from 'styled-components'
import { SocialIconsProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  beforeStyle: (theme: DefaultTheme) => css`
    content: ' ';
    background-color: ${theme.colors.primary};
    display: inline-block;
    width: ${theme.sizes.xhuge};
    height: ${theme.sizes.xsmall};
    margin-right: ${theme.sizes.large};
    border-radius: ${theme.border.smallRadio};

    ${media.lessThan('huge')`
      width: ${theme.sizes.huge};
      `}
  `
}

export const Wrapper = styled.div<SocialIconsProps>`
  ${({ theme, withBefore }) => css`
    display: flex;
    align-items: center;

    &::before {
      ${!!withBefore && wrapperModifiers.beforeStyle(theme)}
    }

    a {
      margin-right: ${theme.sizes.large};
    }

    svg {
      color: ${theme.colors.primary};
      width: ${theme.sizes.large};
    }
  `}
`
