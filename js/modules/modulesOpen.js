

const modulesOpen = async function(url){

//function modulesOpen(url){
	
	var body    = got(document,'body')[0];

	var modules = getModulesByUrl(url);

	race(got(document,"view")[0]);

	var menu    = cE("menu");

	var view    = got(document,'view')[0];
  
    menu.appendChild(btNew());
    menu.appendChild(btFilter());
    view.appendChild(menu); 
  
  sA(body,'modules',modules.url);

  if(modules.url=='usersremedios'){
    
    usersremedios();
    
  }else{
    
    	tabelaLoad(modules);
    
  }
  

 
}
