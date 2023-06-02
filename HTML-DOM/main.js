function exibvalor1(){
    let campoA = document.getElementById("campo1").value;
    console.log(campo1)

}

function exibvalor2(){
    let campoB = document.getElementById("campo2").value;
    console.log(campo2)

}

function enviar(){
    let campoA = document.getElementById("campo1").value;
    let campoB = document.getElementById("campo2").value;
    const validate = campoA < campoB;
    
    if (validate){
        alert ("Formulário válido");
        location.reload();
    } else {
        alert ("Digite um numero menor no campo B");

    }

}