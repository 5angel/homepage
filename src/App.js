import React, { Component } from 'react';

import Welcome from './Welcome/Welcome';
import Telegram from './Telegram/Telegram';
import Contacts from './Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <header className="wrap__header">
          <div className="container">
            Здесь должна быть шапка с модной навигацией
          </div>
        </header>
        <Welcome />
        <Telegram />
        <Contacts />
	  </div>
    );
  }
}

export default App;
