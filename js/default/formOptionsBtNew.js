
function btNew(){
	  
  var button = createObject('{"tag":"button","action":"new"}');
  var label  = createObject('{"tag":"label","innerhtml":"Novo"}');
  var icon   = createObject('{"tag":"icon"}');
      icon.setAttribute("class","icon-file-empty");

			button.onclick=(function(){

				formNew();

			});
  
	    button.append(icon,label);
  
	return button;
	
}