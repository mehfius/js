function loadItemView(item,array){
  
  var modules        = document.body.getAttribute("modules");
  
  var list = ["activated","deleted","premium"];

      list.forEach((atributo)=>{

        let valordotributo = array[atributo];
            item.setAttribute(atributo,valordotributo);

      });
  
  loadItemViewObject(item,array,"data");  
  loadItemViewObject(item,array,"codigo,label");
  
  if(modules=="formcovid"){
    
    item.onclick = (function(){formCustomView(modules,array.codigo)});
    
  }
  
  if(modules=="pacientes" || modules=="medicos"){

    var options        = createObject('{"tag":"options","class":"icon-cog"}');
        options.append(loadItemViewOptions(array));
    
    var figure         = createObject('{"tag":"figure"}');
    
    if(array.files!==undefined){

      figure.style.backgroundImage="url("+localStorage.getItem("imgp")+array.files[0].filename+"?key="+array.files[0].key;    

    }  
    
    var details        = createObject('{"tag":"detalhes"}');
    
    details.append(figure);
    
    loadItemViewObject(details,array,"contadorprontuarios,contadorprontuariosshare,email,endereco,bairro,cidade,estado,cep,nascimento,cpf,identidade,crm");

    item.append(details);
    item.append(options);

  }
  
}

function loadItemViewObject(parent,array,listname){
  
  var name = listname.split(",");
  
  for(var x=0;x<listname.length;x++){
    
    let valor = array[name[x]];
    
    if(valor!==undefined && valor!==""){
      
      if(name[x]=='data'){
        
         let date   = new Date(valor+" +0000");
             valor  = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'long'}).format(date);
        
      }
      
      let object = createObject('{"tag":"'+name[x]+'","innerhtml":"'+valor+'"}');
      
      object.onclick = (function(){
        
          this.setAttribute('old',this.innerHTML);

          if(this.tagName=='EMAIL' || this.tagName=='LABEL'){

            let codigo = this.parentElement.parentElement.getAttribute('c');
            this.setAttribute("contenteditable","true");

          }
       
      })
      
      object.onblur = (function(){
        
        let old = this.getAttribute('old');
        let value = this.innerHTML;
        let fields = this.tagName.toLowerCase();
        
        if(old!==value){
        
          if(confirm("Você tem certeza que deseja alterar? \nDe:\n "+old+" \n\nPara:\n "+value+"")){
            
            
            this.setAttribute('old',value);
           
              var xmlhttp;

              xmlhttp = new XMLHttpRequest();

              xmlhttp.onreadystatechange = function() {
                
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { 
                  
                   let response = xmlhttp.responseText;
                  document.body.setAttribute("loading","0");
                }
                
              }
              
              var url  = localStorage.getItem("url")+'/admin/json/jsonUpdateFields.php';

              document.body.setAttribute("loading","1");
            
              var data = new FormData();
            
              data.append("session",localStorage.session);    

              data.append('w', 'codigo|'+array.codigo);
              data.append('f', fields+'|'+value);
              data.append('t', gA());

              xmlhttp.open("POST", url, true);
              xmlhttp.send(data);

          }else{
            
            this.innerHTML=old;
            
          }
          
        }
        
      })
      
      parent.append(object); 

    }
    
  }
  
}

function loadLog(codigouser){
  
  
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    
    if(this.readyState == 4 && this.status == 200){
      
      let json=JSON.parse(this.responseText);
      
      createLogElements(json);
      
    }
  };

  xhttp.open("GET", localStorage.getItem("url")+"/admin/json/jsonUserLog.php?codigouser="+codigouser, true);
  xhttp.send();
  
}

function loadLogUrl(url){
  
  var array = [];

      array["/admin/json/jsonView.php"]="jsonview";
      array["/admin/json/jsonUpdate.php"]="jsonupdate";
      array["/admin/json/jsonViewFile.php?"]="jsonviewfile";
      array["/admin/json/index.php"]="index";
      array["/admin/json/jsonUpdate.php"]="jsonupdate";
      array["/admin/json/jsonAnexos.php"]="jsonanexos";
      array["/admin/json/jsonSelect.php"]="jsonselect";
  
  return array[url];
}

function createLogElements(json){

  console.log(json);

  let item = document.querySelector('item[c="'+codigouser+'"]');

  let log  = document.querySelector('item[c="'+codigouser+'"] > log');

  if(log==null){

    let log  = document.createElement("log");
    item.append(log);
    
  }

  for (var x=0;x<json.length;x++){

    console.log(json[x].key);

    if(json[x].log!==undefined){

      console.log("Numero de ações: "+json[x].log.length+"\n");

      for (var y=0;y<json[x].log.length;y++){

        let date      = new Date(json[x].log[y].data+" +0000");
        let data      = new Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'long'}).format(date);
        let param     = JSON.parse(json[x].log[y].param);
        let file      = loadLogUrl(json[x].log[y].file);

        let nottin = new Array('jsonselect');

        if(!(nottin.includes(file))){

          console.log(data+": File: ["+file+"] Modulos:["+param.modules+"] Area:["+param.area+"]");

        }

      }

    }else{

      console.log("Sem atividade");

    }

    console.log("- - - - - - - - -");

  }

  
}

function loadItemViewOptions(array){
  
  var div            = createObject('{"tag":"div"}');
  
  var btLog          = createObject('{"tag":"button","name":"log","innerhtml":"Log","type":"button","value":"0"}');
  
  var btDeleted0     = createObject('{"tag":"button","name":"deleted","innerhtml":"Deletar","type":"button","value":"1"}');
  var btActivated0   = createObject('{"tag":"button","name":"activated","innerhtml":"Desativar","type":"button","value":"0"}');
  var btPremium0     = createObject('{"tag":"button","name":"premium","innerhtml":"Desativar Premium","type":"button","value":"0"}');
  
  var btDeleted1     = createObject('{"tag":"button","name":"deleted","innerhtml":"Restaurar","type":"button","value":"0"}');
  var btActivated1   = createObject('{"tag":"button","name":"activated","innerhtml":"Ativar","type":"button","value":"1"}'); 
  var btPremium1     = createObject('{"tag":"button","name":"premium","innerhtml":"Ativar Premium","type":"button","value":"1"}'); 
  
  div.append(btDeleted0,btDeleted1,btActivated0,btActivated1,btPremium0,btPremium1,btLog);  
  div.append(btDeleted0,btDeleted1,btActivated0,btActivated1,btPremium0,btPremium1,btLog); 
  
  btLog.onclick=(function(){
    loadLog(array.codigo);
  });
  
  actionButton(btDeleted0,"deleted","pacientes",array);
  actionButton(btActivated0,"activated","pacientes",array);
  actionButton(btPremium0,"premium","pacientes",array);
  
  actionButton(btDeleted1,"deleted","pacientes",array);
  actionButton(btActivated1,"activated","pacientes",array);
  actionButton(btPremium1,"premium","pacientes",array);
  
  return div;
  
}