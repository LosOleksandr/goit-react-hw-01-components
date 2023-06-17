import { Item, Status } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <Item>
      <Status status={status}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}
