const usersremedios = async function(data){

  if(data==undefined){
    
    var json    = await usersremedios_json(null);
    
  }else{

    var json    = data; 
    
  }
  
  let view    = document.querySelector('view');

  if(view.querySelector('tabela')){

    var tabela  = view.querySelector('tabela');

    race(tabela);
    
  }else{
    
    var tabela  = createObject('{"tag":"tabela"}');
    
  }

  var modules = document.body.getAttribute("modules");

  Object.entries(json).forEach(([key, value]) => {

    let eId = '{"tag":"item","c":"'+value.id+'"}';

    let item   = createObject(eId);

    usersremedios_item(item,value);
        
    tabela.append(item);

  });

  view.append(tabela);
  
  document.body.setAttribute("loading","0");
  
  window.onscroll=null;  

}