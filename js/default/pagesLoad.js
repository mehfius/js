
function pagesLoad(callback){
  
  var url = localStorage.getItem("url")+"/suites";
  
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
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