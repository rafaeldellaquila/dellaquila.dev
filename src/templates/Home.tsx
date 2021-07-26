import * as S from './styles'

import ColorGraph from 'components/ColorGraph'
import Main from 'components/Main'
import NavMenu from 'components/NavMenu'

export default function Home() {
  return (
    <>
      <ColorGraph />
      <S.NavSection>
        <NavMenu />
      </S.NavSection>
      <Main />
      <ColorGraph />
    </>
  )
}
