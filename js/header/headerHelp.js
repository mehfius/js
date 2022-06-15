function iconHelp(element){
  
var icon = cE("icon")
    icon.setAttribute("class","icon-question");

tooltip(icon,"Tutorial");

var user = JSON.parse(localStorage.user);
var config = JSON.parse(localStorage.config);

    icon.onclick=(function(){

      if(user.areas==50){

        window.open(config.medicohelp);

      }else if(user.areas==100){

        window.open(config.pacientehelp);

      }

    });

    element.appendChild(icon);
  
}
