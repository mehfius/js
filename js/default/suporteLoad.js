function suporteLoad(){
  
  var suporte  = createObject('{"tag":"suporte"}');
  var icon     = createObject('{"tag":"icon","class":"icon-whatsapp"}');
  var text     = createObject('{"tag":"text","innerhtml":"Falar com atendente"}');

  suporte.onclick=(function(){

    window.open('https://api.whatsapp.com/send?phone=5531971720053&text=contato%20chat','_blank');

  });

  suporte.append(icon,text);



  if(document.getElementsByTagName("suporte").length==0 && getLocalStorage("config","id")=="1"){
    
    document.body.append(suporte);
    
  }
  
}