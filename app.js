function insert(num) {

   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;

}

function clean() {

    document.getElementById('resultado').innerHTML = "";
}

function back() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}


function calcular() { 

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) 
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

}

function percentage_1() {
  
    
    var percent = document.getElementById("resultado").value;
      
    var num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = (num / 100) * percent;
}
