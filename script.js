var display = document.getElementById('entrada');

function inserir(num){
    display.value += num;
}

function inserirOP(operacao){
    if(!display.value){
        display.placeholder = 'Insira um valor...';
    }
    else{ 
        var aux = display.value.slice(-1); //Pegando o ultimo valor do display
        if(aux.match(/[+-/*]/)){
            apagar();
            display.value += operacao;
        }else{
            display.value += operacao;
        }
    }
}

function limpar(){
    display.value = "";
}

function apagar(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function trocar(){
    if(!display.value){   
        display.placeholder = "Insira um valor...";
    }
    else
    {
        if(isNaN(display.value)){
            display.value = "";
            display.placeholder = 'Erro, tente novamente...';
        }else{
            display.value = display.value * -1;
        }
    }
    
}

function igual(){
    if(display.value){
        try {
            display.value = eval(display.value);
        }
        catch(erro){
            display.placeholder = 'Insira um valor...';
        }
    }
    else{
        display.placeholder = 'Insira um valor...';
    }
}
