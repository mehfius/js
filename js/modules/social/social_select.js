const social_select = async function() {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s600'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function
  
  let param = {'euuid':user.session}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();
  
}