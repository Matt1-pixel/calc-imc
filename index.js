const calcular = document.getElementById("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        if (valorIMC < 16){
            classificacao = 'muito abaixo do peso. Cuidado.';
        } else if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        } else if(valorIMC < 25){
            classificacao = 'esta com o peso ideal.';
        } else if (valorIMC < 30){
            classificacao='um pouco acima do peso.';
        } else if (valorIMC < 35){
            classificacao = 'obesidade grau I';
        } else if (valorIMC < 40){
            classificacao = 'obesidade grau II';
        }else{
            classificacao ='obesidade grau III. Cuidado.';
        } 

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
};

calcular.addEventListener('click', imc);