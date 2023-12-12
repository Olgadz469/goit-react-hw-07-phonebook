import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  // console.log(filteredContacts);

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
