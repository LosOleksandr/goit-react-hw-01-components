import Description from 'components/Profile/Description/Description';
import Stats from 'components/Profile/Stats/Stats';
import { ProfileContainer } from './Profile.styled';
import PropTypes from 'prop-types';

export default function Profile({ userInfo }) {
  return (
    <ProfileContainer>
      <Description {...userInfo} />
      <Stats stats={userInfo.stats} />
    </ProfileContainer>
  );
}

Profile.propTypes = {
  userInfo: PropTypes.object.isRequired,
};
