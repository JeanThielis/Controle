$(document).ready(function(){
  $('.confirm').click(function () { 
    var situacao = $(".confirm").prop("checked");
    if(situacao==true){
        $(".lbl-deformacao").addClass('text-success');
    }
    if(situcao==false){
        $(".lbl-deformacao").addClass('text-danger');
    }
  });
});