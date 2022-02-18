function tabelaLoad(json){

  window.onscroll=null;

  var config        = JSON.parse(localStorage.config);
  var user          = JSON.parse(localStorage.user);
  let view          = got(document,'view')[0];

  let modules       = (json)?json.url:gA();
  let match         = {};

  match["uuid"]=user.session;

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,match:match, modules: modules})

    });

    const data = await rawResponse.json();

    /* rE(got(document,"box")); */

    boxFilter();

    document.body.setAttribute("loading","0");

    const tabela = modulesLoad(data);

    view.append(tabela); 

    if(modules=="prontuarios" || modules=="prontuariosmedicos" || modules=="pacientes"){

        window.onscroll=lazyload;   

    }
    
  })();

}