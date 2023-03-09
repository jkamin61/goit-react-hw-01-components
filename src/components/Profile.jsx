import PropTypes from 'prop-types';

export const Profile = ({ avatarImage, name, tagName, location, followers, views, likes }) => (
  <div className={'profile-container'}>
  <div className={'profile'}>
    <div className={'description'}>
      <img src={avatarImage} alt={'User avatar'} className={'avatar'} />
      <p className={'name'}>{name}</p>
      <p className={'tag'}>@{tagName}</p>
      <p className={'location'}>{location}</p>
    </div>
    <ul className={'stats'}>
      <li>
        <span className={'label'}>Followers: </span>
        <span className={'quantity'}>{followers}</span>
      </li>
      <li>
        <span className={'label'}>Views: </span>
        <span className={'quantity'}>{views}</span>
      </li>
      <li>
        <span className={'label'}>Likes: </span>
        <span className={'quantity'}>{likes}</span>
      </li>
    </ul>
  </div>
  </div>
);

Profile.propTypes = {
  avatarImage: PropTypes.string,
  name: PropTypes.string,
  tagName: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
