import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fonts.plex};
    font-size: ${theme.sizes.medium};
    text-transform: uppercase;
    color: ${theme.colors.white};
    background: none;
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.border.smallRadio};
    padding: ${theme.sizes.medium} ${theme.sizes.xlarge};
    cursor: pointer;
    transition: 0.5s;

    &:hover,
    &:focus {
      color: ${theme.colors.secondary};
      box-shadow: inset 25rem 0 0 0 ${theme.colors.white};
    }
  `}
`
