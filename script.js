
$(document).ready(function(){
    $(".menu").click(function(){
        var menu=this.id;
        $.ajax({
            url: menu,
            success: function (response) {
                $("#resultado").html(response);

            }
        });
    });

    $("#adicionar").click(function(){
        vetorResultado = [];
        var responsavel = $("#responsavel").val();
        var equipe = $("#equipe").val();
        var linha = $("#linha").val();
        var referencia = $("#referencia").val();
        var lote = $("#lote").val();
        var marca = $("#marca").val();

        var resultado = "Responsavel:" +responsavel+
                    "<br> Equipe: "+equipe+
                    "<br> Linha: "+linha+
                    "<br> Referência: "+referencia+
                    "<br> Lote: "+lote+
                    "<br> Marca: "+marca;

        vetorResultado.push(resultado);


        $.ajax({
            url:"telaResultado.html",
            success: function (response) {
                $("#resultado").html(response);
                $("#divResultado").html(vetorResultado);



                
            }
        });



        
    });
});