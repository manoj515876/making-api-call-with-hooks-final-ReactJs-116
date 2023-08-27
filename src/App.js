import Header from './components/Header'
import Leaderboard from './components/Leaderboard'

import {
  GlobalStyle,
  MainContainer,
  Title,
  Description,
} from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <Title>Think &lt;Code&gt; Innovate</Title>
      <Description>Make it work, Make it right, Make it fast</Description>
      <Leaderboard />
    </MainContainer>
  </>
)

export default App
