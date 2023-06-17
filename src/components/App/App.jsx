import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FrienfList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FrienfList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile userInfo={user} />
      <Statistics title={'Upload stats'} uploadData={data} />
      <FriendList friendsInfo={friends} />
      <TransactionHistory transactionsInfo={transactions} />
    </Container>
  );
};
