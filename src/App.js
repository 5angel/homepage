import React, { Component } from 'react';

import Welcome from './Welcome/Welcome';
import Publications from './Publications/Publications';
import Telegram from './Telegram/Telegram';
import Contacts from './Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Welcome />
        <Telegram />
        <Contacts />
	    </div>
    );
  }
}

export default App;
