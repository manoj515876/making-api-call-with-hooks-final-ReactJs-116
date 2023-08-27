import {
  LeaderboardRowContainer,
  Badge,
  RankContainer,
  Rank,
  ProfileContainer,
  Avatar,
  Name,
  ScoreContainer,
  Score,
  LanguageContainer,
  Language,
  TimeSpentContainer,
  TimerIcon,
  TimeSpent,
} from './styledComponents'

const LeaderboardRow = props => {
  const {userDetails} = props
  const {rank, profileImgUrl, name, score, language, timeSpent} = userDetails

  const renderRank = () => {
    switch (rank) {
      case 1:
        return (
          <Badge
            src="https://assets.ccbp.in/frontend/hooks/gold-badge-img.png"
            alt={rank}
          />
        )
      case 2:
        return (
          <Badge
            src="https://assets.ccbp.in/frontend/hooks/silver-badge-img.png"
            alt={rank}
          />
        )
      case 3:
        return (
          <Badge
            src="https://assets.ccbp.in/frontend/hooks/bronze-badge-img.png"
            alt={rank}
          />
        )
      default:
        return <Rank>{rank}</Rank>
    }
  }

  return (
    <LeaderboardRowContainer>
      <RankContainer>{renderRank()}</RankContainer>
      <ProfileContainer>
        <Avatar src={profileImgUrl} alt={name} />
        <Name>{name}</Name>
      </ProfileContainer>
      <ScoreContainer>
        <Score>{score}</Score>
      </ScoreContainer>
      <LanguageContainer>
        <Language>{language}</Language>
      </LanguageContainer>
      <TimeSpentContainer>
        <TimerIcon />
        <TimeSpent>{timeSpent}</TimeSpent>
      </TimeSpentContainer>
    </LeaderboardRowContainer>
  )
}

export default LeaderboardRow
