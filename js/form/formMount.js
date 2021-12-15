function formMount(modules,id,header){

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const send = async function() {
    
    const rawResponse = await fetch(config.form, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,id:id})

    });

    const data = await rawResponse.json();

	               await formMountFields(modules,data);

    document.body.removeAttribute("loading");

  }

  send();

 /*   const data = await rawResponse.json();

		await formMountFields(modules,data); */


}