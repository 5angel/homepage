import React, { Component } from 'react';

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Telegram from './Telegram/Telegram';
import Contacts from './Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Header />
        <Welcome />
        <Telegram />
        <Contacts />
	    </div>
    );
  }
}

export default App;
