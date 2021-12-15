function modal(){
  
  var customform 	= JSON.parse(localStorage.getItem("customform"));
  
  var body    = got(document,'body')[0];
  
  var div     = createObject('{"tag":"modal"}');
  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let p       = createObject('{"tag":"p","innerhtml":"Bem-vindo ao Doctor8, clique abaixo para começar"}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Acessar meus arquivos"}');
  
      button.onclick=(function(){document.querySelector('a[c="132"]').click();});
  
  header.append(title);
  content.append(p);
  content.append(button);
  div.append(header,content);
  
 if(customform!=undefined){
   
  
  for(var x=0;x<customform.length;x++){
  
     let content = createObject('{"tag":"content"}');
     let p       = createObject('{"tag":"p","innerhtml":"'+customform[x].label+'"}');
     let button  = createObject('{"tag":"button","type":"button","innerhtml":"'+customform[x].buttonlabel+'"}');
    
    content.append(p);
    content.append(button);
        
    div.append(content);
    //console.log(customform[x].content);
    
  }
 }
  body.append(div);
  
}

function modalFormCovid(){
  
  var content = createObject('{"tag":"content"}');
  var p       = createObject('{"tag":"p","innerhtml":"Clique abaixo caso você queira receber um tratamento para covid-19"}');
  var button  = createObject('{"tag":"button","type":"button","innerhtml":"Preencher formulário"}');
  
      button.onclick=(function(){formCustomEdit("formcovid")});
  
      content.append(p);
      content.append(button);
  
  return content;
  
}