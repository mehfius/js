
function getModulesByUrl(url){
		
		var groups = JSON.parse(localStorage.nav);
let modules = {}
    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.url==url){

            modules = value1;

          }

      });



    });

    return modules;
}