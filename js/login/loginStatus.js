function getLoginStatus(){
  
	console.log("Checking login status");
  
	var url = localStorage.getItem("url")+'/admin/json/jsonLogin.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);
			            
        console.log("-- Insert data [authentic.suitesinfo]");
			  localStorage.suitesinfo=JSON.stringify(authentic.suitesinfo);
      
				if(authentic.status=="1"){
				
					//success
					loadLogged(authentic);
          //console.log(authentic);
          document.body.setAttribute('logged','1');
          
          document.body.setAttribute('open','1');
          loopCheck();
      
				}else{
          
          document.body.setAttribute('open','0');
					document.body.setAttribute('logged','0');
					//fail
		      pagesLoad();
					mountLogin(authentic);

				}
      
		}
    
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}