  function lazyload() {
        
    var config        = JSON.parse(localStorage.config);
    var user          = JSON.parse(localStorage.user);
    var modules       = document.body.getAttribute("modules");
    var rolled        = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height        = document.documentElement.scrollHeight;
    var tabela        = got(document,"tabela")[0];

    if ((rolled) > (height-10)) {
      
          window.onscroll=null;

            const selectsearch = document.querySelectorAll("selectsearch")

            let match = {};

            Object.entries(selectsearch).forEach(([key, value]) => {

              let i = value.getAttribute('id');
              let m = value.getAttribute('modules');

              if(i){

                //f.push(JSON.parse('{"'+m+'":'+i+'}'));
                match[m]=i;

              }

            });

          match["uuid"]=user.session;


          var limit = got(got(document,"tabela")[0],"item").length;


          document.body.setAttribute("loading","1");

          const loadLazyJson = async function(limit){
            
              const rawResponse = await fetch(config.urlmodules, {

                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify({
                  session: user.session, 
                  modules: modules, 
                  match: match, 
                  page: limit
                  
                  })

              });

              const data = await rawResponse.json();

              Object.entries(data).forEach(([key, value]) => {


                let item = createObject('{"tag":"item","c":"'+value.id+'"}');


                loadItem(item,value);
                tabela.appendChild(item);
                
              });

              document.body.setAttribute("loading","0");
              window.onscroll=lazyload;
          }

          loadLazyJson(limit);

    
    }

}
