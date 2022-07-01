
function addUploadFilesMP4(local,filename){
  
  const config = JSON.parse(localStorage.config);
  
  var div         = createObject('{"tag":"div","type":"mp4","id":"'+filename+'"}');

	var textCover 	= createObject('{"tag":"Destaque"}');
  
	var spanDelete 	= createObject('{"tag":"span"}');
	var spanZoom 	  = createObject('{"tag":"span"}');
	var spanCover 	= createObject('{"tag":"span"}');
  
	var divOptions 	= createObject('{"tag":"options"}');

	if(filename!==null){

    		spanCover.append(textCover);
    
    		divOptions.append(spanDelete,spanZoom);
    
   /*  		div.append(divOptions); */
    
    		spanDelete.setAttribute('class','icon-bin');
    
    		spanZoom.setAttribute('class','icon-play3');

    let video = createObject('{"tag":"video"}');

    let video_source = createObject('{"tag":"source","src":"'+config.mp4+filename+'","type":"video/mp4"}');

        video.append(video_source);
    
        spanDelete.setAttribute("onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
        video.setAttribute("onclick","window.open('"+config.mp4+filename+"','_blank');");
    
        divOptions.append(spanDelete,spanZoom);

      	if(goiFind(filename)){
      
      		goi(filename).append(video,divOptions);
      
      	}else{
      
      		local.insertBefore(div, local.childNodes[0]);
      		div.append(video,divOptions);
          
      	}

	}else{

	  var icon 	= createObject('{"tag":"icon","class":"icon-user"}');
    
    		figure.setAttribute('style',"");
    		figure.append(icon);
    		div.append(figure);
    		local.append(div);
    
	}


}
