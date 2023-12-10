import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
// import { getContacts } from '../../redux/selectors';
// import { getFilter } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // console.log(contacts);
  // const filter = useSelector(getFilter);
  // console.log(filter);
  const dispatch = useDispatch();

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
