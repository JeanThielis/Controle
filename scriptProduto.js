$(document).ready(function () {
    obj = Object();
    array = Array();
    arrayResultado = Array();
    relatorio="";
    
    $("#result-analise").change(function(){
         valor = parseInt($(this).val());

        switch (valor) {
            case 2:
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                icon= "❌";
                break;
            case 1: 
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                icon = '⚠️';
                break;
            case 0:
                $("#form-tonalidade").css("display","none");
                situacao = valor;
                icon = "✅";
                break;
            default:
                $("#form-tonalidade").css("display","none");
                break;
        }



    });
    $("#adiconar-produto").click(function(){
         analise = $("#analise").val();
         jst = $("#justificativa").val();


        obj = {analise:analise,situacao:situacao,jst:jst,icon:icon};
        array.push(obj);
        
        function compare(a,b) {
          if (a.situacao < b.situacao)
             return -1;
          if (a.situacao > b.situacao)
            return 1;
          return 0;
        }
        array.sort(compare);
        for (let index = 0; index < array.length; index++) {
            relatorio = array[index].icon+" "+array[index].analise+": \n"+array[index].jst+"\n\n";
            arrayResultado.push(relatorio);
            break;
            
        }
        $("#resultado-produto").val(" ");
        $("#resultado-produto").val(arrayResultado);


    })
});