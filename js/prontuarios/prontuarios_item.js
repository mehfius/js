const prontuarios_item = (item,value) =>{
  
  var header = cE("header");
  
  var footer = cE("footer");

      item.setAttribute('me',value.me);
    
      item.setAttribute("a",value.a);

      item.setAttribute("view","0");
  
      if(value.me==false){
        
          var iconshare = document.createElement("icon");
              iconshare.setAttribute("class","icon-share2");
        
          header.appendChild(iconshare);
        
      }
    
      item.append(header); 
  	
      loadPacientes(header,value.jsonpacientes);
      
      category(header,item,value.category,value.categorylabel);
  
      let text = cT(value.label);
      
      let eP = '{"tag":"p"}';
      
      let object = createObject(eP)
    
          object.append(text);
  
          if(value.label){
            
            item.append(object);
            
          }
     
          loadPacientesFull(item,value.jsonpacientes);
         
          prontuarios_options(item,value)
      
          itemDetail(item,value);
          loadMedicos(item,value.jsonmedicos);
          loadShare(item,value);
          prontuarios_chat(item,value);
          loadItemUpdateTime(footer,value);
        
          if(footer.innerHTML!=""){
            
            item.appendChild(footer);
            
          }
  
}