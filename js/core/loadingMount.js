function loadingMount(){
  
  let loading = createObject('{"tag":"loading"}');
  let icon    = createObject('{"tag":"icon","class":"icon-spinner9"}');
  //let label   = createObject('{"tag":"label","innerhtml":"Aguarde"}');
  
      loading.append(icon);
  
  return loading;
  
}