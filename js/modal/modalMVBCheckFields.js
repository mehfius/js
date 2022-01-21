
const modalMVBCheckFields = async function() {

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const rawResponse = await fetch(config.form, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session:user.session,modules:"users"})

  });

  const data = await rawResponse.json();

  let x = 0;
  let text = "";

  Object.entries(data.form.fields).forEach(([key, value]) => {

    if(value.value){

        x++;

    }else{

        text+="<li>"+value.label+"</li>";

    }

  });

  return text;

}