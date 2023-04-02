// RoomDetails.js

export function RoomDetails(roomId) {

  const section = document.createElement('section');
  
  section.innerHTML = `
    <h2>Room</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  // pobieramy wybrany pokoj z serwera
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(response => response.json())
    .then(room => {
        const details = document.createElement('article');

        details.innerHTML = `
          <h3>${room.name}</h3>
          <p>Liczba łóżek: ${room.beds}</p>
          <p>Liczba gości: ${room.guests}</p>
          <p>${room.description}</p>
          <p>
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
        `;

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(details);
    });

  return section;
}
