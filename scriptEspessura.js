$(document).ready(function(){
    vetor=[];

    $("#espessuraNominal,#lado1,#lado2,#lado3,#lado4").mask("0.00");
    $("#prenca").mask("P0/C0");

    function fecharAlert(){
        $("#alertSucesso").fadeOut();
    }
    function limparDados(){
    $("#lado1,#lado2,#lado3,#lado4,#prenca").val(" ");
    }
   

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

    cabecalho =    "\n*Análise de Espessura*"+  
    "\n*Responsável:* " +responsavel+
    "\n*Equipe:* "+equipe+
    "\n*Data:* "+data_nova+"\n"+
    "\n*Linha:* "+linha+
    "\n*Referência:* "+ referencia+
    "\n*Lote:* "+ lote+
    "\n\n";
    
    relatorio = prenca+" : "+media.toFixed(2)+" "+icon+"\n";


try {
    vetor.push(relatorio);
    vetorNovo = vetor.join('');
    $("#tamanho-lista").html(vetor.length);
    $("#alertSucesso").fadeIn();
    setTimeout(fecharAlert,3000);
    limparDados();

    
} catch (error) {
    alert("Erro !!! Entrar em contato com desenvolvedor");
}
    

    console.log("Nominal: "+espessura+"\n"+"min: "+min.toFixed(2)+"\n"+"max: "+max.toFixed(2)+"\n"+"media: "+media.toFixed(2)+" "+icon);
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

})