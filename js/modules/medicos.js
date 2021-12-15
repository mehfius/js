
function loadMedicos(elements,array){
  
   if(array){

      var medico   = createObject('{"tag":"medicos"}');

      var div   = createObject('{"tag":"div"}');

      var icon   = createObject('{"tag":"icon","class":"icon-reddit"}');
      
      div.append(createObject('{"tag":"label","innerhtml":"Médico: "}'));
      div.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));


      medico.appendChild(div);
      elements.appendChild(medico);
     
   }

}
