import * as S from './styles'

import CardComponent from 'components/CardComponent'
import HighLightCard from 'components/HighLightCard'
import Title from 'components/Title'
import { QueryProps } from 'types/types'

const MyWorkGithub: React.FC<QueryProps> = ({
  following,
  followers,
  repositories,
  itemShowcase
}) => {
  console.log(itemShowcase.items.nodes)
  return (
    <>
      <Title text="Works" icon={true} />
      <S.HighLightWrapper>
        <HighLightCard
          hlNumber={repositories.totalCount}
          hlDescription={'repositories'}
        />
        <HighLightCard
          hlNumber={followers.totalCount}
          hlDescription={'followers'}
        />
        <HighLightCard
          hlNumber={following.totalCount}
          hlDescription={'following'}
        />
      </S.HighLightWrapper>
      <S.CardWrapper>
        {itemShowcase.items.nodes.map((item, index) => (
          <CardComponent
            key={index}
            url={item.url}
            name={item.name}
            description={item.description}
          />
        ))}
      </S.CardWrapper>
    </>
  )
}

export default MyWorkGithub
