
function modulesLoadTitle(id){
		
		var groups = JSON.parse(localStorage.nav);

    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.id==id){

            

          }



      });

    });

    
/* 		var nArray= getValueArray(array,'name',name)[0];
	
		var logo 	= got(document,"logo")[0];
		var span  = cE("span");
		var title = cT(nArray.title);
	
		race(logo);
	
		span.appendChild(title);
		logo.appendChild(span);
	
		 */

}