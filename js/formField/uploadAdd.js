
function addUploadFiles(local,object){

  const config = JSON.parse(localStorage.config);

	var div 				= createObject('{"tag":"div"}');
	var figure 			= createObject('{"tag":"figure"}');

	var spanDelete 	= createObject('{"tag":"span","class":"icon-bin"}');
	var spanLeft 		= createObject('{"tag":"span","class":"icon-undo"}');
	var spanRight 	= createObject('{"tag":"span","class":"icon-redo"}');
	var spanZoom 		= createObject('{"tag":"span","class":"icon-search"}');
	var divOptions 	= createObject('{"tag":"options"}');

	if(object.filename!==undefined){
    
		var filename = object.filename;
		var key      = object.key;
		
	}else{

		var filename = object;

	}
	
	if(filename!==null){
    
    var urlimgm = config.imgm+filename+"?key="+key;
    var urlimg  = config.img+filename+"?key="+randomString(32);

		    divOptions.append(spanDelete,spanLeft,spanZoom,spanRight);
		    div.append(divOptions);


		sA(figure,"style","background-image:url('"+urlimgm+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    


    spanZoom.onclick=(function(){
      window.open(urlimg,'_blank');
    });
                      
		spanLeft.onclick=(function(){

      let key = randomString(32);

			figure.setAttribute('style',"background-image:url('"+config.urlimagerotate+"?img="+filename+"&rotate=left&key="+key+"');");
			//divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");

      rotateImage(filename,key);
      
		});

		spanRight.onclick=(function(){

      let key = randomString(32);

			figure.setAttribute('style',"background-image:url('"+config.urlimagerotate+"?img="+filename+"&rotate=right&key="+key+"');");
			//divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      rotateImage(filename,key);
		});
		
		if(goiFind(filename)){
			
			goi(filename).appendChild(divOptions);
			goi(filename).appendChild(figure);
			
		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.appendChild(figure);
			
		}
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		

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


const rotateImage = async function(filename,key){

  const config      = JSON.parse(localStorage.config);

  const rawResponse = await fetch(config.urlsetimagekey, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({filename:filename,key:key})

  });

  const data = await rawResponse.json();
  
}