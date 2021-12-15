function grade(){
  	var grade   = cE('grade');
	grade.onclick=(function(){
		
		navClose();
		formClose();

	});
		document.body.appendChild(grade);
}