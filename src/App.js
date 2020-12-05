import userData from './data/user';
import statisticData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions';

import Profile from './components/Profile/Profile.js';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendList/FriendList.js';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statisticData} />
      <Statistics stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />;
    </>
  );
}
// {friends.map(elem => {
// делай деструктуризацию
// {friends.map(({id, name И так далее }) => {
// и подпишись на мой канал, что бы смотреть видео дз как они делаются
