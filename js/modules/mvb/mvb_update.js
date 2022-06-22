const mvb_update = async function(data) {
  console.log("loading");
  document.body.setAttribute("loading","1");
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u300v1'

  
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