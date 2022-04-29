function selectBoxSearch(string,modules){

  document.querySelector('selectbox').setAttribute("loading","1");

  const config = JSON.parse(localStorage.config);

  const url = (modules=='remedios')?localStorage.supabaseurl+'rest/v1/rpc/select_remedios':config.urlselect;

    const send = async function() {
      
      const rawResponse = await fetch(url, {

        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apikey':localStorage.supabasekey
        },
        body: JSON.stringify({modules:modules,string:string})

      });

      const data = await rawResponse.json();
      
      const list = document.querySelector('selectbox > list');
      
      race(list);

      Object.entries(data).forEach(([key, value]) => {

        list.append(selectBoxOpt(value,modules));

      });

      document.querySelector('selectbox').setAttribute("loading","0");
      
  }();

}