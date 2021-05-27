import style from './Filter.module.css';
const Filter = ({ listenerOnChange }) => {
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      onChange={({ target }) => listenerOnChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
export default Filter;
