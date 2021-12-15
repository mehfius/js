

function boxFilter(){
  
  const user = JSON.parse(localStorage.user);

  const config = JSON.parse(localStorage.config);

  if(document.getElementsByTagName("boxfilter").length==0){
    
    var box           = document.createElement("boxfilter");
    var filter        = document.createElement("filter");
    var header        = document.createElement("header");
    var menu = document.getElementsByTagName("menu")[0];
    
        box.appendChild(header);
        box.appendChild(filter);
    
        menu.append(box);
      
  }else{
    
    var box    = document.getElementsByTagName("boxfilter")[0];

    var filter = box.getElementsByTagName("filter")[0];
    
    race(filter);
    
    var header = box.getElementsByTagName("header")[0];
    
  }

  var modules = document.body.getAttribute("modules");

  if(modules=="prontuarios" && user.areas=='50'){

    filter.appendChild(mountFilterCustom("pacientes","Listagem de pacientes"));
    
    filter.appendChild(mountFilterCustom("category","Listagem de categorias"));

  }else if(modules=="pacientes"){

    filter.appendChild(filterSearch("pacientes","Listagem de pacientes"));

  }else if(modules=="eventos"){

    filter.appendChild(mountFilterCustom("category"));

  }else{
     filter.appendChild(mountFilterStandard());
  }
  
}

function mountFilterStandard(){
	
	
	var filter 	= cE("filter");
	var input   = cE("input");	
	var btSearch= cE("icon");
	    btSearch.setAttribute("class","icon-search");
	//sA(input,"class","hide");
	
	input.setAttribute("placeholder","Digite aqui para filtrar o resultados");
	
	btSearch.onclick = function() {input.focus();};
	
	input.onblur = function() {};
	
	input.onkeyup = function() {
		
		var item = got(got(document,"view")[0],"item");
			
		if(item.length){
			
			var string1 = removeAcento(this.value.toLowerCase());
			
			for(var x=0;x<item.length;x++){

				var nohtml =item[x].innerHTML.replace(/<(?:.|\n)*?>/gm, '');

				var f=removeAcento(nohtml.toLowerCase());

				if(f.indexOf(string1) >= 0){

					item[x].style.display="block";

				}else{

					item[x].style.display="none";

				}		

			}
		
		}
			
	};		
	
	filter.appendChild(input);
	filter.appendChild(btSearch);
	
	var header = got(document,"header")[0];
	
	//header.appendChild(filter);
	
	return filter;
}


function iconFilter(){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-search");
    
        icon.onclick=(function(){
          
        document.body.setAttribute("notification","0");

        if(document.body.getAttribute("filter")=="1"){

           document.body.setAttribute("filter","0");

        }else{

          document.body.setAttribute("filter","1");

        }
          
        });

  return icon;
  
}