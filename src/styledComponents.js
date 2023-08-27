import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/hooks/nxt-code-bg.png');
  min-height: 100vh;
  background-size: cover;
  padding-bottom: 50px;
`

export const Title = styled.h1`
  text-align: center;
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 36px;
  margin: 0px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 46px;
  }
`

export const Description = styled.p`
  text-align: center;
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
