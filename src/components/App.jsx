import { Profile } from './Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

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
