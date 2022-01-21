const modal = async function(){

  var user      = JSON.parse(localStorage.user);

  var body    = got(document,'body')[0];
  
  var modal   = createObject('{"tag":"modal"}');

      modal.append(modalProntuarios());

    if(user.customforms){
     
          if(user.customforms.includes('mvb') && user.areas=='100') {

            modal.append(modalMVB());

          }

          modalUsers();

    }

  body.append(modal);
  
}