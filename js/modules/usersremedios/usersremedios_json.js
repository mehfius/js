const usersremedios_json = async function(id) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f4580485d482a9037af94f68af98adf23819cbdf4'
  const supabase_param    = '?modules=usersremedios&euuid=ec0e1e20-d264-4114-b16f-7b408d2e8dc6'
  const eId               = (id)?'&eid='+id:'&eid=0';
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function + supabase_param + eId;

  const response = await fetch(url, {

    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'apikey':supabasekey
    }

  });

  return await response.json();
  
}