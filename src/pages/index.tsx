import * as S from '../styles/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { QueryProps } from 'types/types'

import ColorGraph from 'components/ColorGraph'
import NavMenu from 'components/NavMenu'
import HeaderContent from 'components/HeaderContent'
import HeaderIllustration from 'components/HeaderIllustration'
import SocialIcons from 'components/SocialIcons'
import AboutMeContent from 'components/AboutMeContent'
import MyWorkGithub from 'components/MyWorkGithub'
import Contact from 'components/Contact'
import client from 'graphql/client'
import query from 'graphql/queries'

export default function Home({
  following,
  followers,
  repositories,
  itemShowcase
}: QueryProps) {
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

      <S.MyWorkSection id="my-work" data-aos="fade-up">
        <MyWorkGithub
          repositories={repositories}
          following={following}
          followers={followers}
          itemShowcase={itemShowcase}
        />
      </S.MyWorkSection>

      <S.AboutMeSection id="about-me" data-aos="fade-up">
        <AboutMeContent />
      </S.AboutMeSection>

      <S.ContactSection id="contact" data-aos="fade-up">
        <Contact />
      </S.ContactSection>

      <ColorGraph />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { viewer } = await client.request(query)

  return {
    props: {
      ...viewer
    }
  }
}
