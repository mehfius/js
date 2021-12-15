
function formSend(data,id){

  const modules     = document.querySelector("window").getAttribute("modules");
  const config        = JSON.parse(localStorage.config);
  const user          = JSON.parse(localStorage.user);

data.session=user.session;
data.modules=modules;
data.id=id;

  var url  = config.formsave;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const rawResponse = await fetch(config.formsave, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({data:data})

    });

    const post = await rawResponse.json();

    itemReload(id)

  
    
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