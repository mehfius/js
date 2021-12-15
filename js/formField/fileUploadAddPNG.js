
function addUploadFilesPNG(local,filename){

	var div 		= cE("div");
	var figure 		= cE("figure");
	
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");

	var spanZoom 	= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");

	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);

		divOptions.appendChild(spanZoom);


		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin')

		spanZoom.setAttribute('class','icon-search')
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("png")+filename+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		sA(spanZoom,"onclick","window.open('"+localStorage.getItem("png")+filename+"','_blank');");

		div.appendChild(figure);
		local.appendChild(div);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
		local.appendChild(div);
		icon.setAttribute('class','icon-user');

	}


}
