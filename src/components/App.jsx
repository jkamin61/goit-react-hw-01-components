import { Profile } from './Profile';
import user from './user.json';

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
    </>
  );
};
