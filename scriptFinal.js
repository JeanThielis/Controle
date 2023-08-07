
$(document).ready(function(){
  vetorRelatorio =[];
  function limparDados(){
    $("#referencia,#lote,#linha,#situacao,#relatorio").val(" ");
   }
   function alertConfirm(tipo,titulo,mensagem,time){
    Swal.fire({
        title: titulo,
        icon: tipo,
        text:mensagem,
        showConfirmButton: false,
        timer: time
      })

   };

  $("#adicionarRelatorio").click(function () { 
    
    var responsavel = $("#responsavel").val();
    var referencia = $("#referencia").val();
    var equipe = $("#equipe").val();
    var lote = $ ("#lote").val();
    var linha = $ ("#linha").val();
    var situacao = $("#situacao").val();
    var relatorio = $("#relatorio").val();


    cabecalhoFixo = "\n*Relatório Final*" +
        "\n*Responsável:* " + responsavel +
        "\n*Equipe:* " + equipe +
        "\n*Data:* " + data_nova;

    cabecalhoVariavel ="\n*Linha:* " + linha +
        "\n*Referência:* " + referencia +
        "\n*Lote:* " + lote +
        "\n*Situação:* "+ situacao+
        "\n*Observações:* \n"+relatorio+
        "\n";


    vetorRelatorio.push(cabecalhoVariavel);
    resultadoRelatorioNovo = vetorRelatorio.join('');
    $("#resultadoFinal").val(cabecalhoFixo+resultadoRelatorioNovo);
    alertConfirm('success','Legal','Dados Inserido com Sucesso',3000)
    limparDados();
  });

  $("#enviarRelatorio").click(function(){
    var resultadoFinal=$("#resultadoFinal").val();
    if(resultadoFinal==""){
      alertConfirm('info','Antenção','Você não inserio os dados',3000);

    }else{
      try {
        resultado=$("#resultadoFinal").val();
        conteudo = encodeURIComponent(resultado);
        document.getElementById('compartilharFinal').href="https://api.whatsapp.com/send?text="+conteudo;
    
        } catch (error) {
        alertConfirm('error','Erro','Houve  problema no envio',3000);
    
        }
    }
          
  
})
  
});