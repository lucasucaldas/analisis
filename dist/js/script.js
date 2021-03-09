'use strict';
function misterio() {
   var n = document.getElementById("n").value;
    var i = 1;
    var j = 0;
    for (let k = 1; k <= n; k++) {
      j = i + j;
      i = j - i;
    }
    document.getElementById('resultado').innerHTML += "Valor factorial: " + j;
  }

  function demostrar(){
    var a = parseInt(document.getElementById("a").value);
    var j = parseInt(document.getElementById("j").value);

    a = a + 1;
    j = a * j;
    a = j + a;
    document.getElementById("resultadoDemostrar").innerHTML += "Valor a: " + 
      a + " Valor j: " + j;
  } 

  function preguntaDos(){
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var z = parseInt(document.getElementById("z").value);

    if ((x + y) <= z){
      x = y + z;
    }
    else{
      y = x + z;
    }

    document.getElementById("preguntaDos").innerHTML += 
      "Valor x: " + x + " Valor y: " + y + " Valor z: " + z;
  }

  function selectionSort(){
    let mostrar = '';
    let datos = document.getElementById("selectionSortArray").value.split(",");
    let A = [];
    datos.forEach(element => {
      A.push(parseInt(element));
    });
    mostrar = `
              <p>Array Ingresado: ${datos}</p>
              <p>*************************</p>
            `
    let n = A.length;
    mostrar +=  `
                  <p>Valor de n antes del ciclo: ${n}</p>
                  <p>*************************</p>
                `
    for (let j = 0; j <= (n - 1); j++){
      mostrar +=  `
                    <p>Valor de j en el ciclo exterior: ${j}</p>
                    <p>*************************</p>
                  `
      let smallest = j;
      mostrar +=  `
                    <p>Valor de smallest en el ciclo exterior: ${smallest}</p>
                    <p>*************************</p>
                  `
      for (let i = (j + 1); i <= n; i++) {
        mostrar +=  `
                      <p>Valor de i y j en el ciclo interior: i->${i}, j->${j}</p>
                      <p>*************************</p>
                    `
        if (A[i] < A[smallest]){
          mostrar +=  `
                        <p>Valor de A[i] y A[smallest] en el condicional: A[i]->${A[i]}, A[smallest]->${A[smallest]}</p>
                        <p style="color: blueviolet;">************CONDICIONAL*************</p>
                      `
          smallest = i;
          mostrar +=  `
          <p>Valor smallest en el condicional: ${smallest}</p>
          <p class="finalizaFor" style="color: blueviolet;">FINALIZA ITERACION FOR INTERIOR</p>
        `
        }        
      }

      [A[j], A[smallest]] = [A[smallest], A[j]]; 
      mostrar +=  `
                    <p>Valor de A[j] y A[smallest] después del intercambio: A[j]->${A[j]}, A[smallest]->${A[smallest]}</p>
                    <p class="finalizaFor" style="color: red;">FINALIZA ITERACION FOR EXTERIOR</p>
                  ` 
    }
    document.getElementById("respuestaSelectionSort").style.fontSize = "2rem";
    document.getElementById("respuestaSelectionSort").innerHTML = mostrar;
  }