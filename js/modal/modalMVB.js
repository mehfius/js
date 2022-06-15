
const modalMVB = function(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Médicos do Brasil"}');
  
  let content = createObject('{"tag":"content"}');

  let icon    = createObject('{"tag":"icon","class":"icon-file-text2"}');
  let p       = createObject('{"tag":"p","innerhtml":"Formulário para ser preenchido antes do atendimento médico."}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Preencher"}');
  
      content.onclick=(function(){formEdit("mvb")});
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;


}