  const prontuarios_lazyload = async function() {
        
    var config        = JSON.parse(localStorage.config);
    var user          = JSON.parse(localStorage.user);
    
    var modules       = document.body.getAttribute("modules");
    var rolled        = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height        = document.documentElement.scrollHeight;
    var tabela        = document.querySelectorAll("tabela")[0];

    if ((rolled) > (height-10)) {
        
        window.onscroll = null;
  
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
  
        var offset = got(got(document,"tabela")[0],"item").length;
  
        document.body.setAttribute("loading","1");
  
        const data = await prontuarios_select(offset);
  
        Object.entries(data.page).forEach(([key, value]) => { 
          
          let item = createObject('{"tag":"item","c":"'+value.id+'"}');
          
          prontuarios_item(item,value);
          
          tabela.append(item);
          
        });
  
        document.body.setAttribute("loading","0");
        
       window.onscroll=prontuarios_lazyload;


    }

}