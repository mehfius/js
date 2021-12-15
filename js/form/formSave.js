function formSave(codigo){

	var formfields    = document.querySelectorAll("window > form input,textarea");
  var data          = {};
  let error         = '';

	Object.entries(formfields).forEach(([key, value]) => {

    let id          = value.getAttribute('id');
    let required    = value.parentElement.getAttribute('required');
    let title       = value.getAttribute('title');
    let valueid     = value.getAttribute('valueid') || value.value ;
        //data[id] = [];
        data[id]=valueid;

        if(required=="true"){

          error+= (valueid)?"":"Campo "+title+" está vazio \n";

        }

	});

  if(error){
    
    swal("Erro",error, "error");

  }else{
    formSend(data,codigo); 

  }

}
