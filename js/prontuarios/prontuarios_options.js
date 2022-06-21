const prontuarios_options = async function(element,array) {
  
    let options = createObject('{"tag":"options"}');
  
  	if(array.me==true){
    
      let edit = createObject('{"tag":"button","action":"edit"}');
      
      let iconedit  = createObject('{"tag":"icon","class":"icon-pencil"}');
      let labeledit = createObject('{"tag":"label","innerhtml":"Editar"}');

      edit.append(iconedit,labeledit);
      
	    edit.onclick=( async function(){ 

        document.body.setAttribute("loading","1");
        await prontuarios_form(gA(),array.id)
      
      });
      
      options.append(edit);
      
    }
    
    let chatview       = createObject('{"tag":"button","action":"chatview"}');
    let iconlchatview  = createObject('{"tag":"icon","class":"icon-bubbles3"}');
    let labelchatview  = createObject('{"tag":"label","innerhtml":"Discussão"}');
  
        chatview.append(iconlchatview,labelchatview);
  
        chatview.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","1");
          
          prontuarios_chat_reload(element);
        
        });

    let chatclose       = createObject('{"tag":"button","action":"chatclose"}');
    let iconchatclose   = createObject('{"tag":"icon","class":"icon-bubbles3"}');
    let labelchatclose  = createObject('{"tag":"label","innerhtml":"Fechar"}');
  
        chatclose.append(iconchatclose,labelchatclose);
        chatclose.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","0");
        
        });
    
        options.append(chatview,chatclose);
    
    let view = createObject('{"tag":"button","action":"view"}');
    let iconview  = createObject('{"tag":"icon","class":"icon-enlarge"}');
    let labelview  = createObject('{"tag":"label","innerhtml":"Expandir"}');
  
        view.append(iconview,labelview);

        view.onclick=(function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("view","1");
        
        });
    
    let close       = createObject('{"tag":"button","action":"close"}');
    let iconclose    = createObject('{"tag":"icon","class":"icon-shrink"}');
    let labelclose   = createObject('{"tag":"label","innerhtml":"Fechar"}');
  
        close.append(iconclose,labelclose);
      
        close.onclick=(function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("view","0");
        
        });
    
    options.append(view);
    options.append(close);
    element.append(options);


}