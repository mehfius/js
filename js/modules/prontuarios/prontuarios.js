const prontuarios = async function(data){
document.body.setAttribute("loading","1");
  let json    = (data==undefined)?await prontuarios_select(null):data;

  let view    = document.querySelector('view');

  if(view.querySelector('tabela')){

    var tabela  = view.querySelector('tabela');

    race(tabela);
    
  }else{
    
    var tabela  = createObject('{"tag":"tabela"}');
    
  }

  var modules = document.body.getAttribute("modules");

  Object.entries(json.page).forEach(([key, value]) => {

    let eId    = '{"tag":"item","c":"'+value.id+'"}';

    let item   = createObject(eId);

                 prontuarios_item(item,value);
                    
                 tabela.append(item);

  });

  view.append(tabela);
  
  document.body.setAttribute("loading","0");
  
  boxFilter();
  
  window.onscroll = prontuarios_lazyload;  

}