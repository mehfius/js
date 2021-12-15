function loadPacientes(element,array){

   if(array){

      var paciente   = createObject('{"tag":"pacientes"}');
      var div        = createObject('{"tag":"div"}');
      var icon       = createObject('{"tag":"icon","class":"icon-user"}');
      
   //   div.append(createObject('{"tag":"label","innerhtml":"Paciente: "}'));
      div.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));

      paciente.appendChild(div);
      element.appendChild(paciente);
     
   }

}