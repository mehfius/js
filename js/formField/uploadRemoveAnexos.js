
function removeAnexos(e,filename){
	
	var url 	= localStorage.getItem("url")+'/admin/json/jsonAnexosDelete.php?filename='+filename;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			
			if(xmlhttp.responseText==1){
				
				rE(e);
				console.log(e);
			}
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}