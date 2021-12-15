
function loadPacientesFull(element,array){
  
  let pacientes = createObject('{"tag":"pacientes"}');
  let div       = createObject('{"tag":"div"}');
  let label     = createObject('{"tag":"label","innerhtml":"'+array.pacienteslabel+'"}');

      div.append(label);
      pacientes.append(div);

      element.append(pacientes);
  
}
