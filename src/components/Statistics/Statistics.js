import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.stat__title}>{title && title}</h2>
      <ul className={style.stat__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={style.stat__item} key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
