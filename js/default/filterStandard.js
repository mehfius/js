
function mountFilterStandard(){
	
	var filter 	= cE("filterstandard");
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