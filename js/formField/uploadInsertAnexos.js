
function insertAnexos(anexos,filename){

  const config  = JSON.parse(localStorage.config);
  const user    = JSON.parse(localStorage.user);


  (async () => {
    const rawResponse = await fetch(config.insertfile, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session: user.session, anexos: anexos, filename: filename})
    });

    const data = await rawResponse.json();

  })();

}