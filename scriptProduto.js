$(document).ready(function () {
    obj = Object();
    vetor = Array();
    $("#tonalidade").change(function(){
        var valor = parseInt($(this).val());

        switch (valor) {
            case 0:
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                break;
            case 1: 
                $("#form-tonalidade").css("display","block");
                situacao = valor;
                break;
            case 2:
                $("#form-tonalidade").css("display","none");
                situacao = valor;
                break;
            default:
                $("#form-tonalidade").css("display","none");
                break;
        }


        obj = {analise:"tonalidade",situacao:situacao};
        vetor.push(obj);
        for(var i=0;i<vetor.length;i++){
            console.log(vetor[i].analise+"---"+vetor[i].situacao);
        }
        console.log("tamanho: "+vetor.length);


    });
});