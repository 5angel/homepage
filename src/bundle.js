import "./styles.scss";

const cards = [{
    name: 'Кирилл',
    position: 'Тимлид',
    message: 'Влад помогает мне решить тимлидские вопросы, которые мне стыдно даже гуглить. Чувствую себя увереннее и&nbsp;спокойнее, думаю, это положительно скажется на&nbsp;команде и&nbsp;продукте в&nbsp;целом, а&nbsp;самое важное&nbsp;— это положительно сказывается на&nbsp;мне. Перестаю париться и&nbsp;получаю больше удовольствия от&nbsp;работы',
}, {
    name: 'Дмитрий',
    position: 'Тимлид',
    message: 'Владислав обладает и&nbsp;компетенцией и&nbsp;скилом эту компетенцию применить в&nbsp;формате консультации. Здесь он&nbsp;справился на&nbsp;100%. Не&nbsp;скажу, что у&nbsp;меня большой клиентский опыт консалтинга, но&nbsp;скажу, что Влад работает на&nbsp;встрече как отличный специалист по&nbsp;моей личной шкале опыта',
}, {
    name: 'Николай',
    position: 'Разработчик',
    message: 'Сходил к&nbsp;Козуле на&nbsp;консультацию,&nbsp;— мне понравилось! Во-первых, сказал, что я&nbsp;всё правильно делаю. Во-вторых, сказал, в&nbsp;каком направлении можно развиваться, задал хорошие вопросы, дал несколько ценных советов. Рекомендую',
}, {
    name: 'Олег',
    position: 'Разработчик',
    message: 'Все круто, по&nbsp;паре наводящих вопросов понял проблему, предложил варианты решения, честно сказав, что это сработает в&nbsp;долгосроке только (с&nbsp;чем я&nbsp;согласен). Общаться было приятно, все дополнительные вопросы отвечены&nbsp;— 10/10',
}]

function fillElement(tag, className, content = '') {
    const el = document.createElement(tag);
    el.className = className;
    el.innerHTML = content;
    return el;
}

document.addEventListener("DOMContentLoaded", () => {
    const STEP = 400;

    const toleft = document.getElementById("toleft");
    const toright = document.getElementById("toright");
    const pane = document.getElementById("pane");

    cards.forEach((item) => {
        const li = fillElement("li", "fcard");
        const h3 = fillElement("h3", "fcard__name", item.name);
        const h4 = fillElement("h4", "fcard__position", item.position);
        const p = document.createElement("p");
        p.innerHTML = item.message;
        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(p);
        pane.appendChild(li);
    });

    const total = pane.children.length - 1;

    let position = 0;

    function setPosition(value) {
        position += value;
        pane.style.transform = `translateX(${position}px)`;
    }

    toright.addEventListener("click", (event) => {
        event.preventDefault();
        if (-position < total * STEP) {
            setPosition(-STEP);
        }
    });

    toleft.addEventListener("click", (event) => {
        event.preventDefault();

        if (position < 0) {
            setPosition(STEP);
        }
    });
});