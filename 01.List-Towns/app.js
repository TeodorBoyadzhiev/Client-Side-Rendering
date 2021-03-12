import { html, render } from '../node_modules/lit-html/lit-html.js';


const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)};
</ul>`;



document.getElementById('btnLoadTowns').addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const elements = document.getElementById('towns').value;
    const towns = elements.split(', ').map(el => el.trim());

    const result = listTemplate(towns);
    const root = document.getElementById('root');

    render(result, root);

}


