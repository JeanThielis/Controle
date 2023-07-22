$(document).ready(function(){
  $('.confirm').click(function () { 
   if($(this).prop('checked')==true){
    $('#lbl-deformacao').css('color','#228B22');
   }else{
    $('#lbl-deformacao').css('color','#FF6172');

   }
  });
});