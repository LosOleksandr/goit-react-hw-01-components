import { Item, Status } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <Item>
      <Status status={status}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
