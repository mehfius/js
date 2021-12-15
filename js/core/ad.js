function ad(){
  
  var ad      = createObject('{"tag":"ad"}');
  
  var p      = createObject('{"tag":"p","innerhtml":"Publicidade"}');

  var figure      = createObject('{"tag":"figure"}');
  
  ad.append(p,figure);
  
  return ad;
  
}