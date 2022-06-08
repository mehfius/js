function formMountFields(modules,pagedata){

	var user     = JSON.parse(localStorage.user);
	var config   = JSON.parse(localStorage.config);

	var window   = createObject('{"tag":"window","modules":"'+modules+'"}');
	var form     = createObject('{"tag":"form","autocomplete":"off"}');
	var header   = createObject('{"tag":"header"}');
	var label    = createObject('{"tag":"label"}');

	header.append(btBack(pagedata.id),label);

	window.append(header);

  header.append(btHeaderSave(pagedata.id));

	if(pagedata.id){

    label.appendChild(cT("Editando "+modules));
    header.appendChild(btHeaderPrint());
    
		got(document,"body")[0].setAttribute("open","1");

    var jsonform = pagedata.form.fields;

    header.append(btHeaderDelete(pagedata.id));
 

	}else{

		window.setAttribute("tutorial","1");
		label.appendChild(cT("Novo "+modules));
		
		var jsonform = pagedata.form.fields;

	}  



	Object.entries(jsonform).forEach(([key, value]) => {

    form.append(fields(value,header,pagedata));	
	
	});
  
	window.append(form);
	
	document.body.appendChild(window);
  
}  

        
