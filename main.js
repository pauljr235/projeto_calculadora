/*InnerHTML > substitui o conteúdo existente por um novo conteúdo especificado*/

/* 1 - HABILITA A INSERÇÃO DO NOME DA TAREFA E NOTA DA TAREFA E ADICIONA O EVENTO COM O CLICK SUBMIT*/
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima'));



let linhas = ''; /* 4 - Adiciona + linhas á tabela*/

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela();
    atualizaMediaFinal();
    calculaMediaFinal()
});

function adicionaLinha (){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){ /*Não permite que uma atividade de mesmo nome seja inserida.*/
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else{
        atividades.push(inputNomeAtividade.value); /*jogam os inputs para as arrays criadas*/
        notas.push(parseFloat(inputNotaAtividade.value)); /*jogam os inputs para as arrays criadas*/
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`; /*Insere o nome da atividade na tabela*/
        linha += `<td>${inputNotaAtividade.value}</td>`; /*Insere a nota da atividade na tabela*/
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        
        linhas += linha; /* 4 - Adiciona + linhas á tabela*/
    }


    
    inputNomeAtividade.value = ''; 
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); /*Adiciona as variáveis declaradas em HTMLss na tabela*/
    corpoTabela.innerHTML = linhas; /*Edita os valores que já estão na tabela*/
}

function atualizaMediaFinal(){
const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); /*recuperando o elemento através do id criado no código HTML*/
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; /*recuperando o elemento através do id criado no código HTML*/


console.log(media); /*somente para testar no console DevTools (IRRELEVANTE)*/

}


function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];  /* somaDasNotas = somaDasNotas + notas[i]*/
    }

    return somaDasNotas / notas.length; /* => const media = somaDasNotas / notas.length;*/

}