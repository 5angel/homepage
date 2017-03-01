import React from 'react';

import './styles.css';

import figureFortran from './figure-fortran.png';
import figureKozulya from './figure-kozulya.png';

const Grid = () => (
  <div className="main">
    <div className="container">
      <div className="row">
        <div className="column -span_2">
          <h3>Кто такой, чем знаменит</h3>
          <p>
            Смешными картинками в интернете, если быть честным. Пишу разное в твиттере <a href="https://twitter.com/vkozulya">@vkozulya</a>. Если вы увидели шутку про фронтенд, то с высокой вероятностью—это мое.
          </p>
          <p>
            Раньше публиковал заметки на <a href="https://vc.ru/paper/author/vladislavkozulya">VC.ru</a>, сейчас в основном на <a href="https://medium.com/@vkozulya/">Медиуме</a>.
          </p>
          <p>
            Также спроектировал интерфейсы/написал клиентский код для всего на свете: логистических сервисов, редакционных систем, торговых приложений, онлайн игр и других. Впрочем, это мало кому интересно.
          </p>
        </div>
        <div className="column -span_1">
          <h3>Как связаться</h3>
          <p>
            Звоните по <a href="tel:+79646326334">+7 (964) 632-63-34</a>
          </p>
          <p>
            Пишите на <a href="mailto:vladsenator@gmail.com">vladsenator@gmail.com</a>
          </p>
          <p>
            Или в телеграм <a href="https://t.me/vkozulya">@vkozulya</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <a
            className="square"
            href="https://telegram.me/addstickers/Fortrach"
          >
            <div className="square__wrap">
              <img
                role="presentation"
                src={figureFortran}
                className="square__image"
              />
            </div>
            <h3 className="square__label">
              Стикеры «Фортран»
            </h3>
          </a>
        </div>
        <div className="column">
          <a
            className="square"
            href="https://telegram.me/addstickers/Fortrach"
          >
            <div className="square__wrap">
              <img
                role="presentation"
                src={figureKozulya}
                className="square__image"
              />
            </div>
            <h3 className="square__label">
              Группа «Козуля&nbsp;и&nbsp;Говнокод»
            </h3>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Grid;
