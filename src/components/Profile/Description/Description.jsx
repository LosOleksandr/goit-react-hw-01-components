import PropTypes from 'prop-types';
import { DesriptionContainer } from './Description.styled';

export default function Description({ avatar, username, tag, location }) {
  return (
    <DesriptionContainer>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </DesriptionContainer>
  );
}

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
