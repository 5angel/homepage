import React from 'react';

import './styles.css';

import statue from './vapor-statue.png';

const PHONE = '+7 (964) 632-63-34';

const LINKS = [
  'mailto:vladsenator@gmail.com',
  'https://twitter.com/vkozulya',
  'https://t.me/vkozulya',
];

const Contacts = () => (
  <div className="vapor part">
    <div className="container">
      <div className="contacts">
        <h2 className="contacts__heading">Contact me</h2>
        <span className="contacts__phone">{PHONE}</span>
        <ul className="list">
          {
            LINKS.map((link, index) => (
              <li
                key={index}
                className="list__item"
              >
                <a
                  className="contacts__link"
                  href={link}
                >
                  {link.replace(/(mailto:|https:\/\/)/, '')}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <img
        className="vapor__statue"
        src={statue}
        alt="A E S T H E T I C"
      />
    </div>
  </div>
);

export default Contacts;
