const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
      e.preventDefault();

      checkInputs();
});

function checkInputs() {
      const usernameValue = username.value
      const emailValue = email.value
      const passwordValue = password.value
      const passwordConfirmationValue = passwordConfirmation.value

      if (usernameValue === "") {
            setErrorFor(username, "Nome de usuário é obrigatório!");
      } else {
            setSeccessFor(username);
      }

      if (emailValue === "") {
            setErrorFor(email, "Email é obrigatório!")
      } else if (!checkEmail(emailValue)) {
            setErrorFor(email, "Insira um email válido!")
      } else {
            setSeccessFor(email)
      }

      if (passwordValue === "") {
            setErrorFor(password, "Senha obrigatória!")
      } else if (passwordValue.length < 7) {
            setErrorFor(password, "Senha com mínimo de 7 caracteres.")
      } else {
            setSeccessFor(password)
      }

      if (passwordConfirmationValue === "") {
            setErrorFor(passwordConfirmation, "Confirmação de senha é obrigatória!")
      } else if (passwordConfirmationValue !== passwordValue) {
            setErrorFor(passwordConfirmation, "As senhas não conferem!")
      } else {
            setSeccessFor(passwordConfirmation);
      }

      const formControls = form.querySelectorAll(".form-control")
      const formIsValid = [... formControls].every((formControl) => {
            return (formControl.className === "form-control success");
      });

      if (formIsValid) {
            console.log("Formulário 100% válido!!")
      }
}

function setErrorFor(input, mensage) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small")

      //Adicionar a menssagem de erro
      small.innerText = mensage;

      //Adicionar a classe de erro
      formControl.className = "form-control error"
}

function setSeccessFor(input) {
      const formControl = input.parentElement;

      //Adicionar a classe de Success
      formControl.className = "form-control success";
}

function checkEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
}