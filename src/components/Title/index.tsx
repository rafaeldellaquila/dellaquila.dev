import * as S from './styles'
import { Github as GithubIcon } from '@styled-icons/entypo-social/Github'

export type TitleProps = {
  text: string
  icon?: boolean
}
const Title = ({ text, icon = false }: TitleProps) => (
  <S.Title>
    {icon ? <GithubIcon /> : null}
    {text}
  </S.Title>
)

export default Title
