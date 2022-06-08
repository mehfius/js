const prontuarios_reload = (data) =>{

    var user    = JSON.parse(localStorage.user);
    var config  = JSON.parse(localStorage.config);

var page = data.page;

  
     if(page.length==1){
    
        const send = async function() {
        
          var item = document.querySelector("tabela item[c='"+data.page[0].id+"']");
        
          race(item);
          
          prontuarios_item(item,page[0]);
          
          document.body.removeAttribute("loading");
          
        }
        
        send();
       
    }else if(page.length>1){
       
      prontuarios(data);
       
    }else{
       
      console.log('sem dados');
      
    } 

}