import {
  HeaderContainer,
  HeaderElementsContainer,
  Logo,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <HeaderElementsContainer>
      <Logo
        src="https://assets.ccbp.in/frontend/hooks/leaderboard/nxt-code-logo-img.png"
        alt="nxt code logo"
      />
    </HeaderElementsContainer>
  </HeaderContainer>
)

export default Header
