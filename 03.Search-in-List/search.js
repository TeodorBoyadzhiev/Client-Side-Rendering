import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const townTemplate = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(t => itemTemplate(t, match))}
      </ul>
   </div>
   <input type="text" id="searchText" />
   <button @click=${search}>Search</button>
   <div id="result"></div>
</article>
    `;

const itemTemplate = (name, match) => html`
<li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : '' }>${name}</li>`;


const body = document.body;
update();

function update(match = '') {
   const result = townTemplate(towns, match);
   render(result, body);

}

function search(event) {
   const match = event.target.parentNode.querySelector('input').value;
   update(match);
}
