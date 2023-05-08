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
import './assets/css/base.css';
function App() {
  return (
    <div className="App">
      <BookTickets/>
      <EventItem event_name='Sự kiện 1' location='Đầm sen Park' start_date='30/05/2021' end_date='01/06/2021' price='25.000'/>
    </div>
  );
}

export default App;
