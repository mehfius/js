function loadPacientes(element,array){

   if(array){

      var ePaciente   = createObject('{"tag":"pacientes"}');
      var eDiv        = createObject('{"tag":"div"}');
      var eIcon       = createObject('{"tag":"icon","class":"icon-user"}');


      eDiv.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));

      ePaciente.appendChild(eDiv);
      element.appendChild(ePaciente);
     
   }

}