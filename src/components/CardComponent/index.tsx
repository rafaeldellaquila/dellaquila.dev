import * as S from './styles'

import { FolderOutline as FolderIcon } from '@styled-icons/evaicons-outline'
import { StarOutline as StarIcon } from '@styled-icons/evaicons-outline'

type Props = {
  url: string
  name: string
  description: string
}

const CardComponent: React.FC<Props> = ({ url, name, description }) => (
  <S.Wrapper>
    <a href={url} target="_blank" rel="noreferrer">
      <div>
        <FolderIcon width="24" />
        <StarIcon width="24" />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
    </a>
  </S.Wrapper>
)

export default CardComponent
