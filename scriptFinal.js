
$(document).ready(function(){
  vetorRelatorio =[];
  function limparDados(){
    $("#referencia,#lote,#linha,#situacao,#observacao").val(" ");
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
    observacao = $("#observacao").val();


    cabecalhoFixo = "\n*Relatório Final*" +
        "\n*Responsável:* " + responsavel +
        "\n*Equipe:* " + equipe +
        "\n*Data:* " + data_nova;

    relatorio ="\n\n*Linha:* " + linha +
        "\n*Referência:* " + referencia +
        "\n*Lote:* " + lote +
        "\n\n*Situação:* "+ situacao+
        "\n\n*Observações:* \n"+observacao+
        "\n";

    if(observacao!=""){
      vetorRelatorio.push(relatorio);
      resultadoRelatorioNovo = vetorRelatorio.join('_____________________________________');
      $("#tamanho-listaFinal").html(vetorRelatorio.length);

      $("#textResultadoFinal").val(cabecalhoFixo+resultadoRelatorioNovo);
      $("#visualizar-final").fadeIn("slow");
      alertConfirm('success','Legal','Dados Inserido com Sucesso',3000)
      limparDados();

    }else{
      alertConfirm('error','Erro','Campo de obersavação vazio',3000);
      $("#observacao").focus();
    }
    
  });

  $("#enviarFinal").click(function(){
      try {
        resultado=$("#textResultadoFinal").val();
        conteudo = encodeURIComponent(resultado);
        document.getElementById('compartilhar').href="https://api.whatsapp.com/send?text="+conteudo;
        $("#textResultadoFinal").val(" ");
        window.location.reload(true);        
    
        } catch (error) {
        alertConfirm('error','Erro','Houve  problema no envio',3000);
    
        }
    
          
  
})
  
});