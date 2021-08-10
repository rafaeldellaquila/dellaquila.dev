import * as S from './styles'

import SocialIcons from 'components/SocialIcons'
import Title from 'components/Title'

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
    <footer>
      &#169;&nbsp;
      <a
        href="http://github.com/rafaeldellaquila"
        target="_blank"
        rel="noopener noreferrer"
        className="link-me"
      >
        made by me
      </a>
      &nbsp;with love, Next.js, GraphQL and Styled-components
    </footer>
  </S.Wrapper>
)

export default Contact
