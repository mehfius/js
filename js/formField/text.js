function text(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.appendChild(label);

/* 	for (var key in attribute){
				
		if(attribute[key]!=="0" && attribute[key]!==""){
			object.setAttribute(key,attribute[key]);
		}

	}
	 */

	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}