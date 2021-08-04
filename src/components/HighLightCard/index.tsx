import * as S from './styles'

type HighLightCardProps = {
  hlNumber: number
  hlDescription: string
}

const HighLightCard = ({ hlNumber, hlDescription }: HighLightCardProps) => (
  <S.Wrapper>
    <span>{hlNumber}</span>
    <span>{hlDescription}</span>
  </S.Wrapper>
)

export default HighLightCard
