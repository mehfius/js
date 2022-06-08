const prontuarios_options = async function(element,array) {
  
    let options = createObject('{"tag":"options"}');
  
  	if(array.me==true){
    
      let edit = createObject('{"tag":"button","action":"edit","class":"icon-pencil"}');

	    edit.onclick=( async function(){ 

        document.body.setAttribute("loading","1");
        await prontuarios_form(gA(),array.id)
      
      });
      
      options.append(edit);
      
    }
    
    let chatview = createObject('{"tag":"button","action":"chatview","class":"icon-bubbles3"}');
    
        chatview.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","1");
          
          prontuarios_chat_reload(element);
        
        });

    let chatclose = createObject('{"tag":"button","action":"chatclose","class":"icon-bubbles3"}');
    
        chatclose.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","0");
        
        });
    
    options.append(chatview,chatclose);
    
    let view = createObject('{"tag":"button","action":"view","class":"icon-enlarge"}');
    
    view.onclick=(function(){ 
    
      document.querySelector("item[c='"+array.id+"']").setAttribute("view","1");
    
    });
    
    let close = createObject('{"tag":"button","class":"icon-shrink","action":"close"}');
    
    close.onclick=(function(){ 
    
      document.querySelector("item[c='"+array.id+"']").setAttribute("view","0");
    
    });
    
    options.append(view);
    options.append(close);
    element.append(options);


}