
const radioReset = function(e){

  Object.entries(e.querySelectorAll("opt")).forEach(([key, value]) => {

      value.setAttribute("checked","0");
     
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

      Object.entries(options).forEach(([k, v]) => {


        let checked = (value==k)?"1":"0";

        var opt    = createObject('{"tag":"opt","value":"'+k+'","checked":"'+checked+'"}');
        var icon   = createObject('{"tag":"icon","class":"icon-"}');

        var label  = createObject('{"tag":"label","innerhtml":"'+v+'"}')

          opt.append(icon,label);
          div.append(opt);

          opt.onclick=(function(){

            radioReset(this.parentElement);

            this.setAttribute("checked","1");
            this.parentElement.querySelector("input").value = this.getAttribute("value");

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