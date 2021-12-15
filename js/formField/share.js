function share(attribute){

  var label       = cE("label");
	var div         = cE("div");
 
  var input  = cE("input");
  
  var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");
 
  div.append(input);
  
  return div;
	
}