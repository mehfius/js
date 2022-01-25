function loadPacientes(element,array){

   if(array){

      var ePaciente   = createObject('{"tag":"pacientes"}');
      var eDiv        = createObject('{"tag":"div"}');
      var eIcon       = createObject('{"tag":"icon","class":"icon-user"}');
     // var eId         = createObject('{"tag":"id"}');

      eDiv.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));
      eDiv.append(createObject('{"tag":"id","innerhtml":"'+array.id+'"}'));


      ePaciente.append(eDiv);
      element.appendChild(ePaciente);
     
   }

}