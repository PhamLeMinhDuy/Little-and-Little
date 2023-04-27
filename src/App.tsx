import React from 'react';
import { Header } from './layout/header/header';
import { ContactInfo } from './layout/contact-info/ContactInfo';
import { Contact } from './layout/contact/Contact';
import { SendContact } from './layout/send-contact/SendContact';
import { PayFail } from './layout/pay-fail/PayFail';
import { PayTicketsItem } from './layout/pay-tickets-success/pay-tickets-item/PayTicketsItem';
import { PayTickets } from './layout/pay-tickets/PayTickets';
import './assets/css/base.css';
function App() {
  return (
    <div className="App">
      <PayTickets/>
    </div>
  );
}

export default App;
