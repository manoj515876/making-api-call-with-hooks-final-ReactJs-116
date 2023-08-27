import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const HeaderElementsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const Logo = styled.img`
  height: 36px;
`
