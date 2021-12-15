function tabelaLoadByFilter(){

  rE(got(document,'tabela'));

  var config        = JSON.parse(localStorage.config);
  var user          = JSON.parse(localStorage.user);

  let view          = got(document,'view')[0];

  const selectsearch = document.querySelectorAll("selectsearch")

  let match = {};

  Object.entries(selectsearch).forEach(([key, value]) => {

    let i = value.getAttribute('id');
    let m = value.getAttribute('modules');

    if(i){

      //f.push(JSON.parse('{"'+m+'":'+i+'}'));
      match[m]=i;

    }

  });

match["uuid"]=user.session;



  rE(got(document,"tabela"));

  let modules       = gA();

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({modules: modules, match: match})

    });

    const data = await rawResponse.json();

    document.body.setAttribute("loading","0");
    view.append(modulesLoad(data)); 
    
  })();

}