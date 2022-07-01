function fileupload(data,header,pagedata){

  var label    = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
  var div      = createObject('{"tag":"div"}');
  var uuid     = (data.uuid)?data.uuid:uuidv4();

  var object   = createObject('{"tag":"input","id":"files","type":"hidden","value":"'+uuid+'"}');

      header.append(btHeaderAttach());

  var span   = createObject('{"tag":"uploadedStatus"}');
  var result = createObject('{"tag":"uploadedFiles"}');
    
      div.append(label,object,result,span);
    
      if(data.value){
    
        if(data.value.length){
          
          var files    = data.value;
          
        }else{
          
          var files    = JSON.parse(data.value);
          
        }
    
        fileUploadFigure(result,files);
    
      }

  return div;
  
}