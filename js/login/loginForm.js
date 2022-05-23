const mountLogin = async function(){

  const  login 	     = createObject('{"tag":"login","class":"login","name":"login"}');
  const  formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;","autocomplete":"off"}');

  Object.entries(JSON.parse(jsonformlogin)).forEach(([key, value]) => {

    if(value.tag=='input'){

      formLogin.append(jsonToElement(value));

    }else{

      formLogin.append(jsonToObject(value));

    }

  });

  login.append(formLogin);

  document.getElementsByTagName("pages")[0].append(login);

}



  const closeFormLogin = function(){
    document.body.setAttribute('openlogin',0);
  }

  const clickBtLogin = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    sA(login,'class','login');
    setRequired('email,password')
    sA(formLogin,'onsubmit','login();return false;');

  }

  const clickBtInsert = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insert');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="100";

  }

  const clickBtInsertPaciente = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insertpaciente');
    sA(goi('name'),'required','required');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="100";

  }

  const clickBtInsertMedico = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,crm,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insertmedico');
    sA(goi('name'),'required','required');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="50";

  }

  const clickBtRecovery = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('email');
    sA(login,'class','recovery');
    sA(formLogin,'onsubmit','recovery();return false;');

  }