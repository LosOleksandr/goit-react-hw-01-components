import Description from 'components/Profile/Description/Description';
import Stats from 'components/Profile/Stats/Stats';
import { ProfileContainer } from './Profile.styled';

export default function Profile({ userInfo }) {
  return (
    <ProfileContainer>
      <Description {...userInfo} />
      <Stats  stats={userInfo.stats} />
    </ProfileContainer>
  );
}
