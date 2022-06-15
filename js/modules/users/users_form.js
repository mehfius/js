const users_form = (modules,id,header) =>{

  gridShow();
  
  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f1'

  const eId               = (id)?id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;
  
  const send = async function() {
    
    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({euuid:user.session,eid:id})

    });

    const data = await rawResponse.json();
          data.id = id;
	               await formMountFields(modules,data);

    document.body.removeAttribute("loading");

  }

  send();

}