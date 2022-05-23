
function pagesLoad(callback){
  
  var url = localStorage.getItem("supabaseurl")+"rest/v1/rpc/suites";
  
  fetch(url, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':localStorage.supabasekey},

  })
  
  .then(response => response.json())
  .then(data => callback(data))
  .catch(erro => console.error(erro));
    
}

function pagesMount(json){

  document.title = json.suiteinfo.label;
 
  var section = json.page.section;
  
  var pages   = document.createElement("pages"); 

  var header  = pagesMountHeader(json.page.section);
  
  var grid    = document.createElement("grid"); 

  //if(section.length>1){
    
      pages.appendChild(header);
    
 // }
  
  for(var x=0;x<section.length;x++){

     // pages.appendChild(pagesMountSection(section[(section.length-1)-x]));

  }
  


  pages.append(mountLogin());
 

  document.body.append(pages,grid);
 
}