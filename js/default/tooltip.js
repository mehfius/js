function tooltip(element,label){
  
  var mobile=got(document,"body")[0].getAttribute('mobile');

  if(mobile==1){
   
    
  }else{
    
    var tooltip = createObject('{"tag":"tooltip","innerhtml":"'+label+'"}');
    var seta    = createObject('{"tag":"seta"}');

    tooltip.append(seta);

    element.append(tooltip);
    
  }
  
}