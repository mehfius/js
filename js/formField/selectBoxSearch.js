function selectBoxSearch(string,modules){

  document.querySelector('selectbox').setAttribute("loading","1");

  const config = JSON.parse(localStorage.config);

    const send = async function() {
      
      const rawResponse = await fetch(config.urlselect, {

        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
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