
function formDelete(codigo){
	
  const modules     = document.querySelector("window").getAttribute("modules");
  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  const url         = config.formdelete;

  document.body.setAttribute("loading","1");



  const send = async function() {

    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,id:codigo})

    });

    const post = await rawResponse.json();

    document.body.setAttribute("loading","0");
        let item = document.querySelector("item[c='"+codigo+"']");
     rE(item);
    
  }
  
	if (confirm("Tem certeza que deseja excluir?") === true) {



    formClose();
  
    send();
    
 
    
  }

}


