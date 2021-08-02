import { MouseEvent, useState } from 'react'
import * as S from './styles'
import { MenuOutline as MenuIcon } from '@styled-icons/evaicons-outline'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline'
import MediaMatch from 'components/MediaMatch'

export type NavMenuProps = {
  scrollTo: (event: React.MouseEvent<HTMLElement>) => void
}

const NavMenu = ({ scrollTo }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <div>
            <a href="#about-me" onClick={scrollTo}>
              About Me
            </a>
            <a href="#" onClick={scrollTo}>
              Work
            </a>
            <a href="#" onClick={scrollTo}>
              Contact
            </a>
          </div>
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <S.MenuOverlay aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="close-menu" onClick={() => setIsOpen(false)} />
          <a href="#about-me">About Me</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </S.MenuOverlay>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default NavMenu
