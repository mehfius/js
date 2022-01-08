
function removeAnexos(e,filename){

  const config  = JSON.parse(localStorage.config);
  const user    = JSON.parse(localStorage.user);

  (async () => {
    const rawResponse = await fetch(config.deletefile, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session: user.session, filename: filename})
  });

  const data = await rawResponse.json();
  
    rE(e);

  })();
			
}