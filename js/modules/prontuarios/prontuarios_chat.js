const prontuarios_chat = async function(element,array) {
  
    let chat        = createObject('{"tag":"chat"}');
    let viewchat    = createObject('{"tag":"viewchat"}');
    let formchat    = createObject('{"tag":"formchat"}');
  
    let inputchat   = createObject('{"tag":"input","placeholder":"Digite um comentário"}');
    let inputbutton = createObject('{"tag":"button","innerhtml":"Enviar"}');
    let iconloading = createObject('{"tag":"icon","class":"icon-spinner9"}');
  
        inputbutton.onclick=(async function(){

          if(this.parentElement.querySelector('input').value!==''){

                        
            this.disabled = true;
            
            let json = await prontuarios_chat_insert(this);
      
            /* prontuarios_chat_reload(element,json); */
              
            this.disabled = false;
            
            inputchat.value="";
            

          }
          
        });

        inputchat.addEventListener("keypress", function(event) {

          if (event.key === "Enter") {
  
            this.parentElement.querySelector("button").click();
            
          }
          
        });
  
    formchat.append(inputchat,inputbutton,iconloading);
    chat.append(viewchat,formchat);
  
    element.appendChild(chat);
  
}