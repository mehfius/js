function eventListener(){
  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  document.addEventListener('scroll', function(e) {
    
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      console.log(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
    
  });
  
}