function loadPacientesFull(element,array){

  var now      = new Date().getFullYear();
  var birthday = new Date(array.nascimento).getFullYear();
  var age      = (now - birthday);

  var rua           = (array.rua)?array.rua:"";
  var numero        = (array.numero)?" "+array.numero:"";
  var complemento   = (array.complemento)?", "+array.complemento:"";
  var bairro        = (array.bairro)?" - "+array.bairro:"";
  var cidade        = (array.cidade)?" - "+array.cidade:"";
  var estado        = (array.estado)?" - "+array.estado:"";

  var endereco   = rua+numero+complemento+bairro+cidade+estado;
  
  var nascimento = (array.nascimento)?age:"Não informado";  
  var telefone   = (array.telefone)?array.telefone:"Não informado";  
  var whatsapp   = (array.whatsapp)?new String(array.whatsapp):"";  
  var label      = (array.label)?array.label:"Não informado";  
  var cpf        = (array.cpf)?array.cpf:"Não informado";  
  var identidade = (array.cpf)?array.identidade:"Não informado";  
  var email      = (array.email)?array.email:"Não informado";  


  var eEndereco   = createObject('{"tag":"endereco","innerhtml":"Endereço : '+endereco+'"}');
  var eNascimento = createObject('{"tag":"nascimento","innerhtml":"Idade : '+nascimento+'"}');
  var eTelefone   = createObject('{"tag":"telefone","innerhtml":"Telefone : '+telefone+'"}');
  var eEmail      = createObject('{"tag":"email","innerhtml":"Email : '+email+'"}');
  var eCPF        = createObject('{"tag":"cpf","innerhtml":"CPF : '+cpf+'"}');
  var eIdentidade = createObject('{"tag":"identidade","innerhtml":"Identidade : '+identidade+'"}');
  var eWhatsapp   = createObject('{"tag":"icon","class":"icon-whatsapp"}');
  var eOpen       = createObject('{"tag":"icon","class":"icon-profile"}');

  let ePacientes  = createObject('{"tag":"pacientes"}');
  let eDiv        = createObject('{"tag":"div"}');
  let eLabel      = createObject('{"tag":"label","innerhtml":"Paciente : '+label+'"}');
eLabel.append(eOpen);
  eDiv.append(eLabel,eEmail,eEndereco,eNascimento,eTelefone,eCPF,eIdentidade);

  if(whatsapp.length==13){

    eWhatsapp.onclick=(function(){

      window.open('https://api.whatsapp.com/send?phone='+whatsapp,'_blank');

    });

    eDiv.append(eWhatsapp);

  }

    eLabel.onclick=(function(){
      
      let open = this.parentElement.parentElement;

      console.log(open.getAttribute('open'));

      if(open.getAttribute('open')=="1"){
        
         open.setAttribute('open','0');
        
      }else{

        open.setAttribute('open','1');
        
      }
      
     
    
    });
  
  ePacientes.append(eDiv);
  element.append(ePacientes);

}