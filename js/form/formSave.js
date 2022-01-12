function formSave(codigo){

	var formfields    = document.querySelectorAll("window > form input,textarea");
  var data          = {};
  let error         = '';

	Object.entries(formfields).forEach(([key, value]) => {

    let id          = value.getAttribute('id');
    let required    = value.getAttribute('required');
    let label       = value.parentElement.querySelector("label").innerHTML;
    let title       = (value.getAttribute('title'))?value.getAttribute('title'):label;
    let valueid     = value.getAttribute('valueid') || value.value ;
       
        data[id]=valueid;

        if(required=="true"){

          if(!valueid){

            error+="Campo "+title+" está vazio \n";
            value.setAttribute("error","1");

          }else{
            value.removeAttritube("error");
          }
         
        }

	});

  if(error){
    
    swal("Erro",error, "error");

  }else{

    formSend(data,codigo); 

  }

}