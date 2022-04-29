const usersremedios_reload = (data) =>{

    var user    = JSON.parse(localStorage.user);
    var config  = JSON.parse(localStorage.config);

     if(data.length==1){
    
        const send = async function() {
        
          var item = document.querySelector("tabela item[c='"+data[0].id+"']");
        
          race(item);
          
          usersremedios_item(item,data[0]);
          
          document.body.removeAttribute("loading");
          
        }
        
        send();
       
    }else if(data.length>1){
       
      usersremedios(data);
       
    }else{
       
      console.log('sem dados');
      
    } 

}