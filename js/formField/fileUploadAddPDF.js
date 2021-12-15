
function addUploadFilesPDF(local,filename){

  const config = JSON.parse(localStorage.config);

	var split       = filename.split(".");

	var div 				= createObject('{"tag":"div","id":"'+filename+'"}');
	var divOptions 	= createObject('{"tag":"options"}');
	var spanDelete 	= createObject('{"tag":"span","class":"icon-bin"}');
	var spanCover 	= createObject('{"tag":"span","innerhtml":"Destaque"}');
	var spanZoom 		= createObject('{"tag":"span","class":"icon-search"}');
	var figure 			= createObject('{"tag":"figure","style":"background-image:url('+config.imgp+split[0]+'.jpg);"}');
	var divLabel 		= createObject('{"tag":"h3"}');


	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);

	}
	
  spanDelete.onclick=(function(){

      if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,filename)}

  });

  spanZoom.onclick=(function(){

    window.open(config.pdf+filename,'_blank');

  });
	
  divOptions.append(spanDelete,spanZoom);
  figure.append(divLabel);
  div.append(figure,divOptions);

}

function addUploadFilesPDFv2(local,filename){

  const config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("iframe");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"src",localStorage.getItem("pdf")+split[0]+".pdf");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}
