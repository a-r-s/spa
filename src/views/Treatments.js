import { TreatmentsDetails } from './TreatmentsDetails';
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';

export function Treatments() {

  const section = document.createElement('section');
  section.classList.add('container')
  const ul = document.createElement('ul');
  
  section.innerHTML = `
    <h2>Zabiegi</h2>
    <p>Sprawdź listę dostępnych zabiegów:</p>
    <p class="loading">Ładuję listę zabiegów...</p>
  `;

  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
        const lis = treatments.map(treatments => {
          const li = document.createElement('li');

          li.innerHTML = `
            <p class="box-name">${treatments.name}</p>
            <p class="box-description">${treatments.description}</p>
            <p>
              <strong>Czas trwania: ${treatments.time} minut</strong>
            </p>
            <p class="box-price">
             ${treatments.price.toFixed(2)} PLN
            </p>
            <footer></footer>
          `;

          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = 'Dodaj do koszyka';
          addToCartButton.classList.add('btn');
          addToCartButton.addEventListener('click', () => cartManager.addItem(treatments));

          const detailsButton = NavButton('Szczegóły...', () => TreatmentsDetails(treatments.id), ['btn']);
          
          li.querySelector('footer').append(addToCartButton, detailsButton);

          return li;
        });

        ul.append(...lis);

        section.querySelector('.loading').remove();
        section.append(ul);
    });

  return section;
}
