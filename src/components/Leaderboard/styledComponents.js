import styled from 'styled-components'

export const LeaderboardContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  margin: 0px;
  margin-top: 100px;
  text-align: center;
`
