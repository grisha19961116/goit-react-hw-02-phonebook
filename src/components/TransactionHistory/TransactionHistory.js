import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction__history}>
      <thead className={style.transaction__history__thead}>
        <tr className={style.transaction__history__tr__head}>
          <th className={style.transaction__history__th}>Type</th>
          <th className={style.transaction__history__th}>Amount</th>
          <th className={style.transaction__history__th}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.transaction__history__tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={style.transaction__history__tr__bottom} key={id}>
              <td className={style.transaction__history__td}>{type}</td>
              <td className={style.transaction__history__td}>{amount}</td>
              <td className={style.transaction__history__td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ),
};
