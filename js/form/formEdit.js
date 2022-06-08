
function formEdit(modules,id){
  
  gridShow();
  
  if(modules=='social'){
    
    social_form(modules,id);
  }else if(modules=='prontuarios'){
    
    prontuarios_form(modules,id);
  }else{
    formMount(modules,id);
  }
  


    /* 
			document.body.setAttribute("loading","0");
      
      var user  = JSON.parse(localStorage.user);
      
			if(id==user.id && (modules=="users" || modules=="formcovid")){
        //Edicao do proprio Profile
      }else{

        var item  = gibc(id);

        item.setAttribute("open","1");
			  localStorage.openedformcodigo=id;
        
      }

			gridShow();
			 */

}