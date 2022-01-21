
const modalMVB = function(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Médicos voluntários do Brasil"}');
  
  let content = createObject('{"tag":"content"}');
  let p       = createObject('{"tag":"p","innerhtml":"Formulário para atendimento Médicos voluntários do Brasil"}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Preencher"}');
  
      button.onclick=(function(){formEdit("mvb")});
  
      header.append(title);
      content.append(p,button);

      div.append(header,content);

  return div;


}