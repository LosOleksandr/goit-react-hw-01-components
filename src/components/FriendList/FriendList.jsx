import FriendListItem from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friendsInfo }) {
  return (
    <List>
      {friendsInfo.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            status={isOnline}
            key={id}
          />
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friendsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
