function fileupload(data,header){

  var label    = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
  var div      = createObject('{"tag":"div"}');

  var uuid = uuidv4();

  var object   = createObject('{"tag":"input","id":"files","type":"hidden","value":"'+uuid+'"}');

      header.append(btHeaderAttach());

  var span   = createObject('{"tag":"uploadedStatus"}');
  var result = createObject('{"tag":"uploadedFiles"}');
    
      div.append(object,result,span);

      if(data.value){

        var files    = JSON.parse(data.value);

        Object.entries(files).forEach(([key, value]) => {
          
            fileUploadFigure(result,files);
      
            object.setAttribute('value',value.uuid);

        });

      }

  return div;
  
}