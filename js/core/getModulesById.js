
function getModulesById(id){
		
		var groups = JSON.parse(localStorage.nav);
let modules = {}
    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.id==id){

            modules = value1;

          }

      });



    });

    return modules;
}