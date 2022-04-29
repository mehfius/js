function formSave(codigo){

  var modules       = document.querySelector("window").getAttribute("modules");
	var formfields    = document.querySelectorAll("window > form input,textarea");
  var data          = {};
  let error         = '';
  var fieldlabel    = {};

	Object.entries(formfields).forEach(([key, value]) => {

    let id          = value.getAttribute('id');
    let required    = value.getAttribute('required');
    let label       = value.parentElement.querySelector("label").innerHTML;
    let title       = (value.getAttribute('title'))?value.getAttribute('title'):label;
    let valueid     = value.getAttribute('valueid') || value.value;
    let type        = value.parentElement.getAttribute("type");
    let div         = value.parentElement;

    data[id]        = valueid;

    if(type=='checkbox' || type=='radio'){

      let optlabel = div.querySelectorAll("opt[checked='1'] > label");

      let textLabel = "";

	    Object.entries(optlabel).forEach(([k, v]) => {

        textLabel+=v.innerHTML;
        textLabel+=", ";

      });
      
      fieldlabel[id]={}
      fieldlabel[id].label  = label;
      fieldlabel[id].value = textLabel;

    }else if(type=='termos'){



    }else{

      fieldlabel[id]={}
      fieldlabel[id].label  = label;
      fieldlabel[id].value = valueid;

    }

    if(required=="true"){

      if(!valueid || valueid=="{}" || valueid==="false"){

        error+="Campo "+title+" está vazio \n";
        value.setAttribute("error","1");

      }else{
            
        value.setAttribute("error","0");
        
      }
      
    }

	});

  if(error){
    
    swal("Erro",error, "error");

  }else{

    if(modules=='mvb'){
    
      data["fieldlabel"] = fieldlabel;
      
      formSend(data,codigo);
      
    }else if(modules=='usersremedios'){
      
      usersremedios_send(data,codigo); 
      
    }else{

      formSend(data,codigo); 
      
    }

  }

}