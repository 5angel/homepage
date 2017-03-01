import React, { Component } from 'react';

import Welcome from './Welcome/Welcome';
import Grid from './Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Welcome />
        <Grid />
	    </div>
    );
  }
}

export default App;
