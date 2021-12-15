function iconReceitaEspecial(element){

  var shortcut = createObject('{"tag":"shortcut"}');
  
  document.body.append(shortcut);
  
  var icon = cE("icon");
      icon.setAttribute("class","icon-file-text2");

     tooltip(icon,"Documentos");
  
  var config   = JSON.parse(localStorage.config);
  var shortcutstorage   = JSON.parse(config.shortcut);
  var links =shortcutstorage[0].links;

      icon.onclick=(function(){

          if(document.body.getAttribute("shortcut")=="1"){
            
            document.body.setAttribute("shortcut","0");
            
          }else{
            
            document.body.setAttribute("shortcut","1");
            
          }

      });

        element.appendChild(icon);

        let label = "";
        let url   = "";

        shortcut.append(createObject('{"tag":"label","innerhtml":"Receitas"}'));


        Object.entries(links[0].receituario).forEach(([key, value]) => {

            shortcut.append(shortcutItem(value.url,value.label));

        });

shortcut.append(createObject('{"tag":"label","innerhtml":"Protocolos"}'));

        Object.entries(links[1].protocolos).forEach(([key, value]) => {

            shortcut.append(shortcutItem(value.url,value.label));

        });


shortcut.append(createObject('{"tag":"label","innerhtml":"Outros"}'));

        Object.entries(links[2].outros).forEach(([key, value]) => {

            shortcut.append(shortcutItem(value.url,value.label));

        });
  
       
  
}

function shortcutItem(link,label){
 
  var div1      = createObject('{"tag":"div"}');
  var icon1     = createObject('{"tag":"icon","class":"icon-file-text2"}');
  var label1    = createObject('{"tag":"label","innerhtml":"'+label+'"}');
  
  div1.append(icon1,label1);
  
  div1.onclick=(function(){
    window.open(link);
  });
  
  return div1;

}


  