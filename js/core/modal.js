const modal = async function(){
  
  var body    = got(document,'body')[0];
  
  var modal   = createObject('{"tag":"modal"}');

      modal.append(modalProntuarios());

      modalUsers();


  body.append(modal);
  
}

const modalUsersCheckFields = async function() {

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const rawResponse = await fetch(config.form, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session:user.session,modules:"users"})

  });

  const data = await rawResponse.json();

  let x = 0;
  let text = "";

  Object.entries(data.form.fields).forEach(([key, value]) => {

    if(value.value){

        x++;

    }else{

        text+="<li>"+value.label+"</li>";

    }

  });

  return text;

}

function modalProntuarios(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let p       = createObject('{"tag":"p","innerhtml":"Bem-vindo ao Doctor8, clique abaixo para começar"}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Acessar meus arquivos"}');
  
      button.onclick=(function(){document.querySelector('a[c="133"]').click();});
  
      header.append(title);
      content.append(p,button);

      div.append(header,content);

  return div;

}

const modalUsers = async function(){

  let text = await modalUsersCheckFields();

  if(text){

    let li = "<ul>"+text+"</ul>";

    var div     = createObject('{"tag":"div"}');

    var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
    var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
    
    let content = createObject('{"tag":"content"}');
    let p       = createObject('{"tag":"p","innerhtml":"Seu cadastro está incompleto'+li+'"}');
    let button  = createObject('{"tag":"button","type":"button","innerhtml":"Completar cadastro"}');
    
        button.onclick=(function(){

          document.querySelector('profile > div').click();

          rE(this.parentElement.parentElement);

          });
    
    header.append(title);
    content.append(p,button);

    div.append(header,content);

    document.querySelector("modal").append(div);

  }


}

function modalFormCovid(){
  
  var content = createObject('{"tag":"content"}');
  var p       = createObject('{"tag":"p","innerhtml":"Clique abaixo caso você queira receber um tratamento para covid-19"}');
  var button  = createObject('{"tag":"button","type":"button","innerhtml":"Preencher formulário"}');
  
      button.onclick=(function(){formCustomEdit("formcovid")});
  
      content.append(p);
      content.append(button);
  
  return content;
  
}