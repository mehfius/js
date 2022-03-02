function filterInput(e) {

  regAllow = eval(e.getAttribute('allow'));

  if (!String.fromCharCode(event.keyCode).match(regAllow)) event.returnValue=false;
  
}

