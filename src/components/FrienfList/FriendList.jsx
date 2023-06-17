import FriendListItem from './FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

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
