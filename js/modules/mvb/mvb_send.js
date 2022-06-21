const mvb_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  var fieldlabel="";

  Object.entries(data.fieldlabel).forEach(([key, value]) => {

      if(data.fieldlabel[key] && key!=='welcome'){
            fieldlabel+=''+value.label+'\n';
            fieldlabel+=value.value+'\n\n'; 
      }
    
  });

 data.fieldlabel=fieldlabel;
  
  const send = async function(data) {

    const updated_data = await mvb_update(data);
  
    /*     prontuarios_reload(updated_data); */
    
    document.body.removeAttribute("loading");
    
  }

  send(data); 
  
/*   document.body.removeAttribute("loading"); */
  
}
