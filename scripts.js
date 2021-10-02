var array_filmes = [['Resgate', 'resgate.jpg', 'Ação', 'Sam Hargrave', '2020', false], ['O Preço da Verdade', 'preco_da_verdade.jpg', 'Ação', 'Tod Haynes', '2020', true], ['Rambo', 'rambo.jpg', 'Ação', ' Brian Tyler', '2019', false], ['Coringa', 'coringa.jpg', 'Ficção','Todd Phillips', '2019', false], ['Projeto Gemini', 'projeto_gemini.jpg', 'Ficção','Ang Lee', '2019', false], ['Milagre na Cela 7', 'milagre_na_cela_7.jpg', 'Drama','Mehmet Ada Öztekin', '2019',  false], ['Dunkirk', 'dunkirk.jpg', 'Guerra','Christopher Nolan', '2017', false], ['A Garota no Trem', 'a_garota_no_trem.jpg', 'Suspense', ' Tate Taylor', '2016',  false]];

window.onload = function(){
    montarCards();
}
function montarCards(){
    for (var i=0; i<array_filmes.length; i++){
        var conteudo = "";
        conteudo += '<div class= "divCard">';
        conteudo += '<div class= "divPoster">';
        conteudo += '<img src="' + array_filmes[i] [1] + '"/>';
        conteudo += '</div>';
        conteudo += '<div class= "divTitulo":>';
        conteudo += '<i><b>' + array_filmes[i] [0] + '</b></i>';
        conteudo += '</div>';
        conteudo += '<div class= "divInformacoes":>';
        conteudo += '<b> Gênero: </b>' + array_filmes[i] [2] + '</br>';
        conteudo += '<b> Diretor: </b>' + array_filmes[i] [3] + '</br>';
        conteudo += '<b> Ano: </b>' + array_filmes[i] [4] + '</br>';
        conteudo += '</div>';
        conteudo += '<div class="divRodape">';
        if(array_filmes[i][5] == false){
            conteudo += '<button class= "buttonRodape"> Comprar </button>';           
        }
        else{
            conteudo += '<button class= "buttonRodape buttonComprado"> Comprado </button>';
        }

        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("filmes").innerHTML += conteudo;
    }
}
