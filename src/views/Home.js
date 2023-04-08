// Home.js
export function Home() {
  const section = document.createElement("section");
  section.classList.add('hero-img-container', 'container-fluid');

  const img = document.createElement("img");
  // img.src = require("../assets/support.png");
  img.style.width = "50vw"; // vw = view width

  const hideFooter = document.querySelector(".text-muted");
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

  // section.append(img);

  return section;
}
