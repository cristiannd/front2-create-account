document.addEventListener("submit", e => {
  e.preventDefault()

  const firstName = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const terms = document.getElementById("terms").checked

  validateName(firstName)
  validateEmail(email)
  validatePassword(password)
  validateTerms(terms)
})

function validateName(name){
  if(name.length === 0) return document.getElementById("error-name").innerText = "* El campo nombre no puede quedar vacío"
  
  for(let i=0; i<name.length; i++){
    if(name[i] === "0" || name[i] === "1" || name[i] === "2" || name[i] === "3" || name[i] === "4" || name[i] === "5" || name[i] === "6" || name[i] === "7" || name[i] === "8" || name[i] === "9"){
      return document.getElementById("error-name").innerText = "* El nombre no puede contener números"
    }
  }

  document.getElementById("error-name").innerText = ""
}

function validateEmail(email){
  if(email.length === 0) return document.getElementById("error-email").innerText = "* El campo email no puede quedar vacío"

  document.getElementById("error-email").innerText = ""
}

function validatePassword(password){
  if(password.length === 0) return document.getElementById("error-password").innerText = "* El campo contraseña no puede quedar vacío"
  if(password.length < 4) return document.getElementById("error-password").innerText = "* La contraseña debe tener más de 4 caracteres"

  document.getElementById("error-password").innerText = ""
}

function validateTerms(terms){
  if(terms === false) return document.getElementById("error-terms").innerText = "* Debes aceptar los términos y condiciones"

  document.getElementById("error-terms").innerText = ""
}