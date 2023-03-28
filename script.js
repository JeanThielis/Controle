
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
        var dados = $("#form-check").serialize();
        console.log(dados.responsavel);
        console.log(dados);
    });
});