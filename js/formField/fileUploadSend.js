

function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];
	var uploadedfiles = document.querySelector("form uploadedfiles");
	
	var divLoading=cE("div");
	var labelLoading=cE("label");
	divLoading.appendChild(labelLoading);
	uploadedfiles.insertBefore(divLoading, uploadedfiles.childNodes[0]);
	

	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
			
			if(object.ext=='jpg'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
			
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='png'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				cb(object.filename);
				console.log(object);
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='pdf'){
				
				//var uploadedfiles = got(object.parentNode.parentNode,"uploadedfiles")[0];
				
				//addUploadFiles(uploadedfiles,object.filename);
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}
			
		}

	};

	xhr.open('POST', url, true);
	xhr.send(formData);

}

function upload(object){

	const config = JSON.parse(localStorage.config);

	var window = got(document,"window")[0];
	
	var uploadedfiles = got(window,"uploadedfiles")[0];
	
	for(var x=0;x<object.files.length;x++){
			
		var ext     = object.files[x].type;
		var anexos  = document.getElementById('files').value;

		if(ext=='image/jpeg'){

			sendFile(object.files[x],anexos,config.upload+'?',

				function(filename){

					addUploadFiles(uploadedfiles,filename);

				}

			);
			
		}else if(ext=='application/pdf'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
        
				  //pdftothumb(object);
	

					addUploadFilesPDF(uploadedfiles,filename);

				}
							 
			);

		}else if(ext=='image/png'){
			
			sendFile(object.files[x],anexos,config.upload+'?',

							 
				function(filename){
				

					addUploadFiles(uploadedfiles,filename);

				}
							 
			);
						
		}else{
			alert('Formato de arquivo não suportado');
		}

	}
		
}