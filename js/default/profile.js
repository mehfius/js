function profile(){

  var user   = JSON.parse(localStorage.user);  
  var config = JSON.parse(localStorage.config);

	var div    		= cE("div");
	var profile 	= cE("profile");
	//var figure 		= cE("figure");
	var label 		= cE("label");

		//profile.appendChild(figure);

			label.appendChild(cT(user.label));
	
	div.onclick=(function(){		

		formEdit("users");
		navClose();
		
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
	
	if(user.profileimage!==undefined){


    //Object.entries(user.profileimage).forEach(([key, value]) => {

      addUploadFilesProfile(result,user.profileimage[0]);

    //});

	}

	div.appendChild(result);

	//addUploadFilesProfile(result,null);
	
	profile.appendChild(div);
	profile.appendChild(label);

	
	return profile;

}

function profileUploadOld(array){


	/*
	var object = cE("input");

	object.setAttribute("type","hidden");
	object.setAttribute("value",array.files);	
	object.setAttribute("name","files");
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.anexos 	= object.getAttribute('value');
		attribute.gwidth 	= "900";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";	

	var fileupload = cEA(attribute);
	
		
	var attribute = [];

		attribute.tag 		= "div";
		attribute.class 	= "fileupload";

	var divFileUpload = cEA(attribute);	

	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 	= "icon-upload3";

	var divFileUploadEnviar = cEA(attribute);					

	var attribute = [];

		attribute.tag 		= "label";
		attribute.text 		= "enviar foto";

	var divFileUploadEnviar = cEA(attribute);	

	var attribute = [];

		attribute.tag 		= "uploadedStatus";

	var span = cEA(attribute);	
		

		
	div.appendChild(object);
		
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
		
	div.appendChild(divFileUpload);

	div.appendChild(span);	
		
	*/
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 	= "icon-pencil";
	
	var icon = cEA(attribute);	
	
	icon.onclick=(function(){

		formEdit("users",array.codigo);
		navClose();
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
		
	if(array.figures!==undefined){

		for(var x=0;x<array.figures.length;x++){

			addUploadFilesProfile(result,array.figures[x].filename);

		}

	}

	div.appendChild(result);
	div.appendChild(icon);
	
	addUploadFilesProfile(result,null);
	
	return div;	
  
}

function addUploadFilesProfile(local,file){

  let filename = file.filename;
  let key      = file.key;
  var config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var figure 			= cE("figure");

	if(filename!==null){

		sA(figure,"style","background-image:url('"+config.imgp+filename+"');");

		div.appendChild(figure);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);

		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}
	
	local.insertBefore(div, local.childNodes[0]); 

}

