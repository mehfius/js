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
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/logincheck'
  const supabasekey       = localStorage.supabasekey;
  const url               = supabaseurl + supabase_function;
  
	setTimeout(function () {

    (async () => {
      const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({email: email.value, password: password.value,agent:window.navigator.userAgent})
      });

      const authentic = await rawResponse.json();


        if(authentic.status==1){
          
          //success

          status.innerHTML=message("501");	
          sA(status,"class","sucess");
          setTimeout(function () {loadLogged(authentic);}, 100);
        
        }else{
          
          sA(status,"class","error");
          console.log(authentic);
          status.innerHTML=message(authentic.status);
          
          switch (authentic.status) {

            case '502':sA(password,"class","error");break;  
            case '504':sA(email,"class","error");break; 
            case '505':sA(password,"class","error");break;
            case '508':sA(email,"class","error");break;            
    
          }  
    
          //setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 100);
          
        }

    })();
		
	}, 100);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.user.areas);
  document.body.setAttribute('open',"1");

}