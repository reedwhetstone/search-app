/** @format */

// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilterContacts] = useState([]);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setContacts(users));
  }, []);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchField);
    });

    setFilterContacts(newFilteredContacts);
  }, [contacts, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  // const filteredContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(searchField);
  // });

  return (
    <div className="App">
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Contacts" className="contact-search-box" />
      <CardList contacts={filteredContacts} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       contacts: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { contacts: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { contacts, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredContacts = contacts.filter((contact) => {
//       return contact.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Contacts" className="contact-search-box" />
//         <CardList contacts={filteredContacts} />
//       </div>
//     );
//   }
// }

export default App;
