// TreatmentsDetails.js

export function TreatmentsDetails(treatmentId) {

  const section = document.createElement('section');
  
  section.innerHTML = `
    <h2>Zabieg</h2>
    <p class="loading">Ładuję zabieg...</p>
  `;

  // pobieramy wybrany pokoj z serwera
  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then(response => response.json())
    .then(treatments => {
        const details = document.createElement('article');

        details.innerHTML = `
          <h3>${treatments.name}</h3>
          <p>Miejsce zabiegu: ${treatments.area}</p>
          <p>Czas: ${treatments.time}</p>
          <p>${treatments.description}</p>
          <p>
            <strong>${treatments.price.toFixed(2)} PLN</strong>
          </p>
        `;

        section.querySelector('.loading').remove();
        section.append(details);
    });

  return section;
}
