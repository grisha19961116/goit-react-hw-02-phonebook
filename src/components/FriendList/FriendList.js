import PropTypes from 'prop-types';
import style from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={style.friend__list}>
      {friends.map(({ isOnline, avatar, name }) => {
        return (
          <li className={style.item} key={name}>
            <span
              className={isOnline ? style.status_true : style.status_false}
            ></span>
            <img
              className={style.avatar}
              src={avatar}
              alt="our avatar"
              width="280"
            />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
