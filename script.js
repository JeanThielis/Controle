
$(document).ready(function(){
    vetorResultado = Array();
    data = new Date();
    data_nova=data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear();

    function alertConfirm(tipo,titulo,mensagem,time){
        Swal.fire({
            title: titulo,
            icon: tipo,
            text:mensagem,
            showConfirmButton: false,
            timer: time
          })
    
       };
    function limparFormulario(){
         $("#linha").val(" ");
        $("#referencia").val(" ");
        $("#lote").val(" ");
        $("#marca").val(' ');
        $("#extra").val(' ');
        $("#comercial").val(" ");
        $("#popular").val (" ");
        $("#local").val(" ");
        $("#ad").val(' ');
        $("#variacao").val(' ');
        $("#calibre").val(' ');
        $("#peso").val(' ');
        $("#espessura").val(' ');


    }
    $("#enviar").click(function(){
        var relatorioPronto = $("#textResultado").val();
        var texto = "https://api.whatsapp.com/send?text="+relatorioPronto;
        open(texto); 
    })
     

    $(".menu").click(function(){
        var menu=this.id;
        $.ajax({
            url: menu,
            success: function (response) {
                $("#resultado").html(response);

            }
        });
    });
    $("#lote").keyup(function(){
        $(this).val($(this).val().toUpperCase());
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
                        "\n<br> *Responsável:* " +responsavel+
                        "\n<br> *Equipe:* "+equipe+
                        "\n<br> *Data:* "+data_nova+"\n\n";
                        

        var resultado = "\n<br>*Linha:* "+linha+
                        "\n<br>*Referência:* "+referencia+
                        "\n<br>*Lote:* "+lote+
                        "\n<br>"+
                        "\n<br>*Marca:* "+marca+
                        "\n<br>"+
                        "\n<br>*Local de Uso:* "+local+
                        "\n<br>*Classe AD:* "+ad+
                        "\n<br>*Variação de Tonalidade:* "+variacao+
                        "\n<br>*Calibre:* "+calibre+
                        "\n<br>*Peso:* "+peso+"Kg"+
                        "\n<br>*Espessura:* "+espessura+"mm"+
                        "\n<br>"+
                        "\n<br>*Código de Barra*"+
                        "\n<br>*Extra:* "+extra+
                        "\n<br>*Comercial:* "+comercial+
                        "\n<br>*Popular:* "+popular+"\n";               
                        
                    $.ajax({
                        success: function () {
                            vetorResultado.push(resultado);
                            vetorNovo = vetorResultado.join('_________________________________')
                            $("#tamanho-lista").html(vetorResultado.length);
                            alertConfirm('success','Legal','Dados Inserido com Sucesso',3000)
                            limparFormulario();                    
                            
                        }
                    });
        
    });
    $("#visualizar-check").click(function(){
        $.ajax({
            url:"telaResultado.html",
            success: function (response) {
                $("#resultado").html(response);
                $("#textResultado").val(cabecalho+vetorNovo);
                
            }
        });         
    });
});