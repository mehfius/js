function btFilter(){
  
  var button = createObject('{"tag":"button","innerhtml":"Filtro","action":"filter"}');
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-search");
    
        button.onclick=(function(){
          
         document.body.setAttribute("notification","0");
          
          if(document.body.getAttribute("filter")=="1"){
             
           
             document.body.setAttribute("filter","0");
            
          }else{
            
            document.body.setAttribute("filter","1");
       
          
          }
          
        });
  
  button.append(icon);
  
  return button;
  
}


  