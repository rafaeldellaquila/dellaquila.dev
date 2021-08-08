import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './styles'

import ColorGraph from 'components/ColorGraph'
import NavMenu from 'components/NavMenu'
import HeaderContent from 'components/HeaderContent'
import HeaderIllustration from 'components/HeaderIllustration'
import SocialIcons from 'components/SocialIcons'
import AboutMeContent from 'components/AboutMeContent'
import MyWorkGithub from 'components/MyWorkGithub'
import Contact from 'components/Contact'

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

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <ColorGraph />

      <S.NavSection>
        <NavMenu scrollTo={scrollTo} />
      </S.NavSection>

      <S.HeaderSection data-aos="fade-up">
        <HeaderContent />
        <HeaderIllustration />
      </S.HeaderSection>

      <SocialIcons data-aos="fade-up" />

      <S.AboutMeSection id="about-me" data-aos="fade-up">
        <AboutMeContent />
      </S.AboutMeSection>

      <S.MyWorkSection id="my-work" data-aos="fade-up">
        <MyWorkGithub />
      </S.MyWorkSection>

      <S.ContactSection id="contact" data-aos="fade-up">
        <Contact />
      </S.ContactSection>

      <ColorGraph />
    </>
  )
}
