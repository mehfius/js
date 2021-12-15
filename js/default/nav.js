function navMount(){
  
  var user   = JSON.parse(localStorage.user);  
  var config          = JSON.parse(localStorage.config);
  var storagenav     = JSON.parse(localStorage.nav);

	if(gotFind("nav")){
    
		rE(got(document,"nav")[0]);

	}
	
	var html = '';

	var nav  	  = cE('nav');
	    nav.appendChild(profile());

	var body = got(document,'body')[0];

  Object.entries(storagenav).forEach(([key, value]) => {

    var span      = createObject('{"tag":"span","innerhtml":"'+value.label+'"}');

    nav.append(span);

    Object.entries(value.modules).forEach(([key1, value1]) => {

       let label   = value1.label;
       let url    = value1.url;
       let premium = value1.premium;
       let id       = value1.id; 

      var a      = createObject('{"tag":"a","innerhtml":"'+label+'","modules":"'+url+'","premium":"'+premium+'","c":"'+id+'"}');     

     a.onclick=(function(){
        resetHeaderOptions();
        //modulesLoadTitle(c);
        modulesOpen(url);
        navClose();
        gridHide();
       
        //mountRanking();

        document.body.setAttribute("loading","1");
      });


      nav.append(a);

    });

  }); 



    nav.append(createObject('{"tag":"span"}'));

	var a = cE('a');

	a.onclick=(function(){
 
    window.open('/','_self');

	});
	
	a.appendChild(cT('Sair')); 

	nav.appendChild(a);
	

nav.setAttribute('id','nav');


	
	body.appendChild(nav);

	
}

function navClose(){
	
		var nav=got(document,"nav")[0];
	
				nav.setAttribute('class','hide');
	
}