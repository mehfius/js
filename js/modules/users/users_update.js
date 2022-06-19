const users_update = async function(data) {
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u1'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {
    
    'euuid':user.session,
    'data':data

  }
 
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });

  return await response.json();
  
}