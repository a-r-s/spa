export function Home() {
  const section = document.createElement("section");
  section.classList.add('hero-img-container', 'container-fluid');

  const dateElement = document.getElementById("footer-date");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  dateElement.textContent = currentYear;

  section.innerHTML = `
        <h1 class="hero-header lineUp">SPA dla IT</h1>
        <p class="hero-lead lineUp"> 
           Tutaj każdy informatyk czuje się lepiej niż na home office
        </p>
  `;

  return section;
}
