import * as S from './styles'

import SocialIcons from 'components/SocialIcons'
import Title from 'components/Title'

const Contact = () => (
  <S.Wrapper>
    <Title text="Contact me" />
    <div>
      <h3>Let&#39;s work together.</h3>
      <div className="description">
        <h4>E-mail</h4>
        <a className="email" href="mailto:rafael@dellaquila.dev">
          rafael@dellaquila.dev
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
