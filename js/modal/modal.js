const modal = async function(){
  
  var body    = got(document,'body')[0];
  
  var modal   = createObject('{"tag":"modal"}');

      modal.append(modalProntuarios());

      modalUsers();


  body.append(modal);
  
}

