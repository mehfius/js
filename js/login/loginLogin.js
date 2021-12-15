function login(){
	
	//var form  	 = got(document,'form');

	var email 	 = goi('email');
	var password = goi('password');
	var suite    = goi('suite');
	var status   = goi('status');
	
	email.setAttribute('class','');
	password.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Autenticando...";
 /* 
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
  
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

			if(authentic.status==="1"){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 500);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 2000);
				
			}
		}
	}; */

	setTimeout(function () {

/*      var url    =  getLocalStorage("config","login");
    
    var data 	= new FormData();
        data.append('email', email.value);
        data.append('password', password.value);
        data.append('suite', suite.value);

    xmlhttp.open("POST", url, true);

    xmlhttp.send(data); */


  (async () => {
    const rawResponse = await fetch(getLocalStorage("config","login"), {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({email: email.value, password: password.value, suite: suite.value})
    });

    const authentic = await rawResponse.json();


			if(authentic.status==1){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 100);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 100);
				
			}

  })();
		
	}, 100);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.areas);
  document.body.setAttribute('open',"1");

}