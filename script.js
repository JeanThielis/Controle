
$(document).ready(function(){
    adicionarNome();
    horarioEquipe();
    vetorResultado = Array();
    data = new Date();
    dia = data.getDate();
    mes = data.getMonth()+1;
    ano = data.getFullYear();
    data_nova= dia+"/"+mes+"/"+ano;

    function alertConfirm(tipo,titulo,mensagem,time){
        Swal.fire({
            title: titulo,
            icon: tipo,
            text:mensagem,
            showConfirmButton: false,
            timer: time
          })
    
       };
       

       $("#nome").keyup(function(){
        nome = $("#nome").val();
        localStorage.setItem("nome",nome);
       });
       function adicionarNome(){
        $("#responsavel").val(localStorage.getItem("nome"));
        $("#nome").val(localStorage.getItem("nome"));

       }


       function horarioEquipe(){
        time = new Date;
        hora = time.getHours();
       
            if(hora>5 && hora<14){
                $("#equipe").val("1");
            }
            else if (hora>13 && hora<22) {
                $("#equipe").val("2");

            }
            else if (hora>21 || hora<6) {
                $("#equipe").val("3");
            }
            else{
                alertConfirm("erros","Xiiii","Tente novamente"+horaCerta,3000);

            }
          
    }
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
            try {
            resultado=$("#textResultado").val();
            conteudo = encodeURIComponent(resultado);
            document.getElementById('compartilhar').href="https://api.whatsapp.com/send?text="+conteudo;
            } catch (error) {
              alert("deu ruim");

            }
           
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


         cabecalho =    "\n*Relatório de Inicio do Turno*"+  
         "\n*Responsável:* " +responsavel+
         "\n*Equipe:* "+equipe+
         "\n*Data:* "+data_nova+"\n\n";
        
                        

        var resultado = "\n*Linha:* "+linha+
                        "\n*Referência:* "+referencia+
                        "\n*Lote:* "+lote+
                        "\n"+
                        "\n*Marca:* "+marca+
                        "\n"+
                        "\n*Local de Uso:* "+local+
                        "\n*Classe AD:* "+ad+
                        "\n*Variação de Tonalidade:* "+variacao+
                        "\n*Calibre:* "+calibre+
                        "\n*Peso:* "+peso+"Kg"+
                        "\n*Espessura:* "+espessura+"mm"+
                        "\n"+
                        "\n*Código de Barra*"+
                        "\n*Extra:* "+extra+
                        "\n*Comercial:* "+comercial+
                        "\n*Popular:* "+popular+"\n";               
                        
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