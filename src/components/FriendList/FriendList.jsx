import PropTypes from 'prop-types';

const activeStatusDot = (isOnline) => {
  if (isOnline) {
    return 'friend-status status-online';
  } else {
    return 'friend-status status-offline';
  }
};
export const FriendList = ({ friends }) => (
  <div className={'friend-container'}>
    <ul className={'friend-list'}>
      {Object.values(friends).map((element, index) => (
        <li key={index} className={'friend-item'}>
          <span className={activeStatusDot(element.isOnline)}></span>
          <img className={'friend-avatar'} src={element.avatar} alt={'avatar'} width={'48'} />
          <p className={'friend-name'}>{element.name}</p>
        </li>
      ))}
    </ul>
  </div>
);


FriendList.propTypes = {
  friends: PropTypes.any,
};
