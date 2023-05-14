$(document).ready(function(){
    vetor=[];
    tamanhoVetor();
    function tamanhoVetor(){
        $("#tamanho-lista").html(vetor.length);
    }

    $("#espessuraNominal,#lado1,#lado2,#lado3,#lado4").mask("0.00");
    $("#prenca").mask("P0/C0");

    function fecharAlert(){
        $("#alertSucesso").fadeOut();
    }
    function limparDados(){
    $("#lado1,#lado2,#lado3,#lado4,#prenca").val(" ");
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
   

$("#adicionarEspessura").click(function () { 

    var responsavel = $("#responsavel").val();
    var equipe = $("#equipe").val();
    var referencia = $("#referencia").val();
    var lote = $ ("#lote").val();
    var linha = $ ("#linha").val();

    espessura = parseFloat($("#espessuraNominal").val());
    prenca = $("#prenca").val();
    icon=" ";
    min = espessura - (espessura*0.05);
    max = espessura + (espessura*0.05);
    media = (parseFloat($("#lado1").val()) + parseFloat($("#lado2").val()) + parseFloat($("#lado3").val())+ parseFloat($("#lado4").val()))/4; 

    if (media < min || media > max ){icon = "❌"}
    else{icon = "✅";}

    cabecalho = "\n*Análise de Espessura*" +
        "\n*Responsável:* " + responsavel +
        "\n*Equipe:* " + equipe +
        "\n*Data:* " + data_nova + "\n" +
        "\n*Linha:* " + linha +
        "\n*Referência:* " + referencia +
        "\n*Lote:* " + lote +
        "\n\n";
    
    relatorio = prenca+" : "+media.toFixed(2)+" "+icon+"\n";

if (media!=null){
    vetor.push(relatorio);
}
else{
    vetor.push(" ");
}
vetorNovo = vetor.join('');
$("#alertSucesso").fadeIn();
$("#amostra-espessura").html(prenca+": "+media.toFixed(2)+""+icon);
setTimeout(fecharAlert,3000);
limparDados();
tamanhoVetor();
   
})

$("#visualizar-check").click(function(){
    $.ajax({
        url:"telaResultado.html",
        success: function (response) {
            $("#resultado").html(response);
            $("#textResultado").val(cabecalho+vetorNovo);
            
        }
    });         
});
$("#enviar").click(function(){
    try {
    resultado=$("#textResultado").val();
    conteudo = encodeURIComponent(resultado);
    document.getElementById('compartilhar').href="https://api.whatsapp.com/send?text="+conteudo;
    } catch (error) {
      alert("deu ruim");

    }
   
})

})