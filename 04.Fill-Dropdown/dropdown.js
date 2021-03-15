import { html, render } from '../node_modules/lit-html/lit-html.js';


const optionTemplate = (list) => html`<select>
    ${list.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>
`;

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menu = document.querySelector('div');
getData();

async function getData() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list));

    const response = await fetch(url);
    const data = await response.json();
    const list = Object.value(data);

    update(list);
}

function update(list) {

    const result = optionTemplate(list);
    render(result, menu);
}


async function addItem(ev, list) {
    ev.preventDefault();

    const input = document.getElementById('itemText');
    const item = {
        text: input.value
    };

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    const data = await response.json();
    list.push(data);

    update(list);
}