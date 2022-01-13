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

    document.body.setAttribute("loading","1");

		formEdit("users");
		navClose();
		
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
	
	if(user.profileimage){


    //Object.entries(user.profileimage).forEach(([key, value]) => {

      addUploadFilesProfile(result,user.profileimage[0]);

    //});

	}

	div.appendChild(result);

	addUploadFilesProfile(result,null);
	
	profile.appendChild(div);
	profile.appendChild(label);

	
	return profile;

}

function addUploadFilesProfile(local,file){


  var config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var figure 			= cE("figure");

	if(file!==null){

    let filename = file.filename;
    let key      = file.key;

		sA(figure,"style","background-image:url('"+config.imgp+filename+"?key="+key+"');");

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

