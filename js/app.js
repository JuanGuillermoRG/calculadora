function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        resultado = num1 / num2;
        break;
        case "modulo":
        resultado = num1 % num2;
        break;
      default:
        resultado = "Operación inválida";
    }
    
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
  }
  




