$(document).ready(function () {
    vetorDefeitos = Array();
    data = new Date();
    data_nova=data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear();
    function limparDados(){
        $("#referencia").val('');
        $("#lote").val('');
        $("#linha").val('');
        $("#defeitos").val('');
        $("#vistoriadas").val('');
        $("#encontrada").val('');
    }

    
    $("#calcular").click(function(){
        var responsavel = $("#responsavel").val();
        var equipe = $("#equipe").val();
        var referencia = $("#referencia").val();
        var lote = $ ("#lote").val();
        var linha = $ ("#linha").val();


        var defeitos = $("#defeitos").val();
        var vistoriada = parseInt($("#vistoriadas").val());
        var encontrada = parseInt($("#encontrada").val());
        var resultadoCalculo = (encontrada/vistoriada)*100;

        if (isNaN(resultadoCalculo)){
            resultadoCalculo=0;
        }


        cabecalho =    "\n*Defeitos encontrado no Extra*"+  
        "\n*Responsável:* " +responsavel+
        "\n*Equipe:* "+equipe+
        "\n*Data:* "+data_nova+"\n\n";
        
        relatorioDefeitos = "*Linha:* "+linha+
                            "\n*Referência:* "+ referencia+
                            "\n*Lote:* "+ lote+
                            "\n\n"+
                            "*Defeitos:* "+defeitos+
                            "\n*Quantidade Vistoridas:* "+vistoriada+
                            "\n*Quantidade de Defeitos:* "+encontrada+
                            "\n*Porcentagem:* "+resultadoCalculo+"%";

        vetorDefeitos.push(relatorioDefeitos);
        $("#textResultado").val(cabecalho+vetorDefeitos);

        $("#resultadoDefeitos").html(resultadoCalculo.toFixed(0)+"%");
        $("#enviar").css('display','block');
        $("#calcular").css('display','none');
        limparDados();
                
         
    });
    $("#vistoriadas,#defeitos,#encontrada").click(function(){
        $("#enviar").css('display','none');
        $("#calcular").css('display','block');
    });
    $("#enviar").click(function(){
        try {
            resultado=$("#textResultado").val();
            conteudo = encodeURIComponent(resultado);
            document.getElementById('compartilhar').href="https://api.whatsapp.com/send?text="+conteudo;
            } catch (error) {
              alert("deu ruim");

            }
    });
    

});