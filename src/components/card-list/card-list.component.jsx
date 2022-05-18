/** @format */

import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = ({ contacts }) => (
  <div className="card-wrapper">
    {contacts.map((contact) => {
      return <Card key={contact.id} contact={contact} />;
    })}
  </div>
);

export default CardList;
