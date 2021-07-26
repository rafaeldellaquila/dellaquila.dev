import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    div {
      height: ${theme.sizes.xsmall};
    }
    .primary {
      background-color: ${theme.colors.primary};
      width: 20%;
    }
    .primary-light {
      background-color: ${theme.colors.lightPrimary};
      width: 20%;
    }
    .secondary {
      background-color: ${theme.colors.secondary};
      width: 20%;
    }
    .secondary-light {
      background-color: ${theme.colors.lightSecondary};
      width: 20%;
    }
    .white {
      background-color: ${theme.colors.white};
      width: 20%;
    }
  `}
`
