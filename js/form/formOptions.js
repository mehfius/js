function formClose(){

	rE(got(document,"window"));
	got(document,"body")[0].setAttribute("open","0");

	gridHide();

	if(localStorage.openedformcodigo){
    
    var item  = gibc(localStorage.openedformcodigo);
    
    if(item!=undefined){
      
       	item.setAttribute("open","0");
      
    }

		localStorage.openedformcodigo="";
		
	}
	
}

function formNew(){

  document.body.setAttribute("loading","1");
  formEdit(gA(),null);

}

function gridShow(){
	
		var grade= got(document,"grade")[0];

		grade.setAttribute("class","show");

	
}

function gridHide(){
	
		var grade= got(document,"grade")[0];
	
		grade.setAttribute("class","hide");

}

function btClose(codigo){

	var btClose = cE("icon");
			btClose.setAttribute("class","icon-cross");
	//btClose.appendChild(cT("×"));
			btClose.setAttribute("action","close");
			btClose.onclick=(function(){

				formClose(codigo);

			});

	return btClose;
	
}

function btBack(codigo){

  var label = createObject('{"tag":"label","innerhtml":"voltar"}');
  var bt    = createObject('{"tag":"icon","class":"icon-arrow-left2","action":"back"}');


bt.append(label);
  
			bt.onclick=(function(){

				formClose(codigo);

			});

	return bt;
	
}

function btHeaderPrint(){

	var bt = cE("icon");
			
			bt.setAttribute("action","print");
			bt.setAttribute("class","icon-printer");
			bt.onclick=(function(){

					print();

			});

	return bt;
	
}

function btHeaderAttach(){
	
var attribute = [];
		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.multiple	= "";
		attribute.onchange	= "upload(this);";
	
var fileupload = cEA(attribute);
	
	var bt = cE("icon");
		
			bt.setAttribute("action","attach");
			bt.setAttribute("class","icon-attachment");
			bt.onclick=(function(){

				

			});

	bt.appendChild(fileupload);
	
	return bt;
	
}

function btHeaderSeeAttach(){

	var bt = cE("icon");
			
			bt.setAttribute("action","seeattach");
			bt.setAttribute("class","icon-images");
			bt.onclick=(function(){
					var anexos=document.getElementsByName('files')[0].value;
					window.open("/admin/json/jsonAnexosView.php?anexos="+anexos,"_blank");

			});

	return bt;
	
}

function btHeaderSave(codigo){

  var label = createObject('{"tag":"label","innerhtml":"Salvar"}');
  
	var bt = createObject('{"tag":"icon"}');
			
			bt.setAttribute("action","save");
			bt.setAttribute("class","icon-checkmark");

      bt.append(label);
  
			bt.onclick=(function(){
					formSave(codigo);


			});


/*   	var bt = createObject('{"tag":"button","innerhtml":"Salvar"}');

			bt.onclick=(function(){
					formSave(codigo);


			}); */

	return bt;
	
}

function btHeaderDelete(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","delete");
			bt.setAttribute("class","icon-bin");
			bt.onclick=(function(){
					formDelete(codigo);

			});

	return bt;
	
}

function btDelete(codigo){
	
		var btDelete = cB("excluir");
	
				btDelete.setAttribute("action","delete");
				btDelete.onclick=(function(){

					formDelete(codigo);

				});
	
	return btDelete;
}

function btSave(codigo){
	
		var button = cB("salvar");
				button.setAttribute("action","save");
				button.onclick=(function(){

					formSave(codigo);

				});
	
	return button;
		
}

function btPrint(){
	
	var button = cB("imprimir");
	
			button.setAttribute('action','print');
			button.onclick=(function(){

				print();

			});
	
	return button;
	
}

function btAttach(){
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		//attribute.anexos 	= object.getAttribute('value');
		attribute.gwidth 	= "900";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";

	var fileupload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "div";
		attribute.class 	= "fileupload";

	
	var divFileUpload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 		= "icon-attachment";
	
	var icon = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "button";
		attribute.text 		= "";
		attribute.action 	= "attach";
	
	var divFileUploadEnviar = cEA(attribute);
	
	divFileUploadEnviar.appendChild(icon);
	
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
	
	return divFileUpload;
	
}

function btSeeAttach(){

				var anexos=document.getElementsByName('files')[0].value;
	
			var attribute = [];

			attribute.tag 		= "button";
			attribute.text 		= "Visualizar anexos";
			attribute.onclick	= "window.open('/admin/json/jsonAnexosView.php?anexos="+anexos+"','_blank')";
			attribute.type		= "button";
			attribute.action	= "seeattach";
	
		var bt = cEA(attribute);
			return bt;

}