export function TreatmentsDetails(treatmentId) {

  const section = document.createElement('section');
  section.classList.add('container');
  
  section.innerHTML = `
    <h2>Zabieg</h2>
    <p class="loading">Ładuję zabieg...</p>
  `;

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then(response => response.json())
    .then(treatments => {
        const details = document.createElement('article');

        details.innerHTML = `
          <h3>${treatments.name}</h3>
          <p class="box-details">Miejsce zabiegu: ${treatments.area}</p>
          <p class="box-details">Czas: ${treatments.time} minut</p>
          <p class="box-description">${treatments.description}</p>
          <p class="box-price">
            <strong>${treatments.price.toFixed(2)} PLN</strong>
          </p>
        `;

        section.querySelector('.loading').remove();
        section.append(details);
    });

  return section;
}
