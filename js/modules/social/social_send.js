const social_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const updated_data = await social_update(data);
    
    social_reload(updated_data);

  }

  send(data); 

}
