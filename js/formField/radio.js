
const radioReset = function(e){

  Object.entries(e).forEach(([key, value]) => {

      value.setAttribute("class","icon-radio-unchecked");
     

  });

}

const radio = function(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.append(label);

  if(data.attributes){

    if(data.attributes.options){

      var options = data.attributes.options

      Object.entries(options).forEach(([key, value]) => {

        var opt    = createObject('{"tag":"opt"}')
        var icon   = createObject('{"tag":"icon","class":"icon-radio-unchecked"}');
        var label  = createObject('{"tag":"label","innerhtml":"'+value+'"}')

          opt.append(icon,label);
          div.append(opt);

          opt.onclick=(function(){

            radioReset(this.parentElement.getElementsByTagName("icon"));

            this.querySelector("icon").setAttribute("class","icon-radio-checked");

          })

      });

    }

  }
      
  label.innerHTML=data.label;

	object.setAttribute("type","hidden");
	object.setAttribute("class","default");
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}
