import * as S from './styles'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Title from 'components/Title'

const AboutMeContent = () => (
  <>
    <S.SideWrapper>
      <Avatar />
      <Button>
        <a
          href="https://drive.google.com/file/d/1bEB1XRkdNVbgqsc9f0YJbjTNAIrH_XNh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete Resume
        </a>
      </Button>
    </S.SideWrapper>
    <S.ContentWrapper>
      <Title text={'About me'} />
      <p className="first">
        Hi! My name is Rafael, <span>nice to meet you</span>! I’ve been in Art
        Direction since 2013 and I enjoy designing great ideas. My interest in
        web development started back in 2017. While briefing with developers{' '}
        <span>i discovered a new passion</span>.
      </p>
      <p>
        Recently I started developing websites and improving my skills. I’m
        looking for new challenges, here are a few tools I’ve been working with:
      </p>
      <S.ListWrapper>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Strapi</li>
          <li>GraphQL</li>
          <li>Storybook</li>
        </ul>
        <ul>
          <li>Typescript</li>
          <li>Next.js</li>
          <li>Jest</li>
          <li>Docker</li>
          <li>Styled-Components</li>
        </ul>
      </S.ListWrapper>
    </S.ContentWrapper>
  </>
)

export default AboutMeContent
