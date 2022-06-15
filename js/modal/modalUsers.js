
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

          formEdit("users");

          rE(this.parentElement.parentElement);

          });
    
    header.append(title);
    content.append(p,button);

    div.append(header,content);

    document.querySelector("modal").append(div);

  }


}