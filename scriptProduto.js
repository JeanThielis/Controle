$(document).ready(function () {
    obj = Object();
    vetor = Array();
    $("#tonalidade").change(function(){
        var valor = parseInt($(this).val());

        switch (valor) {
            case 2:
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                icon="❌";
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


        obj = {analise:"tonalidade",situacao:situacao,icon:icon};
        vetor.push(obj);
        
        function compare(a,b) {
          if (a.situacao < b.situacao)
             return -1;
          if (a.situacao > b.situacao)
            return 1;
          return 0;
        }
        console.log(vetor.sort(compare));

    });
});