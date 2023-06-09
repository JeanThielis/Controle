$(document).ready(function () {
    arrayResultado = Array();
    vetorNovo=Array();
    arrayAnalise=Array();
    icon=" ";
   
  

    $("#result-analise").change(function(){
         valor = parseInt($(this).val());

        switch (valor) {
            case 3:
                situacao = valor;
                icon = "🔴";
                break;
            case 2:
                situacao = valor;
                icon = "🟠";
                break;
            case 1: 
                situacao = valor;
                icon = "🟡";
                break;
            case 0:
                situacao = valor;
                icon = "🟢";

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
        var situacao = $("#situacao").val();


         analise = $("#analise").val();
         jst = $("#justificativa").val();

         cabecalho = "\n*Atualização do Produto em Processo*" +
         "\n\n*Responsável:* " + responsavel +
         "\n*Equipe:* " + equipe +
         "\n*Data:* " + data_nova + "\n" +
         "\n*Linha:* " + linha +
         "\n*Referência:* " + referencia +
         "\n*Lote:* " + lote +
         "\n*Situação:* "+ situacao +
         "\n\n";
         legenda = "\n\n\n*Legenda*\n\n"+
                    "🟢 = Liberado, dentro do padrão\n\n"+
                    "🟡 = Liberado, porém precisa de melhora\n\n"+
                    "🟠 = Liberado, com documento\n\n"+
                    "🔴 = Liberado, com restrição\n\n";


         relatorio = icon+" *"+analise+"*:\n"+jst+"\n";
         arrayResultado.push(relatorio);
         vetorNovo = arrayResultado.join('');
         $("#resultado-produto").val(vetorNovo+"*Obs:* ");
         $("#resultado-produto2").val(cabecalho + vetorNovo+"*Obs:*"+legenda);
         $("#justificativa").val(" ");

         excluirAnalise();


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