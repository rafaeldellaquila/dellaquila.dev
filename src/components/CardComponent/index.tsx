import * as S from './styles'

import { FolderOutline as FolderIcon } from '@styled-icons/evaicons-outline'
import { StarOutline as StarIcon } from '@styled-icons/evaicons-outline'

const CardComponent = () => (
  <S.Wrapper>
    <div>
      <FolderIcon width="24" />
      <a href="#teste" target="_blank">
        <StarIcon width="24" />
      </a>
    </div>
    <a href="#" target="_blank">
      <h4>Nome do Repositório</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id id
        donec nisl duis elit in euismod pharetra.
      </p>
      <ul>
        <li>next.js</li>
        <li>styled-components</li>
        <li>typescript</li>
      </ul>
    </a>
  </S.Wrapper>
)

export default CardComponent
