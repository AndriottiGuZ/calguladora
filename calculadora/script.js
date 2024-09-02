let display = document.getElementById('display')
let operacaoAtual = '';
let valorAnterior = '';
let valorAtual = '';

function adicionarValor(valor){
    valorAtual += valor;
    display.value = valorAtual;
}

function operacao(op){
    if(valorAtual === '') return;
    if(valorAnterior !== '') {calcular();
    }
    operacaoAtual = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function adicionarPonto(){
    if(valorAtual.includes('.'))return;
    valorAtual += ".";
    display.value = valorAtual;
}

function calcular() {
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);

    if(isNaN(anterior)||isNaN(atual)) return;

    switch (operacaoAtual){

        case '+':
            resultado = anterior + atual;
            break;

        case '-':
                resultado = anterior - atual;
                break;

        case '*':
                resultado = anterior * atual;
                break;

        case '/':
                resultado = anterior / atual;
                break;

        default:
            return;
    }
    valorAtual = resultado;
    operacaoAtual = '';
    valorAnterior = '';
    display.value = resultado;
}

function limparDisplay(){
    valorAnterior = '';
    valorAtual = '';
    valorAnterior = '';
    display.value = '';
}