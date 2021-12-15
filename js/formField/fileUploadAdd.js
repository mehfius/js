
function addUploadFiles(local,object){

  const config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var figure 			= cE("figure");
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");
	var spanLeft 		= cE("span");
	var spanRight 	= cE("span");
	var spanZoom 		= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");
  var spanEdit 		= cE("span");

	if(object.filename!==undefined){
    
		var filename=object.filename;
		var key=object.key;
		
	}else{
		var filename=object;
	}
	
	if(filename!==null){
    
    var urlimgm = config.imgm+filename+"?key="+key;
    var urlimg  = config.img+filename+"?key="+randomString(32);

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanLeft);
		divOptions.appendChild(spanZoom);
		divOptions.appendChild(spanRight);
		//divOptions.appendChild(spanEdit);
		
		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin');
		spanLeft.setAttribute('class','icon-undo');
		spanRight.setAttribute('class','icon-redo');
		spanZoom.setAttribute('class','icon-search');
		spanEdit.setAttribute('class','icon-edit');
		
		sA(figure,"style","background-image:url('"+urlimgm+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    
    spanZoom.onclick=(function(){
      window.open(urlimg,'_blank');
    });
                      
		spanLeft.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=left&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
      
		});

		spanRight.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=right&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
		});
		
		if(goiFind(filename)){
			
			goi(filename).appendChild(divOptions);
			goi(filename).appendChild(figure);
			
		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.appendChild(figure);
			
		}
		

		/*local.appendChild(div);*/
		
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		
    /*    
	    div.appendChild(label);
		div.appendChild(content);
		div.appendChild(btsalvar);
			*/
		div.setAttribute("id",filename);
	
		
	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
	
		
		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}


}
