import React from 'react';
import { Header } from './layout/header/header';
import { ContactInfo } from './layout/contact-info/ContactInfo';
import { Contact } from './layout/contact/Contact';
import { SendContact } from './layout/send-contact/SendContact';
import { PayFail } from './layout/pay-fail/PayFail';
import { PayTicketsItem } from './layout/pay-tickets-success/pay-tickets-item/PayTicketsItem';
import { PayTickets } from './layout/pay-tickets/PayTickets';
import { BookTickets } from './layout/book/book';
import { EventItem } from './layout/event-item/EventItem';
import { View_contact } from './view/View_contact/View_contact';
import { View_event } from './view/View_event/View_event';
import { View_home } from './view/View_home/View_home';
import './assets/css/base.css';
function App() {
  return (
    <div className="App">
      <View_event/>

    </div>
  );
}

export default App;
