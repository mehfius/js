function loadLogged(authentic){
  

  localStorage.user       = JSON.stringify(authentic.user);
  localStorage.nav        = JSON.stringify(authentic.nav);
  localStorage.shortcut   = JSON.stringify(authentic.shortcut);

  if(authentic.customform!=undefined){
    localStorage.customform = JSON.stringify(authentic.customform);
  }
  

	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();

	navMount();

  loadNavSuite();
  modal();
  document.getElementsByTagName("body")[0].setAttribute("modules","");
  document.getElementsByTagName("body")[0].setAttribute("premium",authentic.user.premium);
  loopCheck();
  
  
	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){
        document.getElementsByTagName("body")[0].setAttribute("openlogin","0");

        
         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
 
           
                }, 5000);
  
          }, 1000);
  
}

function debugIphone(array){
  
  if(array.userinfo.codigo=='10001'){
  
    alert(JSON.stringify(array));
    
  }
  
}