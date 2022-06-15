const modalRemedios =  function() {

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let icon    = createObject('{"tag":"icon","class":"icon-aid-kit"}');
  let p       = createObject('{"tag":"p","innerhtml":"Meus medicamentos em uso"}');

      content.onclick=(function(){modulesOpen('usersremedios');}); 
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;

}