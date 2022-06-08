const loop = async function() {
  
  var e = document.querySelectorAll('[chat="1"]');

  Object.entries(e).forEach(([key, value]) => {

    prontuarios_chat_reload(value);
    
  });

}