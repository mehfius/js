const prontuarios_chat_select = async function(element) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s133chatv1'
  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function
 
  let id      = element.getAttribute('c');

  let post    = element.querySelector("chat post:last-child");
  
  let last_id = (post)?post.getAttribute("chat_id"):null;
  
  let param   = {'euuid':user.session,'prontuarios':id,'last_id':last_id}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();

}