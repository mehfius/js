function modulesOpen(url){
	
	var body    = got(document,'body')[0];

	var modules = getModulesByUrl(url);

	//e.appendChild(boxLoad());

	race(got(document,"view")[0]);

	//changeTitle(modules);
  
	var menu    = cE("menu");

	var view    = got(document,'view')[0];
  
    menu.appendChild(btNew());
    menu.appendChild(btFilter());
    view.appendChild(menu); 
  
 if(modules.url=="prontuarios" || modules.url=="prontuariosmedicos" || modules.url=="pacientes"){

    window.onscroll=lazyload;    
   
 }else{
   
    window.onscroll=null;
    
 }

  sA(body,'modules',modules.url);
	tabelaLoad(modules);
 
}
