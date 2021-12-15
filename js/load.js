function load(){

    if (window.innerWidth <= 480) {

      document.body.setAttribute('mobile', '1');

    } else {

      document.body.setAttribute('mobile', '0');

    }

   // suporteLoad();

    document.body.appendChild(loadingMount());
    document.body.appendChild(ad());
    document.body.setAttribute('open','0');
    document.body.setAttribute('logged','0');
    //fail
    pagesLoad((data)=>{

      var text   = [];
      var config = {};

      for (var [key, value] of Object.entries(data[0].suites_config)) {

          config[value.label]=value.url;

      }

      //var config=JSON.parse(text);


      localStorage.config       = JSON.stringify(config);

      //console.log(JSON.stringify(data));
      //localStorage.languages    = JSON.stringify(data.languages);
      //localStorage.language    = "ptbr";

      document.getElementsByTagName("pages")[0].append(mountLogin());
      grade();

      //formEdit('prontuarios',21233);
      //document.body.append(selectBox('pacientes'));

    });


}

function loopCheck(){
  
  setTimeout(function(){

    if(document.body.getAttribute('open')=='1'){
      
/*       if (navigator.onLine) {loadNotifications();} else {console.log('offline');}
       */
    }
   
    loopCheck();
    
  }, 15000);  
    
}

window.onblur = function() {
  document.body.setAttribute('open','0');
}

window.onfocus = function() {
  document.body.setAttribute('open','1');
}

document.onkeydown = function(evt) {
	
	var teste=evt.keyCode;
   
	if(teste==27){
    formClose();
    navClose();
	}
	
}

window.onload=load;