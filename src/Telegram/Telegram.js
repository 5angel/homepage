import React from 'react';

import './styles.css';

import fortranFigure from './figure-fortran.png';
import kozulyaFigure from './figure-kozulya.png';

const ITEMS = [{
  href: 'https://telegram.me/addstickers/Fortrach',
  image: fortranFigure,
  caption: 'Стикеры «Фортран»',
}, {
  href: 'https://t.me/govnokoder',
  image: kozulyaFigure,
  caption: 'Группа «Козуля и Говнокод»',
}]

const Telegram = () => (
  <div className="telegram part">
    <div className="container">
      <h2 className="telegram__heading">Телеграм</h2>
      {
        ITEMS.map(({
          href,
          image,
          caption,
        }) => (
          <a
            key={href}
            className="telegram__link"
            href={href}
          >
            <figure className="figure">
              <img
                className="figure__icon"
                src={image}
                alt={caption}
              />
              <figcaption className="figure__caption">{caption}</figcaption>
            </figure>
          </a>
        ))
      }
    </div>
  </div>
);

export default Telegram;
