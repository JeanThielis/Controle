$(document).ready(function () {
  
    function horarioEquipe(){
        time = new Date
        hora = time.getHours();
        
        if(hora>5 && hora<14){
            equipe = "1";
        }
        if(hora>13 && hora<23){
            equipe = "2";
        }
        if(hora>21 && hora<7){
            equipe = "3";
        }
    }
});