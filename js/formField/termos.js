const termos = function(data){

  var value       = (data.value)?data.value:"false";

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');

	var div         = createObject('{"tag":"div"}');

	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

      div.append(label);

  let checked = (value==="true")?"1":"0";

  var opt       = createObject('{"tag":"opt","value":"","checked":"'+checked+'"}')

  var icon      = createObject('{"tag":"icon","class":"icon-"}');

  opt.append(icon,createObject('{"tag":"label","innerhtml":"'+data.attributes.options[0]+'"}'));
  div.append(opt);

  opt.onclick=(function(){

    let input = this.parentElement.querySelector("input");

    let text  = input.value;

    if(text=="true"){

      input.value="false";
      opt.setAttribute("checked","0");

    }else{

      input.value="true";
      opt.setAttribute("checked","1");

    } 
    

  })

  //label.innerHTML=data.label;

	object.setAttribute("type","hidden");
	object.setAttribute("class","default");
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}