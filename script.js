
$(document).ready(function(){
    $(".menu").click(function(){
        var menu=this.id;
        $.ajax({
            url: menu,
            success: function (response) {
                $("#resultado").html(response);
                console.log(menu);

            }
        });
    });

    $("#adicionar").click(function(){
        var responsavel = $("#responsavel").val();
        var equipe = $("#equipe").val();
        var linha = $("#linha").val();
        var referencia = $("#referencia").val();
        var lote = $("#lote").val();
        var marca = $("#marca").val();

        var resultado = "Responsavel:" +responsavel+"<br> Equipe: "+equipe;
        console.log(resultado);
        
    });
});