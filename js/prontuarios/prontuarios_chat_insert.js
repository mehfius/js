const prontuarios_chat_insert = async function(element) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u133chatv1'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function

  let label = element.parentElement.querySelector("input").value;
  let id    = element.parentElement.parentElement.parentElement.getAttribute("c");

  
  let param = {'euuid':user.session,'label':label,'prontuarios':id}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  
  
  return await response.json();
}