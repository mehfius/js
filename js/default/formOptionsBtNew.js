
function btNew(){
	  
  var button = createObject('{"tag":"button","innerhtml":"Novo","action":"new"}');
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-file-empty");

			button.onclick=(function(){

				formNew();

			});
	button.append(icon);
	return button;
	
}