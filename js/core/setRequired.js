
function setRequired(list){
  
  var form = got(document,"form");

  var input    = got(form[0],"input");

  for (var x = 0; x < input.length;x++){
    
    input[x].removeAttribute('required');
    
  }
  
  var split = list.split(",");
  
  for(x=0;x<split.length;x++){
    
    goi(split[x]).setAttribute("required","required");
    
  }
  
}