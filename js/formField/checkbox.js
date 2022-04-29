const checkbox = function(data){

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

        let replaced = value.replace('{', '[').replace('}', ']');

        let arrayValue = (value)?JSON.parse(replaced):"";
        
 
        let checked   = (arrayValue.indexOf(parseInt(k))>-1)?"1":"0";

        var opt       = createObject('{"tag":"opt","value":"'+k+'","checked":"'+checked+'"}')

        var label     = createObject('{"tag":"label","innerhtml":"'+v+'"}')

        var icon      = createObject('{"tag":"icon","class":"icon-"}');

            opt.append(icon,label);
            div.append(opt);

            opt.onclick=(function(){

              let input = this.parentElement.querySelector("input");

              let text  = input.value;

              let array = (text)?JSON.parse(input.value.replace('{', '[').replace('}', ']')):[];
  
                  value = parseInt(this.getAttribute("value"));

                 

              let find  = (array)?array.indexOf(value):-1;

              if(find>-1){

                array.splice(find, 1);
                opt.setAttribute("checked","0");

              }else{

                array.push(parseInt(this.getAttribute("value")));
                opt.setAttribute("checked","1");

              } 
              
              
              
              input.value=(array.length)?"{"+array+"}":"{}"; 

              console.log(input.value);

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