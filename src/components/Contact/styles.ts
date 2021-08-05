import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      ${media.lessThan('small')`
        flex-direction: column;
    `}
    }


    h3 {
      font-size: ${theme.sizes.large};
      color: ${theme.colors.white};
      text-transform: uppercase;
      max-width: 240px;
      text-align: left;

      ${media.lessThan('small')`
      margin-bottom: ${theme.sizes.medium};
      text-align: center;
    `}
    }

    table {
      color: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      ${media.lessThan('small')`
            align-items: center;
          `}
      tr:nth-child(1) {
        margin-bottom: ${theme.sizes.medium};
      }

      tr:nth-child(2) {
        margin-bottom: ${theme.sizes.large};
      }
      tr:nth-child(3) {
        div {
          ${media.lessThan('small')`
            display: flex;
            flex-direction: row;
            margin-left: ${theme.sizes.large};
          `}
        }
      }

      th {
        font-size: ${theme.sizes.medium};
        font-family: ${theme.fonts.plex};
        text-transform: uppercase;
      }

      td {
        font-size: ${theme.sizes.large};
        font-family: ${theme.fonts.karla};

        > a {
          position: relative;
          &:hover {
            &::after {
          content: '';
          position: absolute;
          display: block;
          height: ${theme.sizes.xxsmall};
          background-color: ${theme.colors.white};
          animation: hoverAnimation 0.3s forwards;
        }

          @keyframes hoverAnimation {
            from {
              width: 0;
              left: 50%;
            }
            to {
              width: 100%;
              left: 0;
            }
          }
    }
          }
        }
      }
    }
  `}
`
