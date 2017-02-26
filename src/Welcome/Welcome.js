import React, { Component } from 'react';

import './styles.css';

import photo from './photo.jpg';
import linkedin from './linkedin.svg';

import { intros } from './intros.json';

const getIntro = () => {
  const index = Math.round(Math.random() * (intros.length - 1));
  return intros[index];
}

class Welcome extends Component {
  state = {
    message: getIntro(),
  };

  getNextIntro = () => {
    this.setState({
      message: getIntro(),
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="welcome javascript part">
        <div className="container">
          <header className="welcome__header">
            <div
              onClick={this.getNextIntro}
              className="welcome__intro"
            >
              { message }
            </div>
            <h1 className="welcome__title">
              Владислав Козуля
            </h1>
            <h2 className="welcome__subtitle">
              Lead JavaScript Developer,
              <br />
              UI/UX Designer & PM*
            </h2>
            <a
              className="cv-link"
              href="https://linkedin.com/in/govnokoder"
            >
              <img
                className="cv-link__icon"
                src={linkedin}
                alt="LinkedIn"
              />
              govnokoder
            </a>
          </header>
          <span className="welcome__hint">*а также автор большого числа несмешных мемов</span>
          <img
            className="welcome__photo"
            src={photo}
            alt="Козуля"
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
