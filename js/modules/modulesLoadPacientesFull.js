function loadPacientesFull(element,array){

  var now      = new Date().getFullYear();
  var birthday = new Date(array.nascimento).getFullYear();
  var age      = (now - birthday);

  var localidade = (array.estado)?array.estado+' - '+array.cidade:"Não informado";
  var nascimento = (array.nascimento)?age:"Não informado";  
  var telefone   = (array.telefone)?array.telefone:"Não informado";  
  var whatsapp   = (array.whatsapp)?new String(array.whatsapp):"";  
  var label      = (array.label)?array.label:"Não informado";  

  var email      = (array.email)?array.email:"Não informado";  


  var eLocalidade = createObject('{"tag":"localidade","innerhtml":"Localidade : '+localidade+'"}');
  var eNascimento = createObject('{"tag":"nascimento","innerhtml":"Idade : '+nascimento+'"}');
  var eTelefone   = createObject('{"tag":"telefone","innerhtml":"Telefone : '+telefone+'"}');
  var eEmail      = createObject('{"tag":"email","innerhtml":"Email : '+email+'"}');

  //var eWhatsapp   = createObject('{"tag":"whatsapp","innerhtml":"Whatsapp : '+whatsapp+'"}');

  var eWhatsapp   = createObject('{"tag":"icon","class":"icon-whatsapp"}');

  let ePacientes = createObject('{"tag":"pacientes"}');
  let eDiv       = createObject('{"tag":"div"}');
  let eLabel     = createObject('{"tag":"label","innerhtml":"Paciente : '+label+'"}');

  eDiv.append(eLabel,eEmail,eLocalidade,eNascimento,eTelefone);

  if(whatsapp.length==13){

    eWhatsapp.onclick=(function(){

      window.open('https://api.whatsapp.com/send?phone='+whatsapp,'_blank');

    });

    eDiv.append(eWhatsapp);

  }
  
  ePacientes.append(eDiv);
  element.append(ePacientes);

}