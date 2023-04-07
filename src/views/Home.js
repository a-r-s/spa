// Home.js
export function Home() {
  const section = document.createElement("section");

  const img = document.createElement("img");
  img.src = require("../assets/support.png");
  img.style.width = "50vw"; // vw = view width

  const dateElement = document.getElementById("footer-date");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  dateElement.textContent = currentYear;

  section.innerHTML = `
    <h2>Home</h2>
    <p>Witaj w IT SPA.</p>
    <p>Każdy programista lubi u nas odpoczywać.</p>
  `;

  section.append(img);

  return section;
}
