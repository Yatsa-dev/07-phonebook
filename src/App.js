/* eslint-disable react-hooks/rules-of-hooks */
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useFetchContactsQuery } from './redux/operations';

export default function App() {
  const { data: items } = useFetchContactsQuery();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm items={items} />
      <h2>Contacts</h2>
      <Filter />
      {items && <ContactList items={items} />}
    </Container>
  );
}
