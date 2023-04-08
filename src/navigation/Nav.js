import { NavButton } from "../common/NavButton";
import { Cart } from "../views/Cart";
import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { Treatments } from "../views/Treatments";

const navItems = [
  { name: "", component: Home, image: require("../assets/logo.png"), alt: 'logo' },
  { name: "Zarezerwuj pokój", component: RoomList },
  { name: "Zarezerwuj zabieg", component: Treatments },
  { name: "🛒", component: Cart },
];

export function Nav() {
  const nav = document.createElement("nav");

  const navButtons = navItems.map((navItem) => {
    const button = NavButton(navItem.name, navItem.component, ["btn"]);
    if (navItem.image) {
      const navImg = document.createElement("img");
      navImg.src = navItem.image;
      navImg.style.height = "50px";
      navImg.alt = navItem.alt;
      button.prepend(navImg);
    }
    return button;
  });

  nav.append(...navButtons);

  return nav;
}
