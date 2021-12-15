function iconPlanilha(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-table2");
  tooltip(icon,"Solicitação de contato");
  
    var config = JSON.parse(localStorage.config);

        icon.onclick=(function(){
          
          window.open(config.planilha,"_blank");
          
        });

  element.appendChild(icon);
  
}
