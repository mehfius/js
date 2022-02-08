function password(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div","pass":"1"}');
	var icon        = createObject('{"tag":"icon","class":"icon-"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.appendChild(label);

  label.innerHTML = data.label;
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.append(object,icon);

  icon.onclick=(function(){

    let pass = this.parentElement.getAttribute("pass");

    if(pass=="1"){
      this.parentElement.setAttribute("pass","0");
    }else{
      this.parentElement.setAttribute("pass","1");
    }

  });

  return div;
  
}