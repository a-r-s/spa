// RoomList.js

import { RoomDetails } from "./RoomDetails";
import { NavButton } from "../common/NavButton";
import { cartManager } from "../cart/cart-manager";



export function RoomList() {
  const section = document.createElement("section");
  const ul = document.createElement("ul");
  ul.classList.add("boxes");

  section.innerHTML = `
    <h2>Lista dostępnych pokoi</h2>

    <p>Określ daty pobytu:</p>
    <input type="date" id="date-from" value="">
    <input type="date" id="date-to" value="">

    <p>Sprawdź ofertę pokoi.</p>
    <p class="loading">Ładuję listę pokoi...</p>
  `;

  // pobieramy liste pokoi z serwera
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        const li = document.createElement("li");
        li.classList.add('box');

        li.innerHTML = `
            
            <p class="news-title">${room.name}</p>
            <p class="news-date">
              <strong>${room.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Dodaj do koszyka";
        addToCartButton.classList.add("btn");
        addToCartButton.addEventListener("click", () =>
          cartManager.addItem(room)
        );

        const detailsButton = NavButton(
          "Szczegóły...",
          () => RoomDetails(room.id),
          ["btn"]
        );

        li.querySelector("footer").append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);

      const inputDateFrom = document.getElementById("date-from");
      const inputDateTo = document.getElementById("date-to");

      inputDateFrom.setAttribute(
        "value",
        new Date().toISOString().slice(0, 10)
      );
      inputDateTo.setAttribute("value", new Date().toISOString().slice(0, 10));

      inputDateFrom.setAttribute("min", new Date().toISOString().slice(0, 10));

      inputDateFrom.addEventListener("change", () => {
        inputDateTo.setAttribute("min", inputDateFrom.value);
        inputDateTo.setAttribute("value", inputDateFrom.value);

        const maxDate = new Date(inputDateFrom.value);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        inputDateTo.setAttribute("max", maxDate.toISOString().slice(0, 10));

        if (
          inputDateTo.value &&
          inputDateTo.value > inputDateTo.getAttribute("max")
        ) {
          inputDateTo.value = "";
        }
      });

      inputDateTo.addEventListener("change", () => {
        if (inputDateTo.value < inputDateFrom.value) {
          inputDateTo.value = inputDateFrom.value;
          
        }

      });

      

      section.querySelector(".loading").remove();
      section.append(ul);
    });

  return section;
}
