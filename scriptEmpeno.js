$(document).ready(function () {
    vetorEmpeno=Array();
    data = new Date();
    data_nova=data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear();

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


    function alertConfirm(tipo,titulo,mensagem,time){
        Swal.fire({
            title: titulo,
            icon: tipo,
            text:mensagem,
            showConfirmButton: false,
            timer: time
          })
    
       };

   function limparForm(){

    $("#referencia").val('');
    $("#lote").val('');
    $("#ladoa").val('');
    $("#ladob").val('');
    $("#ladoc").val('');
    $("#ladod").val('');
    $("#centrala").val('');
    $("#centralb").val('');
    

    $("#ladoA").val('');
    $("#ladoB").val('');
    $("#ladoC").val('');
    $("#ladoD").val('');
    $("#centralA").val('');
    $("#centralB").val('');

   }


   $("#adicionarEmpeno").click(function () {
    var responsavel = $("#responsavel").val();
    var equipe = $("#equipe").val();
    var referencia = $("#referencia").val();
    var lote = $ ("#lote").val();
    var ladoa = $("#ladoa").val();
    var ladob = $("#ladob").val();
    var ladoc = $("#ladoc").val();
    var ladod = $("#ladod").val();
    var centrala = $("#centrala").val();
    var centralb = $("#centralb").val();
    

    var ladoA = $("#ladoA").val();
    var ladoB = $("#ladoB").val();
    var ladoC = $("#ladoC").val();
    var ladoD = $("#ladoD").val();
    var centralA = $("#centralA").val();
    var centralB = $("#centralB").val();
   

    cabecalho =    "\n*Relatório de Empeno*"+  
    "\n*Responsável:* " +responsavel+
    "\n*Equipe:* "+equipe+
    "\n*Data:* "+data_nova+"\n\n";


    relatorioEmpeno = 
    "\n *Referencia:* "+referencia+
    "\n *Lote:* "+lote+
    "\n"+
    "\n *Peça (+)*"+
    "\n *Lado A:* "+ladoa+
    "\n *Lado B:* "+ladob+
    "\n *Lado C:* "+ladoc+
    "\n *Lado D:* "+ladod+
    "\n"+
    "\n *Central*"+
    "\n *Lado A:* "+centrala+
    "\n *Lado B:* "+centralb+
    "\n"+
    "\n *Peça (-)*"+
    "\n *Lado A:* "+ladoA+
    "\n *Lado B:* "+ladoB+
    "\n *Lado C:* "+ladoC+
    "\n *Lado D:* "+ladoD+
    "\n"+
    "\n *Central*"+
    "\n *Lado A:* "+centralA+
    "\n *Lado B:* "+centralB+"\n";

    $.ajax({
        success: function () {
            vetorEmpeno.push(relatorioEmpeno);
            vetorNovo = vetorEmpeno.join('_________________________________')
            $("#tamanho-lista").html(vetorEmpeno.length);
            alertConfirm('success','Legal','Dados Inserido com Sucesso',3000)
            limparForm();

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