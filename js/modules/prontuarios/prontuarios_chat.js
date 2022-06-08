const prontuarios_chat = async function(element,array) {
  
    let chat        = createObject('{"tag":"chat"}');
    let viewchat    = createObject('{"tag":"viewchat"}');
    let inputchat   = createObject('{"tag":"input","placeholder":"Digite um comentário"}');
    let inputbutton = createObject('{"tag":"button","innerhtml":"Enviar"}');

        inputbutton.onclick=(async function(){
          
          let json = await prontuarios_chat_insert(this);
    
          prontuarios_chat_reload(element,json);

          inputchat.value="";
          
        });

        inputchat.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

          this.parentElement.querySelector("button").click();
          
        }
      });
  
    chat.append(viewchat,inputchat,inputbutton);
  
    element.appendChild(chat);
  
}