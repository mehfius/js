function loadPacientesFull(element,array){
  
  var localidade = (array.estado)?array.estado+' - '+array.cidade:"Não informado";
  var nascimento = (array.nascimento)?array.nascimento:"Não informado";  
  var telefone   = (array.telefone)?array.telefone:"Não informado";  
  var whatsapp   = (array.whatsapp)?array.whatsapp:"Não informado";  
  var label      = (array.label)?array.label:"Não informado";  

  var eLocalidade = createObject('{"tag":"localidade","innerhtml":"Localidade : '+localidade+'"}');
  var eNascimento = createObject('{"tag":"nascimento","innerhtml":"Idade : '+nascimento+'"}');
  var eTelefone   = createObject('{"tag":"telefone","innerhtml":"Telefone : '+telefone+'"}');
  var eWhatsapp   = createObject('{"tag":"whatsapp","innerhtml":"Whatsapp : '+whatsapp+'"}');

  let ePacientes = createObject('{"tag":"pacientes"}');
  let eDiv       = createObject('{"tag":"div"}');
  let eLabel     = createObject('{"tag":"label","innerhtml":"Paciente : '+label+'"}');

  eDiv.append(eLabel,eLocalidade,eNascimento,eTelefone,eWhatsapp);
  ePacientes.append(eDiv);
  element.append(ePacientes);

}