
function formCustomView(areas,codigo){
	
		formMountV2(areas,'view',codigo,function(){
			
			document.body.setAttribute("loading","0");
            
			gridShow();
			
		});

}