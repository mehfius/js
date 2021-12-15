function textarea(data){
  
  var label = createObject('{"tag":"label","type":"'+data.type+'","innerhtml":"'+data.label+'"}');
  var div   = createObject('{"tag":"div"}');

	Object.entries(data.attributes).forEach(([key, value]) => {

    if(key=='title'){
        fieldTooltip(label,data.attributes); 
    }

  });

  div.append(label);
  
  var object = createObject('{"tag":"textarea","title":"'+data.label+'","id":"'+data.url+'","class":"default","placeholder":"'+data.label+'"}');
	
	Object.entries(data).forEach(([key, value]) => {

    if(value!=="0" && value!==""){

      if(key=='value'){
        object.append(cT(value));
      }else{
        //object.setAttribute(key,value);
      }

    }
		
	});

  div.append(object);

  return div;
  
}


function textareaPresetSelect(textarea,array){
  
  let label = createObject('{"tag":"label"}');
  
  let select = createObject('{"tag":"select"}');

      select.onchange=(function(){

        if(array[this.value].content!==undefined){
          textarea.innerHTML = array[this.value].content;
        }

      });
  
      select.append(createObject('{"tag":"option","value":"","innerhtml":"Predefinidos"}'));
  
      for (var x=0;x<array.length;x++){
        
        //let label   = array[x].label;
        let content = array[x].content;
        
        let option       = createObject('{"tag":"option","value":"'+x+'","innerhtml":"'+array[x].label+'"}');
        
        select.append(option);
        
      }
  
      label.append(select);

  return label;
  
}
