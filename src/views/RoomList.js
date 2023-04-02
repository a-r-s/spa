// RoomList.js

import { RoomDetails } from './RoomDetails';
import { NavButton } from '../common/NavButton';
import { cartManager } from '../cart/cart-manager';

export function RoomList() {

  const section = document.createElement('section');
  const ul = document.createElement('ul');
  
  section.innerHTML = `
    <h2>Room List</h2>
    <p>Sprawdź ofertę pokoi.</p>
    <p class="loading">Ładuję listę pokoi...</p>
  `;

  // pobieramy liste pokoi z serwera
  fetch('http://localhost:3000/rooms')
    .then(response => response.json())
    .then(rooms => {
        const lis = rooms.map(room => {
          const li = document.createElement('li');

          li.innerHTML = `
            <h4>${room.name}</h4>
            <p>
              <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = 'Add to cart';
          addToCartButton.classList.add('btn');
          addToCartButton.addEventListener('click', () => cartManager.addItem(room));

          const detailsButton = NavButton('Read more...', () => RoomDetails(room.id), ['btn']);
          
          li.querySelector('footer').append(addToCartButton, detailsButton);

          return li;
        });

        ul.append(...lis);

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(ul);
    });

  return section;
}
