
function logout(){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLogout.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

         mountLogin(authentic);
     
         setTimeout(function () {
           
            logoutResetStep1();
           
            setTimeout(function () {
              logoutResetStep2();
              pagesLoad();
            }, 1000);
      
          }, 500);

		}
		
	};
  
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}


function logoutResetStep1(){
  
   document.body.setAttribute('logged','0');
   document.body.setAttribute('notification','0');
   document.body.setAttribute('filter','0');
  
}

function logoutResetStep2(){
  
    rE(got(document,'nav'));
    //rE(got(document,'grade'));
    rE(got(document,'section'));
    rE(got(document,'boxfilter'));
    rE(got(document,'header'));
    rE(got(document,'boxnotification'));
    rE(got(document,'navsuite'));
    rE(got(document,'printheader'));
    document.body.setAttribute('modules',"");
  
    delete localStorage.userinfo;

  }
