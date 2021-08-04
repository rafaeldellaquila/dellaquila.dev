import * as S from './styles'

import ColorGraph from 'components/ColorGraph'
import NavMenu from 'components/NavMenu'
import HeaderContent from 'components/HeaderContent'
import HeaderIllustration from 'components/HeaderIllustration'
import SocialIcons from 'components/SocialIcons'
import AboutMeContent from 'components/AboutMeContent'
import MyWorkGithub from 'components/MyWorkGithub'

export default function Home() {
  const scrollTo = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const href = event.currentTarget?.getAttribute('href')
    if (href) {
      const sectionScroll = document.querySelector<HTMLElement>(href)
      sectionScroll?.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <ColorGraph />

      <S.NavSection>
        <NavMenu scrollTo={scrollTo} />
      </S.NavSection>

      <S.HeaderSection>
        <HeaderContent />
        <HeaderIllustration />
      </S.HeaderSection>

      <SocialIcons />

      <S.AboutMeSection id="about-me">
        <AboutMeContent />
      </S.AboutMeSection>

      <S.MyWorkSection>
        <MyWorkGithub />
      </S.MyWorkSection>

      <ColorGraph />
    </>
  )
}
