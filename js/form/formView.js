function formView(areas,codigo){
	
  formMount(areas,codigo,function(){

    document.body.setAttribute("loading","0");

    let userinfo  = JSON.parse(localStorage.userinfo);

    let item      = gibc(codigo);
        item.setAttribute("open","1");

    localStorage.openedformcodigo=codigo;

    gridShow();

  });

}