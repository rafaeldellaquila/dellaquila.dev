import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 2 0 21%;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.border.smallRadio};
    margin: ${theme.sizes.medium};
    padding: ${theme.sizes.large};

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.sizes.large};
    }

    h4 {
      font-family: ${theme.fonts.plex};
      text-transform: uppercase;
      margin-bottom: ${theme.sizes.large};
    }

    p {
      font-size: ${theme.sizes.medium};
      margin-bottom: ${theme.sizes.large};
    }

    ul {
      color: ${theme.colors.lightSecondary};
      font-size: ${theme.sizes.small};
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      font-weight: ${theme.fonts.bold};
    }
  `}
`
