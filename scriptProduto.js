$(document).ready(function () {
    arrayResultado = Array();
    vetorNovo=Array();
    
    
    $("#result-analise").change(function(){
         valor = parseInt($(this).val());

        switch (valor) {
            case 2:
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                icon= "❌";
                break;
            case 1: 
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                icon = '⚠️';
                break;
            case 0:
                $("#form-tonalidade").css("display","none");
                situacao = valor;
                icon = "✅";
                $("#justificativa").val(" ");

                break;
            default:
                $("#form-tonalidade").css("display","none");
                break;
        }



    });
    $("#adiconar-produto").click(function(){
        var responsavel = $("#responsavel").val();
        var equipe = $("#equipe").val();
        var referencia = $("#referencia").val();
        var lote = $ ("#lote").val();
        var linha = $ ("#linha").val();


         analise = $("#analise").val();
         jst = $("#justificativa").val();

         cabecalho = "\n*Atualização do Produto em Processo*" +
         "\n\n*Responsável:* " + responsavel +
         "\n*Equipe:* " + equipe +
         "\n*Data:* " + data_nova + "\n" +
         "\n*Linha:* " + linha +
         "\n*Referência:* " + referencia +
         "\n*Lote:* " + lote +
         "\n\n";

         relatorio = icon+" *"+analise+"*:\n"+jst+"\n";
         arrayResultado.push(relatorio);
         vetorNovo = arrayResultado.join('');
         $("#resultado-produto").val(vetorNovo+"*Obs:* ");
        $("#resultado-produto2").val(cabecalho + vetorNovo+"*Obs:*");


    })
    $("#enviarProduto").click(function(){
        try {
        resultado=$("#resultado-produto2").val();
        conteudo = encodeURIComponent(resultado);
        document.getElementById('compartilharProduto').href="https://api.whatsapp.com/send?text="+conteudo;
        } catch (error) {
          alert("deu ruim");

        }
       
    })
   
});