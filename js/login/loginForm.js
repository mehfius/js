function mountLogin(){

var config      = JSON.parse(localStorage.config); 

var logo        = config.urllogo;
  
var btclose     = createObject('{"tag":"btclose","innerhtml":"x","onclick":"document.body.setAttribute(\'openlogin\',\'0\');"}');    
var plogin      = createObject('{"tag":"p","innerhtml":"Login","class":"plogin"}');
var pinsert     = createObject('{"tag":"p","innerhtml":"Criar conta","class":"pinsert"}');
var pinsertm    = createObject('{"tag":"p","innerhtml":"Cadastro de Médico","class":"pinsertm"}');
var precovery   = createObject('{"tag":"p","innerhtml":"Recuperar senha","class":"precovery"}');  
var login 	    = createObject('{"tag":"login","class":"login","name":"login"}');
var formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;","autocomplete":"off"}');

// Inicio Input  
  
var inputName        = createObject('{"tag":"input","id":"label","placeholder":"Nome completo"}');
var pattern          = encodeURI("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");  
var inputEmail       = createObject('{"tag":"input","id":"email","placeholder":"seu@email.com","pattern":"'+pattern+'"}');
var inputPass        = createObject('{"tag":"input","id":"password","type":"password","placeholder":"Senha"}');
var pattern          = encodeURI("\\d{11}");
var inputWhatsapp    = createObject('{"tag":"input","id":"whatsapp","title":"Exemplo: 5531987654321","placeholder":"Whatsapp (ex: 5531987654321)","type":"number","min":"0","pattern":"[0-9]{2}[0-9]{2}[0-9]{9}"}'); 
var inputCep              = createObject('{"tag":"input","id":"cep","type":"number","placeholder":"CEP","min":"0","maxlength":"8"}');
var inputEstado           = createObject('{"tag":"input","id":"estado","type":"text","readonly":"true"}');
var inputCidade           = createObject('{"tag":"input","id":"cidade","type":"text","readonly":"true"}');
var inputCRM         = createObject('{"tag":"input","id":"crm","placeholder":"Registro profissional","type":"text","onkeydown":"return inputTypeNumber(event);"}');

// Fim input
  
var text = 'Ao clicar em cadastrar, você concorda com a ';
    text+= '<a href='+config.login_politicaprivacidade+'  target=_blank>política de privacidade</a>, ';
    text+= '<a href='+config.login_termosdeuso+'          target=_blank>termos de uso</a> e ';
    text+= '<a href='+config.login_acordodousuario+'      target=_blank>acordo do usuário</a> e ';
    text+= '<a href='+config.login_loiticadecookies+'     target=_blank>política de cookies</a>.'; 

var pTermos = createObject('{"tag":"p","innerhtml":"'+text+'","class":"ptermos"}');
  
var inputAreas  = createObject('{"tag":"input","id":"areas","type":"hidden"}');
  
var div         = createObject('{"tag":"div","id":"status","class":"status"}');
  
var btEntrar           = createObject('{"tag":"button","id":"btEntrar","innerhtml":"Entrar"}'); 
var btCadastrar        = createObject('{"tag":"button","id":"btCadastrar","innerhtml":"Cadastrar"}');  
var btRecuperar        = createObject('{"tag":"button","id":"btRecuperar","innerhtml":"Recuperar"}'); 
  
var bLogin             = createObject('{"tag":"button","id":"btLogin","type":"button","textnode":"Fazer login"}');
var bInsert            = createObject('{"tag":"button","id":"btInsert","type":"button","textnode":"Criar conta"}');
  
var bInsertPaciente    = createObject('{"tag":"button","id":"btInsertPaciente","type":"button","textnode":"Sou paciente"}');
var bInsertMedico      = createObject('{"tag":"button","id":"btInsertMedico","type":"button","textnode":"Sou profissional da saúde"}');
  
var bRecovery          = createObject('{"tag":"button","id":"btRecovery","type":"button","textnode":"Esqueci minha senha"}');

  
bLogin.onclick=(function(){

  sA(login,'class','login');
  setRequired('email,password')
  sA(formLogin,'onsubmit','login();return false;');
  
})

bInsert.onclick=(function(){

  setRequired('label,email,password,whatsapp,cep,cidade,estado');
  sA(login,'class','insert');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})
  
bInsertPaciente.onclick=(function(){
  
  setRequired('label,email,password,whatsapp,cep,cidade,estado');
  
  sA(login,'class','insertpaciente');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})  
  
bInsertMedico.onclick=(function(){
  
  setRequired('label,email,password,crm,password,whatsapp,cep,cidade,estado');
  
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

inputCep.onkeyup=(function(){

    let cep =  this.value.replace(/\D/g, '');

    if(cep.length >= 8){

      loginInsetCheckCep(this.value)

    }

});

formLogin.append(btclose,plogin,pinsert,pinsertm,precovery,inputName,inputEmail,inputPass,inputCep,inputEstado,inputCidade,inputWhatsapp);
  
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

