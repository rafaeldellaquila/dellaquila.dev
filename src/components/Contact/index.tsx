import SocialIcons from 'components/SocialIcons'
import Title from 'components/Title'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <Title text="Contact me" />
    <div>
      <h3>Do you want to do a project with me?</h3>
      <table>
        <tr>
          <th>E-mail</th>
        </tr>
        <tr>
          <td>
            <a href="mailto:rafadellaquila@gmail.com">
              rafadellaquila@gmail.com
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <SocialIcons withBefore={false} />
          </td>
        </tr>
      </table>
    </div>
  </S.Wrapper>
)

export default Contact
