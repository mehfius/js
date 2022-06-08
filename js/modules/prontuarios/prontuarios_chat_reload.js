const prontuarios_chat_reload = async function(element,ejson) {
  
  config = JSON.parse(localStorage.config);
  
  if(ejson!==undefined){
  
      var json = ejson;
    
  }else{
    
      var json = await prontuarios_chat_select(element);
    
  }

  let viewchat = element.querySelector('viewchat');
  
/*   if(json.chat){
  race(viewchat);  
  } */
  console.log(json.chat.length);
  if(json.chat.length){
    
    Object.entries(json.chat).forEach(([key, value]) => {
  
      let users      = createObject('{"tag":"userslabel","innerhtml":"'+value.userslabel+'"}');
      let created_at = createObject('{"tag":"created_at","innerhtml":"'+value.created_at+'"}');
      let label      = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');
      let figure     = createObject('{"tag":"figure"}');
      let message    = createObject('{"tag":"message"}');
      let post       = createObject('{"tag":"post","chat_id":"'+value.id+'"}');
  
          message.append(created_at,users,label);
          post.append(figure,message);
          viewchat.append(post);
  
          if(value.files){
            
            let url = config.imgp+value.files[0].filename+'?key='+value.files[0].key;
            
                figure.setAttribute("style","background-image:url('"+url+"')");
            
          }
      
    });


    
/*   race(viewchat); */
    viewchat.scrollTop = viewchat.scrollHeight;
    
  }
  
  
}