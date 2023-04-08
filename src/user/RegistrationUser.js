export function RegistationUser() {
  const section = document.createElement("section");
  section.classList.add("container");
  section.innerHTML = `
    <h2>Rejestracja</h2>
    <p id="success-message" class="alert alert-success" style="display:none; color:green;">Rejestracja przebiegła pomyślnie.</p>
    <p id="danger-message" class="alert alert-danger" style="display:none;">Wystąpił błąd. Spróbuj ponownie później</p>
    <div class="row">
      <form id="registrationForm" action="#" class="col-lg-6 col-md-6 col-sm-12 login-registration-form">
        <div class="form-group">
          <label for="e-mail">Adres e-mail</label>
          <input type="email" class="form-control" id="e-mail" placeholder="Wprowadź swój e-mail" require>
        </div>
        <br>
        <div class="form-group">
          <label for="password">Hasło</label>
          <input type="password" class="form-control" id="password" placeholder="Wprowadź hasło" require>
          <small id="emailHelp" class="form-text text-muted">Hasło powinno składać się z co najmniej 8 znaków, zawierać chociaż jedną cyfrę, wielką literę oraz znak specjalny.</small>
        </div>
        <br>
        <button type="submit" id="send-form" class="btn btn-primary mb-2">Zarejestruj się</button>
      </form>
      <div class="col-lg-6 col-md-6 col-sm-12 registration-img" id="registration-img"></div>
    </div>
  `;

  const imgRegistration = document.createElement("img");
  imgRegistration.src = require("../assets/registration/registration.jpg");
  imgRegistration.style.width = "100%";
  const divWithImg = section.querySelector("#registration-img");
  divWithImg.append(imgRegistration);

  const sendFormBtn = section.querySelector("#send-form");
  const emailInput = section.querySelector("#e-mail");
  const dangerMessage = section.querySelector("#danger-message");
  const successMessage = section.querySelector("#success-message");

sendFormBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const passwordInput = section.querySelector("#password");
  const password = passwordInput.value;

  if (!email.includes("@")) {
    dangerMessage.textContent = "Podany adres e-mail jest nieprawidłowy. Popraw go";
    dangerMessage.style.display = "block";
    return;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    dangerMessage.textContent = "Hasło jest nieprawidłowe. Powinno składać się z co najmniej 8 znaków, zawierać chociaż jedną cyfrę, wielką literę oraz znak specjalny.";
    dangerMessage.style.display = "block";
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const data = await response.json();
    if (data.length > 0) {
      throw new Error("Użytkownik już istnieje");
    }

    const userData = { email, password };
    const saveNewUser = await fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!saveNewUser.ok) {
      throw new Error("Wystąpił błąd");
    }

    section.querySelector("form").style.display = "none";
    successMessage.style.display = "block";
    dangerMessage.style.display = "none";

    setTimeout(() => {
      location.reload();
    }, 5000);
  } catch (error) {
    dangerMessage.style.display = "block";
  }
});

  return section;
}
