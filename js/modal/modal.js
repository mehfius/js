const modal = function(){




  
  var user      = JSON.parse(localStorage.user);

  var body    = got(document,'body')[0];

  var modal   = createObject('{"tag":"modal"}');

      modal.append(modalProntuarios());

    //if(user.customforms){
     
          if(user.areas=='100') {

            /* modal.append(modalMVB()); */
            modal.append(modalRemedios());
            
          }

          modalUsers();

    //}

  body.append(modal);
  
}