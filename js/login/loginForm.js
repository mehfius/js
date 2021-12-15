function mountLogin(){


var config      = JSON.parse(localStorage.config); 

var logo        = config.urllogo;
  
var btclose     = createObject('{"tag":"btclose","innerhtml":"x","onclick":"document.body.setAttribute(\'openlogin\',\'0\');"}');  
var h1          = createObject('{"tag":"h1","innerhtml":"'+config.login+'","style":"background-image:url('+logo+');"}');  
var plogin      = createObject('{"tag":"p","innerhtml":"Login","class":"plogin"}');
var pinsert     = createObject('{"tag":"p","innerhtml":"Criar conta","class":"pinsert"}');
var pinsertm    = createObject('{"tag":"p","innerhtml":"Cadastro de Médico","class":"pinsertm"}');
var precovery   = createObject('{"tag":"p","innerhtml":"Recuperar senha","class":"precovery"}');  
var login 	    = createObject('{"tag":"login","class":"login","name":"login"}');
var formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;"}');


  
// Inicio Input  
  
var inputName        = createObject('{"tag":"input","id":"label","placeholder":"Nome completo"}');
var pattern          = encodeURI("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");  
var inputEmail       = createObject('{"tag":"input","id":"email","placeholder":"seu@email.com","pattern":"'+pattern+'"}');
var inputPass        = createObject('{"tag":"input","id":"password","type":"password","placeholder":"Senha"}');
var pattern          = encodeURI("\\d{11}");
var inputCPF         = createObject('{"tag":"input","id":"cpf","placeholder":"CPF","type":"number","title":"'+message("620")+'","pattern":"'+pattern+'"}');
var inputRG          = createObject('{"tag":"input","id":"identidade","placeholder":"RG Identidade"}');  
var inputTelefone    = createObject('{"tag":"input","id":"telefone","placeholder":"Telefone","type":"number"}');
var inputCEP         = createObject('{"tag":"input","id":"cep","placeholder":"CEP"}');    
var inputEndereco    = createObject('{"tag":"input","id":"endereco","placeholder":"Rua, número"}');  
var inputBairro      = createObject('{"tag":"input","id":"bairro","placeholder":"Bairro"}'); 
var inputCidade      = createObject('{"tag":"input","id":"cidade","placeholder":"Cidade"}'); 
var inputEstado      = createObject('{"tag":"input","id":"estado","placeholder":"Estado"}'); 
var inputCRM         = createObject('{"tag":"input","id":"crm","placeholder":"Registro profissional","type":"text","onkeydown":"return inputTypeNumber(event);"}');
var inputSuite       = createObject('{"tag":"input","id":"suite","type":"hidden","value":"'+config.id+'"}');  
// Fim input
  
//var text = 'Ao clicar em Cadastrar, você concorda com <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>nossos termos</a>, Política de Dados e Política de Cookies.';  
var text = 'Ao clicar em cadastrar, você concorda com a <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>política de privacidade</a>, <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/edit target=_blank>termos de uso</a> e <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>acordo do usuário</a> e <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>política de cookies</a>.'; 
var pTermos = createObject('{"tag":"p","innerhtml":"'+text+'","class":"ptermos"}');
  

  
var inputAreas  = createObject('{"tag":"input","id":"areas","type":"hidden"}');
  
var div         = createObject('{"tag":"div","id":"status","class":"status"}');
  
//var button      = createObject('{"tag":"button","id":"status","innerhtml":""}');
  
var btEntrar           = createObject('{"tag":"button","id":"btEntrar","innerhtml":"Entrar"}'); 
var btCadastrar        = createObject('{"tag":"button","id":"btCadastrar","innerhtml":"Cadastrar"}');  
var btRecuperar        = createObject('{"tag":"button","id":"btRecuperar","innerhtml":"Recuperar"}'); 
  
var bLogin             = createObject('{"tag":"button","id":"btLogin","type":"button","textnode":"Fazer login"}');
var bInsert            = createObject('{"tag":"button","id":"btInsert","type":"button","textnode":"Criar conta"}');
  
var bInsertPaciente    = createObject('{"tag":"button","id":"btInsertPaciente","type":"button","textnode":"Sou paciente"}');
var bInsertMedico      = createObject('{"tag":"button","id":"btInsertMedico","type":"button","textnode":"Sou profissional da saúde"}');
  
var bRecovery          = createObject('{"tag":"button","id":"btRecovery","type":"button","textnode":"Esqueci minha senha"}');
  
//var menu        = createObject('{"tag":"options"}');
  
bLogin.onclick=(function(){

  sA(login,'class','login');
  setRequired('email,password')
  sA(formLogin,'onsubmit','login();return false;');
  
})

bInsert.onclick=(function(){

  setRequired('label,email,password,cpf,identidade,telefone,cep,endereco,bairro,cidade,estado');
  sA(login,'class','insert');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})
  
bInsertPaciente.onclick=(function(){
  
  setRequired('label,email,password,cpf');
  
  sA(login,'class','insertpaciente');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})  
  
bInsertMedico.onclick=(function(){
  
  setRequired('label,email,password,cpf,identidade,telefone,cep,endereco,bairro,cidade,estado,crm');
  
  sA(login,'class','insertmedico');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="50";
  
})  
  
bRecovery.onclick=(function(){
  
  setRequired('email');
  
  sA(login,'class','recovery');

  sA(formLogin,'onsubmit','recovery();return false;');

})

formLogin.append(btclose,h1,plogin,pinsert,pinsertm,precovery,inputName,inputEmail,inputPass,inputCPF,inputRG,inputTelefone,inputCEP,inputEndereco,inputBairro,inputCidade,inputEstado,inputSuite);
  
formLogin.appendChild(bInsertPaciente);
formLogin.appendChild(bInsertMedico);

formLogin.append(inputCRM,inputAreas,pTermos,btEntrar,btCadastrar,btRecuperar,div);

if(config.newusers==1){

    formLogin.appendChild(bInsert);

}

formLogin.append(bLogin,bRecovery);
  
login.append(formLogin);
  
return login;
  
  	/*
  	login.appendChild(adsense());
	(adsbygoogle = window.adsbygoogle || []).push({});
*/
	
}

function setRequired(list){
  
  var form = got(document,"form");

  var input    = got(form[0],"input");

  for (var x = 0; x < input.length;x++){
    
    input[x].removeAttribute('required');
    
  }
  
  var split = list.split(",");
  
  for(x=0;x<split.length;x++){
    
    goi(split[x]).setAttribute("required","required");
    
  }
  
}


