const header_profile = function() {

  var user      = JSON.parse(localStorage.user);  
  var config    = JSON.parse(localStorage.config);


	var profile 	= createObject('{"tag":"profile"}');
/* 	var label 		= createObject('{"tag":"label"}'); */
	var icon 		  = createObject('{"tag":"icon"}');
  
  let style = '';
  
  if(user.profileimage){

    let key       = user.profileimage[0].key;
    let filename  = user.profileimage[0].filename;
    let url       = config.imgp+filename+'?key='+key;
    
        style = 'background-image:url('+url+')';
    
  }
  
  let figure    = createObject('{"tag":"figure","style":"'+style+'"}');

  icon.append(figure);
  
  tooltip(icon,"Editar meu profile");
  
  label.appendChild(cT(user.label));

  profile.onclick=(function(){	

    document.body.setAttribute("loading","1");

    formEdit("users");

    
  });
	
	profile.append(icon);

	return profile;

};