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

  function procedimientoInsercion(){
    let A = document.getElementById("arregloInsercion").value.split(",");
    let n = A.length;
    for (let i = 1; i < n; i++){
      let x = A[i];
      let j = i - 1;
      while((x < A[j]) && (j > -1)){
        A[j + 1] = A[j];
        j--;
      }
      A[j + 1] = x;
    }
    document.getElementById("resultadoInsercion").innerText = A;
  }