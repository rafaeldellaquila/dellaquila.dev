import SocialIcons from 'components/SocialIcons'
import Title from 'components/Title'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <Title text="Contact me" />
    <div>
      <h3>Do you want to do a project with me?</h3>
      <div className="description">
        <h4>E-mail</h4>

        <a className="email" href="mailto:rafadellaquila@gmail.com">
          rafadellaquila@gmail.com
        </a>
        <SocialIcons withBefore={false} />
      </div>
    </div>
  </S.Wrapper>
)

export default Contact
