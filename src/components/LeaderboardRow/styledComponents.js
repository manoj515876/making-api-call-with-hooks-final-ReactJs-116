import styled from 'styled-components'
import {AiOutlineClockCircle} from 'react-icons/ai'

export const LeaderboardRowContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #cbd5e164;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
`

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  padding-right: 24px;
`

export const Text = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
`

export const RankContainer = styled(TableCell)`
  width: 15%;
`

export const Rank = styled(Text)`
  padding-left: 12px;
`

export const Badge = styled.img`
  width: 32px;
  height: 32px;
`

export const ProfileContainer = styled(TableCell)`
  width: 30%;
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 15px;
`

export const Name = styled(Text)`
  color: #334155;
`

export const ScoreContainer = styled(TableCell)`
  width: 15%;
`

export const Score = styled(Text)``

export const LanguageContainer = styled(TableCell)``

export const Language = styled(Text)``

export const TimeSpentContainer = styled(TableCell)``

export const TimerIcon = styled(AiOutlineClockCircle)`
  color: #475569;
`

export const TimeSpent = styled(Text)`
  margin-left: 6px;
`
