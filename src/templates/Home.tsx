import * as S from './styles'

import ColorGraph from 'components/ColorGraph'
import NavMenu from 'components/NavMenu'
import HeaderContent from 'components/HeaderContent'
import HeaderIllustration from 'components/HeaderIllustration'
export default function Home() {
  return (
    <>
      <ColorGraph />
      <S.NavSection>
        <NavMenu />
      </S.NavSection>
      <S.HeaderSection>
        <HeaderContent />
        <HeaderIllustration />
      </S.HeaderSection>
      <ColorGraph />
    </>
  )
}
