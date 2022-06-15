

function modalProntuarios(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let icon    = createObject('{"tag":"icon","class":"icon-folder-open"}');
  let p       = createObject('{"tag":"p","innerhtml":"Bem-vindo ao Doctor8, clique aqui para começar"}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Acessar meus arquivos"}');
  
      content.onclick=(function(){modulesOpen('prontuarios')});
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;

}