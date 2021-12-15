function iconVideo(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
        tooltip(icon,"Video confêrencia");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
          window.open("https://whereby.com/"+userinfo.whereby,"_blank");
           //window.open("https://facedoctors.com.br/","_blank");
          
        });

  element.appendChild(icon);
  
}
