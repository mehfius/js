const modulesOpen = async function(url){

	var body    = document.querySelector("body");
  var view    = document.querySelector("view");
  
	var modules = getModulesByUrl(url);
  
      body.setAttribute('modules',modules.url)
  
	    race(view);
  
	var tips    = createObject('{"tag":"tips","innerhtml":"Preencha este formulário antes do atendimento médico. "}');

      tips.onclick=( async function(){

        
        
      });
  
	var menu    = createObject('{"tag":"menu"}');

      menu.append(btNew(),btFilter());
  /*     view.append(tips); */
      view.append(menu); 
  
      switch (modules.url) {
          
        case 'usersremedios'   :usersremedios();  break;
        case 'social'          :social();         break;
        case 'prontuarios'     :prontuarios();    break;
          
        default:tabelaLoad(modules);
    
      }
  
}