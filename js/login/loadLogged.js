function loadLogged(authentic){
  

  localStorage.user       = JSON.stringify(authentic.user);
  localStorage.nav        = JSON.stringify(authentic.nav);
  localStorage.shortcut   = JSON.stringify(authentic.shortcut);

  if(authentic.customform!=undefined){
    localStorage.customform = JSON.stringify(authentic.customform);
  }
  
  //debugIphone(authentic);
  
  //jsonToWebSQL(authentic.shortcut[0].json);
  
	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();

	navMount();
	//modulesLoadCalendar();
  loadNavSuite();
  modal();
  document.getElementsByTagName("body")[0].setAttribute("modules","");
  document.getElementsByTagName("body")[0].setAttribute("premium",authentic.user.premium);
  loopCheck();
  
  
	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){
        document.getElementsByTagName("body")[0].setAttribute("openlogin","0");
         //document.getElementsByTagName("body")[0].setAttribute("ad","1");
        
         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
           
                    //document.getElementsByTagName("body")[0].setAttribute("ad","0");
           
                    //document.getElementsByTagName("body")[0].setAttribute("openlogin","0");
           
                }, 5000);
  
          }, 1000);
  
}

function debugIphone(array){
  
  if(array.userinfo.codigo=='10001'){
  
    alert(JSON.stringify(array));
    
  }
  
}