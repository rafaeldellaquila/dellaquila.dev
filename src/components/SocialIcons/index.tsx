import * as S from './styles'

import { Instagram as InstagramIcon } from '@styled-icons/entypo-social/Instagram'
import { Github as GithubIcon } from '@styled-icons/entypo-social/Github'
import { Linkedin as LinkedinIcon } from '@styled-icons/entypo-social/Linkedin'
import { Twitter as TwitterIcon } from '@styled-icons/entypo-social/Twitter'

export type SocialIconsProps = {
  withBefore?: boolean
}

const SocialIcons = ({ withBefore = true }: SocialIconsProps) => (
  <S.Wrapper withBefore={withBefore} className="social-icons">
    <a
      href="https://github.com/rafaeldellaquila"
      target="_blank"
      rel="noreferrer"
    >
      <GithubIcon aria-label="ícone do github" />
    </a>
    <a href="https://instagram.com/rfldllql" target="_blank" rel="noreferrer">
      <InstagramIcon aria-label="ícone do instagram" />
    </a>
    <a
      href="https://www.linkedin.com/in/rafaeldellaquila/"
      target="_blank"
      rel="noreferrer"
    >
      <LinkedinIcon aria-label="ícone do linkedin" />
    </a>
    <a
      href="http://www.twitter.com/rfldllql"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon aria-label="ícone do twitter" />
    </a>
  </S.Wrapper>
)

export default SocialIcons
