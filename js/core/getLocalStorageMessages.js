function getLocalStorageMessages(key){
  
  var languages = JSON.parse(localStorage.languages);
  
 
  
  return eval("languages."+key);
  
}