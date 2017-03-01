import React, { Component } from 'react';

import { intros } from './intros.json';

const shuffleArray = (array) => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let currentIntros = [];

class Intro extends Component {
  getNextIntro = () => {
    if (!currentIntros.length) {
      currentIntros = shuffleArray(intros.slice());
    }

    this.setState({
      message: currentIntros.pop(),
    });
  };

  componentWillMount() {
    this.getNextIntro();
  }

  render() {
    const { message } = this.state;

    return (
      <div
        onClick={this.getNextIntro}
        className="intro"
      >
        { message }
      </div>
    );
  }
}

export default Intro;
