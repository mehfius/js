function mountHeader(array){
  
  var user    = JSON.parse(localStorage.user);  
  var config  = JSON.parse(localStorage.config);

	if(!got(document,"header").length){

    var user   = JSON.parse(localStorage.user);  
    var config = JSON.parse(localStorage.config);

		var header = cE("header");
    
    var header_progressbar 		  = createObject('{"tag":"header_progressbar","class":"_it4vx _72fik"}');
    
		var content = cE("content");
		var icon = cE("icon");
				icon.setAttribute("id","navmenu");
		    icon.setAttribute("class","icon-menu");
    
    var iconSuite= cE("icon");
        iconSuite.setAttribute("class","icon-infinite");
    
	/* 	header.appendChild(icon);
    */
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(config.label);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

    content.append(header_profile());
    
		content.appendChild(a);
    
		logo.onclick=(function(){
        
      var view  = document.querySelector("view");
    
      race(view);
      
      document.body.setAttribute("modules","");
      
    });
    
		icon.onclick=(function(){

			var nav = goi("nav"); 
			nav.setAttribute('class','show');

			gridShow();

		});    

		got(document,"body")[0].appendChild(header);
    
		if(user.areas==1){
      
      content.appendChild(iconSuite);
      content.appendChild(mountMobileVersion());
      
    }
    
    var options = document.createElement("options");
    
        options.appendChild(iconNotification());

    
		if(config.id==1){      
      
      if(user.areas==50 ){
        
        iconPlanilha(options);
        
      }

      
      iconHelp(options);   
      
      if(user.areas==50 ){
        
        iconReceitaEspecial(options);
        
      }
      
    }
    
    content.append(options);
    header.append(header_progressbar,content);
       

	}
	
}

function resetHeaderOptions(){
  
  document.body.setAttribute("notification","0");
  document.body.setAttribute("filter","0");
  
}

function navSuiteMount(){
  
  var div = cE("navsuite");
  
  return div;
  
}

function mountMobileVersion(){
  
  var icon = cE("mobileversion");
  
  icon.onclick=(function(){
    
    var mobile=got(document,"body")[0].getAttribute('mobile');
    
    if(mobile==1){
      got(document,"body")[0].setAttribute('mobile','0');
    }else{
      
      got(document,"body")[0].setAttribute('mobile','1');
    }
    
    
  });
  
  return icon;
  
}