function iconCalendar(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-calendar");
  
        tooltip(icon,"Agenda");
  
    var userinfo    = JSON.parse(localStorage.userinfo);
    var systeminfo  = JSON.parse(localStorage.systeminfo);
  
    icon.onclick=(function(){

        if(document.body.getAttribute("calendar")=="1"){

          document.body.setAttribute("calendar","0");

        }else{

          document.body.setAttribute("calendar","1");

        }

    });

  element.appendChild(icon);
  
}