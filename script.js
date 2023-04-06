
$(document).ready(function(){
    const vetorResultado = Array();
    const data = new Date();
    const data_nova=data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear();

    function alertConfirm(tipo,titulo,mensagem,time){
        Swal.fire({
            title: titulo,
            icon: tipo,
            text:mensagem,
            showConfirmButton: false,
            timer: time
          })
    
       };

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
        var responsavel = $("#responsavel").val();
        var equipe = $("#equipe").val();
        var linha = $("#linha").val();
        var referencia = $("#referencia").val();
        var lote = $("#lote").val();
        var marca = $("#marca").val();
        var extra = $("#extra").val();
        var comercial = $("#comercial").val();
        var popular = $("#popular").val ();
        var local = $("#local").val();
        var ad = $("#ad").val();
        var variacao = $("#variacao").val();
        var calibre = $("#calibre").val();
        var peso = $("#peso").val();
        var espessura = $("#espessura").val();

        

         cabecalho =    "\n *Check-list Início do Turno*"+  
                        "\n *Responsável:* " +responsavel+
                        "\n *Equipe:* "+equipe+
                        "\n *Data:* "+data_nova+"\n\n";
                        

        var resultado = "\n *Linha:* "+linha+
                        "\n *Referência:* "+referencia+
                        "\n *Lote:* "+lote+
                        "\n"+
                        "\n *Marca:* "+marca+
                        "\n"+
                        "\n *Local de Uso:* "+local+
                        "\n *Classe AD:* "+ad+
                        "\n *Variação de Tonalidade:* "+variacao+
                        "\n *Calibre:* "+calibre+
                        "\n *Peso:* "+peso+"Kg"+
                        "\n *Espessura:* "+espessura+"mm"+
                        "\n"+
                        "\n *Código de Barra*"+
                        "\n *Extra:* "+extra+
                        "\n *Comercial:* "+comercial+
                        "\n *Popular:* "+popular+"\n";
                    $.ajax({
                        success: function () {
                            vetorResultado.push(resultado);
                            $("#tamanho-lista").html(vetorResultado.length);
                            alertConfirm('success','Legal','Dados Inserido com Sucesso',3000)
                    
                            
                        }
                    });
        
    });
    $("#visualizar-check").click(function(){
        $.ajax({
            url:"telaResultado.html",
            success: function (response) {
                $("#resultado").html(response);
                $("#textResultado").val(cabecalho+vetorResultado);
                
            }
        });         
    });
});