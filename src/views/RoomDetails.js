// RoomDetails.js

export function RoomDetails(roomId) {

  const section = document.createElement('section');
  section.classList.add('container');
  
  section.innerHTML = `
    <h2>Room</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(response => response.json())
    .then(room => {
        const details = document.createElement('article');

        details.innerHTML = `
          <h3>${room.name}</h3>
          <p class="box-details"><strong>Liczba łóżek: ${room.beds}</strong></p>
          <p class="box-details"><strong>Liczba gości: ${room.guests}</strong></p>
          <p class="box-description">${room.description}</p>
          <p class="box-price">
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
        `;

        section.querySelector('.loading').remove();
        section.append(details);
    });

  return section;
}
