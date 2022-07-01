

function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

  var size = file.size;
  
	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];

	

	var labelLoading=cE("label");
  var iconLoading     = createObject('{"tag":"icon","class":"icon-spinner3"}');
  
	    var uploadedfiles = document.querySelector("form uploadedfiles");
      var divLoading    = createObject('{"tag":"div"}');
          
          divLoading.append(iconLoading,labelLoading);
          uploadedfiles.insertBefore(divLoading, uploadedfiles.childNodes[0]);
	
	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
                             
      divLoading.setAttribute("type",object.ext);
      
			if(object.ext=='jpg'){

				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);

			}else if(object.ext=='png'){

				insertAnexos(anexos,object.filename);
				cb(object.filename);


			}else if(object.ext=='pdf'){
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}else if(object.ext=='mp4'){
				
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

    var size    = object.files[x].size;
    
    var maxsize = '80';
    
    switch(ext) {

      case "image/jpeg": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFiles(uploadedfiles,filename);});break;
      case "application/pdf": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFilesPDF(uploadedfiles,filename);});break;
      case "image/png": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFiles(uploadedfiles,filename);});break;
      case "video/mp4": 
        
        if(size < (maxsize * 1024 * 1024)){
  
         sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFilesMP4(uploadedfiles,filename);});
          
        }else{
          
          alert('Arquivo maior que o permitido '+maxsize+'mb');
          console.log((size/1024)/1024);
          
        }
        
        break;
        
      default:alert('Formato de arquivo não suportado');
        
    } 


	}
		
}