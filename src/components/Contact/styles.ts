import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      ${media.lessThan('medium')`
      flex-direction: column;
      `}
    }

    h3 {
      font-size: ${theme.sizes.large};
      color: ${theme.colors.white};
      text-transform: uppercase;
      max-width: 240px;
      text-align: left;

      ${media.lessThan('medium')`
      margin-bottom: ${theme.sizes.medium};
      text-align: center;
    `}
    }

    .description {
      color: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        font-size: ${theme.sizes.medium};
        font-family: ${theme.fonts.plex};
        text-transform: uppercase;

        ${media.lessThan('medium')`
        align-self: center;
        `}
      }

      .email {
        position: relative;
        margin-bottom: ${theme.sizes.large};
        font-size: ${theme.sizes.large};

        ${media.lessThan('small')`
        font-size: ${theme.sizes.medium};
        text-decoration: underline;
        `}

        ${media.greaterThan('small')`
          &:hover {
            &::after {
              content: '';
              position: absolute;
              display: block;
              height: ${theme.sizes.xxsmall};
              background-color: ${theme.colors.white};
              animation: hoverAnimation 0.3s forwards;
            }
          }
        `}
      }

      .social-icons {
        display: flex;
        flex-direction: row;
        ${media.lessThan('medium')`
            align-self: center;
            a:last-child {
              margin-right: 0;
            }
         `}
      }
    }

    footer {
      margin: ${theme.sizes.xhuge} ${theme.sizes.large} 0 ${theme.sizes.large};
      color: ${theme.colors.white};
      .link-me {
        text-decoration: underline;
      }
    }
  `}
`
