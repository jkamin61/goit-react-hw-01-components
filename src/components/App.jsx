import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (

    <>
      <Profile
        avatarImage={user.avatar}
        name={user.username}
        tagName={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>

      <Statistics
        title='UPLOAD STATS'
        stats={data}
      ></Statistics>

      <FriendList friends={friends}>
      </FriendList>

      <TransactionHistory
      transactions={transactions}
      >

      </TransactionHistory>
    </>
  );
};
