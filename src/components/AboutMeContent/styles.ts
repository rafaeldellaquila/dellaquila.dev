import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SideWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.sizes.xxlarge};
    ${media.lessThan('medium')`
    align-items: center;
    margin-right: 0;
    margin-bottom: ${theme.sizes.xxlarge};
    `}
    img {
      width: ${theme.sizes.xxhuge};
      min-width: 300px;
    }
    button {
      margin-top: ${theme.sizes.xlarge};
      align-self: center;
    }
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: inline;
    h1 {
      color: ${theme.colors.primary};
      font-size: ${theme.sizes.large};
      text-transform: uppercase;
      font-weight: ${theme.fonts.bold};
      margin-bottom: ${theme.sizes.large};
    }
    .first {
      margin-bottom: ${theme.sizes.large};
    }
    p {
      color: ${theme.colors.white};
      font-size: ${theme.sizes.medium};
      line-height: 1.5;
      line-break: loose;
      max-width: 600px;
      span {
        color: ${theme.colors.lightPrimary};
      }
    }
    ${media.lessThan('medium')`
    h1 {
      font-size: ${theme.sizes.medium};
    }
    p {
      max-width: 300px;
    }
    `}
  `}
`
export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${media.lessThan('huge')`
          flex-direction: row;
      `}
    ul {
      display: flex;
      max-width: 1000px;
      margin-top: ${theme.sizes.large};

      ${media.lessThan('huge')`
          flex-direction: column;
      `}

      li {
        color: ${theme.colors.white};
        font-family: ${theme.fonts.plex};
        font-size: ${theme.sizes.medium};
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        ${media.lessThan('huge')`
          margin-bottom: ${theme.sizes.small};
          font-size: ${theme.sizes.small};

      `}
        &:before {
          content: '';
          color: ${theme.colors.lightPrimary};
          background-color: ${theme.colors.lightPrimary};
          width: ${theme.sizes.small};
          height: ${theme.sizes.small};
          border-radius: ${theme.border.smallRadio};
          display: inline;
          margin-right: ${theme.sizes.medium};
          ${media.lessThan('medium')`margin-right: ${theme.sizes.small};`}
        }
      }
    }
  `}
`
