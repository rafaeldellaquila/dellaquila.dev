import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightSecondary};
    border: 3px solid ${theme.colors.lightSecondary};
    border-radius: ${theme.border.smallRadio};
    width: 170px;
    height: 100px;
    margin: ${theme.sizes.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span:first-child {
      font-weight: ${theme.fonts.bold};
      font-size: ${theme.sizes.large};
      display: block;
      text-align: center;
      margin-bottom: ${theme.sizes.small};
    }

    span:last-child {
      text-transform: uppercase;
      font-size: ${theme.sizes.medium};
    }
  `}
`
