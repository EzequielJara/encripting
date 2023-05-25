function encriptar() {
    var numberInput = document.getElementById("number");
    var number = numberInput.value.trim();

    // Validar que el número tenga exactamente 4 caracteres numéricos
    if (!/^\d{4}$/.test(number)) {
        showAlert("Ingrese un número de cuatro dígitos.");
        return;
    }

    // Verificar si el número contiene la letra "e" y eliminarla
    if (number.includes("e")) {
        number = number.replace(/e/gi, '');
    }

    var primerDigito = parseInt(number.charAt(0));
    var segundoDigito = parseInt(number.charAt(1));
    var tercerDigito = parseInt(number.charAt(2));
    var cuartoDigito = parseInt(number.charAt(3));

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
    var encryptNumber2 = encryptInput2.value.trim();

    // Validar que el número encriptado tenga exactamente 4 caracteres numéricos
    if (!/^\d{4}$/.test(encryptNumber2)) {
        showAlert("Ingrese un número de cuatro dígitos.");
        return;
    }

    
    if (encryptNumber2.includes("e")) {
        encryptNumber2 = encryptNumber2.replace(/e/gi, '');
    }

    var primerDigito = parseInt(encryptNumber2.charAt(0));
    var segundoDigito = parseInt(encryptNumber2.charAt(1));
    var tercerDigito = parseInt(encryptNumber2.charAt(2));
    var cuartoDigito = parseInt(encryptNumber2.charAt(3));

    intercambiar(primerDigito, tercerDigito);
    intercambiar(segundoDigito, cuartoDigito);

    primerDigito = (primerDigito + 10 - 7) % 10;
    segundoDigito = (segundoDigito + 10 - 7) % 10;
    tercerDigito = (tercerDigito + 10 - 7) % 10;
    cuartoDigito = (cuartoDigito + 10 - 7) % 10;

    var originalNumber = ""  + tercerDigito + cuartoDigito + primerDigito+ segundoDigito;
    document.getElementById("original-number").textContent = "El número original es: " + originalNumber;
}
