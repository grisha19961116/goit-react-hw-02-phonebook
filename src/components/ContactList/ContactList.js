import style from './ContactList.module.css';

const ContactList = ({ contacts, listenerOnRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <p className={style.name}>{name}</p>
            <p className={style.phone}>{phone}</p>
            <p onClick={() => listenerOnRemove(id)} className={style.p__delete}>
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
