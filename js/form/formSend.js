function formSend(data,id){

  const modules     = document.querySelector("window").getAttribute("modules");
  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  const url         = (modules=="mvb")?config.formsavemvb:config.formsave;

  data.modules      = modules;
  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,data:data})

    });

    const post = await rawResponse.json();

   
    if(post.status==1){
      
      switch(modules) {
      
        case "prontuarios":    return prontuarios_reload(id);
        case "usersremedios":  return usersremedios_reload(id);
        
        default:return document.body.setAttribute("loading","0");
      
      } 
      
    }else{
      
      console.log('falhou');
      
    }


  }

  send(data); 

}

function itemReload(id){

  var user    = JSON.parse(localStorage.user);
  var config  = JSON.parse(localStorage.config);

  if(id){
    
      const send = async function() {

        const rawResponse = await fetch(config.urlmodules, {
        
              method: 'POST',
              headers: {'Accept': 'application/json','Content-Type': 'application/json'},
              body: JSON.stringify({session: user.session, modules: gA(),id:id})
        
            });
        
            const data = await rawResponse.json();
        
                  var item = document.querySelector("tabela item[c='"+id+"']");
        
                  race(item);
                  loadItem(item,data[0]);
        
        
        document.body.removeAttribute("loading");
        
      }

      send();

  }else{

    modulesOpen(gA());

  }

}