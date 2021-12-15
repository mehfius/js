function iconFacedoctor(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
        tooltip(icon,"Conheça o Facedoctors");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
     
           window.open("https://facedoctors.com.br/","_blank");
          
        });

  element.appendChild(icon);
  
}