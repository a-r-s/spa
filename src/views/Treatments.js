// Treatments.js

// import { RoomDetails } from './RoomDetails';
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';

export function Treatments() {

  const section = document.createElement('section');
  const ul = document.createElement('ul');
  
  section.innerHTML = `
    <h2>Zabiegi</h2>
    <p>Sprawdź listę zabiegów:</p>
    <p class="loading">Ładuję listę zabiegów...</p>
  `;

  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
        const lis = treatments.map(treatments => {
          const li = document.createElement('li');

          li.innerHTML = `
            <h4>${treatments.name}</h4>
            <p>
              <strong>Czas trwania: ${treatments.time} minut</strong>
            </p>
            <p>
              <strong>${treatments.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = 'Add to cart';
          addToCartButton.classList.add('btn');
          addToCartButton.addEventListener('click', () => cartManager.addItem(treatments));

          const detailsButton = NavButton('Read more...', () => RoomDetails(treatments.id), ['btn']);
          
          li.querySelector('footer').append(addToCartButton, detailsButton);

          return li;
        });

        ul.append(...lis);

        section.querySelector('.loading').remove();
        section.append(ul);
    });

  return section;
}
