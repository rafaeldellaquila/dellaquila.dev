import * as S from './styles'

import CardComponent from 'components/CardComponent'
import HighLightCard from 'components/HighLightCard'
import Title from 'components/Title'

const MyWorkGithub = () => (
  <>
    <Title text="Works" icon={true} />
    <S.HighLightWrapper>
      <HighLightCard hlNumber={20} hlDescription={'repositories'} />
      <HighLightCard hlNumber={4} hlDescription={'followers'} />
      <HighLightCard hlNumber={16} hlDescription={'following'} />
    </S.HighLightWrapper>
    <S.CardWrapper>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </S.CardWrapper>
  </>
)

export default MyWorkGithub
