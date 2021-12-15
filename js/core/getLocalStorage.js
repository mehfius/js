function getLocalStorage(key,object){

  var storage = JSON.parse(localStorage[key]);

  return storage[object];
  
}
