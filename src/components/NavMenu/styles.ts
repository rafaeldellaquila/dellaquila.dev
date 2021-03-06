import styled, { css } from 'styled-components'

type MenuOverlayProps = {
  isOpen: boolean
}

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.plex};
    text-transform: uppercase;
    font-size: ${theme.sizes.medium};
  `}
`

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    a {
      position: relative;
      margin-left: ${theme.sizes.xxlarge};

      &:hover {
        &::after {
          content: '';
          position: absolute;
          display: block;
          height: ${theme.sizes.xxsmall};
          background-color: ${theme.colors.lightSecondary};
          animation: hoverAnimation 0.3s forwards;
        }
      }
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;

    > svg {
      width: ${theme.sizes.xlarge};
    }
  `}
`

export const MenuOverlay = styled.nav<MenuOverlayProps>`
  ${({ theme, isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: ${theme.colors.secondaryOpacity};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity ${theme.transition.default};
    padding-top: ${theme.sizes.huge};

    > svg {
      width: ${theme.sizes.xlarge};
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.sizes.xlarge};
    }

    a {
      margin-right: ${theme.sizes.xlarge};
      font-size: ${theme.sizes.medium};
      margin: ${theme.sizes.xlarge};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform ${theme.transition.default};
    }
  `}
`
