document.addEventListener("DOMContentLoaded", function() {
    const pesoInput = document.getElementById("weight");
    const alturaInput = document.getElementById("height");
    const botaoCalcular = document.getElementById("calculate");
    const botaoLimpar = document.getElementById("clear");
    const resultadoDisplay = document.getElementById("result");
    const classificacaoDisplay = document.getElementById("classification");

    botaoCalcular.addEventListener("click", calcularIMC);
    botaoLimpar.addEventListener("click", limparCampos);

    function calcularIMC() {
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (!validarEntradas(peso, altura)) {
            return;
        }

        const imc = peso / (altura * altura);
        exibirResultado(imc);
    }

    function validarEntradas(peso, altura) {
        if (isNaN(peso) || isNaN(altura)) {
            alert("Por favor, insira números válidos para peso e altura.");
            return false;
        }
        if (peso <= 0 || peso > 300) {
            alert("O peso deve estar entre 0 e 300 kg.");
            return false;
        }
        if (altura <= 0 || altura > 3) {
            alert("A altura deve estar entre 0 e 3 metros.");
            return false;
        }
        return true;
    }

    function exibirResultado(imc) {
        resultadoDisplay.textContent = "Seu IMC é: " ;{imc.toFixed(2)};
        classificacaoDisplay.textContent = obterClassificacao(imc);
    }

    function obterClassificacao(imc) {
        if (imc < 18.5) {
            return "Classificação: Abaixo do peso";
        } else if (imc < 24.9) {
            return "Classificação: Peso normal";
        } else if (imc < 29.9) {
            return "Classificação: Sobrepeso";
        } else {
            return "Classificação: Obesidade";
        }
    }

    function limparCampos() {
        pesoInput.value = "";
        alturaInput.value = "";
        resultadoDisplay.textContent = "";
        classificacaoDisplay.textContent = "";
    }
});