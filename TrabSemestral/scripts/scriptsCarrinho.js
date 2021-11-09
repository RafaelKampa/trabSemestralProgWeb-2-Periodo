window.onload = function(){

    var carrinho = JSON.parse(window.localStorage.getItem("carrinho"));

    for(var i = 0; i < carrinho.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="../img/' + carrinho[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div id="produtoNome" class="div-titulo">';
        conteudo +=  carrinho[i][1];
        conteudo += '</div>';
        conteudo += '<div class="div-informacoes">';
        conteudo += '<b>Gênero: </b>' + carrinho[i][3] + '<br>';
        conteudo += '</div>';
        conteudo += '</div>';


        document.getElementById("divProdutos").innerHTML += conteudo;

    }

}