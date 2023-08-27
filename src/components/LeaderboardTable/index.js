import LeaderboardRow from '../LeaderboardRow'

import {
  LeaderboardTableContainer,
  LeaderboardHeader,
  Rank,
  Name,
  Score,
  Language,
  TimeSpent,
} from './styledComponents'

const LeaderboardTable = props => {
  const {leaderboardData} = props

  const renderLeaderboardHeader = () => (
    <LeaderboardHeader>
      <Rank>Rank</Rank>
      <Name>Name</Name>
      <Score>Score</Score>
      <Language>Language</Language>
      <TimeSpent>Time Spent</TimeSpent>
    </LeaderboardHeader>
  )

  return (
    <LeaderboardTableContainer>
      {renderLeaderboardHeader()}
      {leaderboardData.map(eachUser => (
        <LeaderboardRow key={eachUser.id} userDetails={eachUser} />
      ))}
    </LeaderboardTableContainer>
  )
}

export default LeaderboardTable
