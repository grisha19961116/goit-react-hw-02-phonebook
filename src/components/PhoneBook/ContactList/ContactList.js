import style from './ContactList.module.css';

export default function ContactList({ propContactsFilter, filterByInput }) {
  if (propContactsFilter === []) {
    return null;
  }
  return (
    <>
      {
        <ul>
          {propContactsFilter.length > 0 &&
            propContactsFilter.map(({ id, nickName, number }) => {
              const li = (
                <li key={id}>
                  <span>{nickName} : </span>
                  <span>{number}</span>
                </li>
              );
              if (filterByInput === '') {
                return li;
              } else if (
                nickName.toLowerCase() === filterByInput.toLowerCase()
              ) {
                return li;
              }
            })}
        </ul>
      }
    </>
  );
}
