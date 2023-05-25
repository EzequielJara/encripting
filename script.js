function encriptar() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);
    if (number < 1000 || number > 9999) {
        showAlert("Ingrese un número de cuatro dígitos.");
        return;
    }
    var primerDigito = Math.floor(number / 1000);
    var segundoDigito = Math.floor((number / 100) % 10);
    var tercerDigito = Math.floor((number / 10) % 10);
    var cuartoDigito = number % 10;

    primerDigito = (primerDigito + 7) % 10;
    segundoDigito = (segundoDigito + 7) % 10;
    tercerDigito = (tercerDigito + 7) % 10;
    cuartoDigito = (cuartoDigito + 7) % 10;

    intercambiar(primerDigito, tercerDigito);
    intercambiar(segundoDigito, cuartoDigito);

    var encryptedNumber = ""   + tercerDigito + cuartoDigito+primerDigito  + segundoDigito ;
    document.getElementById("encrypted-number").textContent = "El número encriptado es: " + encryptedNumber;
}

function intercambiar(digito1, digito2) {
    var temp = digito1;
    digito1 = digito2;
    digito2 = temp;
}
function showAlert(message) {
    var alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-danger", "animate__animated", "animate__fadeInUp");
    alertDiv.textContent = message;

    var container = document.getElementById("container");
    container.appendChild(alertDiv);

    setTimeout(function() {
        alertDiv.classList.remove("animate__fadeInUp");
        alertDiv.classList.add("animate__fadeOutDown");
        
        setTimeout(function() {
            alertDiv.remove();
        }, 1000);
    }, 3000);
}

function desencriptar() {
    var encryptInput2 = document.getElementById("encrypt-number2");
    var encryptNumber2 = parseInt(encryptInput2.value);
    if (encryptNumber2 < 0 ||  encryptNumber2 > 9999) {
        showAlert("Ingrese un número de cuatro dígitos.");
        return;
    }
    var primerDigito = Math.floor(encryptNumber2 / 1000);
    var segundoDigito = Math.floor((encryptNumber2 / 100) % 10);
    var tercerDigito = Math.floor((encryptNumber2 / 10) % 10);
    var cuartoDigito = encryptNumber2 % 10;

    intercambiar(primerDigito, tercerDigito);
    intercambiar(segundoDigito, cuartoDigito);

    primerDigito = (primerDigito + 10 - 7) % 10;
    segundoDigito = (segundoDigito + 10 - 7) % 10;
    tercerDigito = (tercerDigito + 10 - 7) % 10;
    cuartoDigito = (cuartoDigito + 10 - 7) % 10;

    var originalNumber = ""  + tercerDigito + cuartoDigito + primerDigito+ segundoDigito;
    document.getElementById("original-number").textContent = "El número original es: " + originalNumber;
}