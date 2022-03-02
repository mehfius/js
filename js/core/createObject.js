function jsonToObject(json){

  var field = document.createElement(json.tag);
  
  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
    case 'innerhtml':field.innerHTML=json.innerhtml;break;
    case 'tag':break;        
    case 'textnode':field.appendChild(document.createTextNode(json.textnode));break;
    case 'pattern':field.setAttribute(key,value);break;  
    case 'value':field.setAttribute("value",json.value);break;
    default:field.setAttribute(key,value);}  
    
  })
  
  return field;
 
}


const jsonToInput = function(json){

  var field = document.createElement("input");

  var div   = document.createElement("div");

  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
    case 'innerhtml':field.innerHTML=json.innerhtml;break;
    case 'tag':break;        
    case 'textnode':field.appendChild(document.createTextNode(json.textnode));break;
    case 'pattern':field.setAttribute(key,value);break;  
    case 'value':field.setAttribute("value",json.value);break;
    default:field.setAttribute(key,value);}  
    
  })

  if(json.id=="cep"){

    field.setAttribute('type','text');
    field.setAttribute('placeholder','CEP');
    field.setAttribute('type','text');
    field.setAttribute('pattern','[0-9]{8}');
    field.setAttribute('onkeypress','filterInput(this)');
    field.setAttribute('allow','/[0-9]/');

    div.setAttribute('loading','0');

    let icon = createObject('{"tag":"icon","class":"icon-spinner3"}');

    //div.append(icon);

    field.onkeyup=( async function(){

      let inputcep =  this.value.replace(/\D/g, '');

      if(inputcep.length >= 8){

        //loginInsetCheckCep(this.value)
        //loginInsertCepFillFields
        //let data  = await cep(this.value);

        //loginInsertCepFillFields(data);

        let url="https://brasilapi.com.br/api/cep/v1/"+this.value;

        const send = async function(data) {

          const rawResponse = await fetch(url, {

            method: 'GET',
            mode: 'cors',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
   
          });

          const post = await rawResponse.json();

          // console.log(post);
          loginInsertCepFillFields(post)

        }();

        //send(data); 

       

      }

    });
    
  }

  div.append(field)
  
  return div;
 
}

function createObject(text){

  var json = JSON.parse(text);

  var field = document.createElement(json.tag);
  
  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
    case 'innerhtml':field.innerHTML=json.innerhtml;break;
    case 'tag':break;        
    case 'textnode':field.appendChild(document.createTextNode(json.textnode));break;
    case 'pattern':field.setAttribute(key,decodeURI(value));break;  
    case 'value':field.setAttribute("value",json.value);break;
    default:field.setAttribute(key,value);}  
    
  })
  
  return field;
 
}

const inputObject = function(text){

  var json  = JSON.parse(text);

  var field = document.createElement("input");

  var div   = document.createElement("div");

  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
    case 'innerhtml':field.innerHTML=json.innerhtml;break;
    case 'tag':break;        
    case 'textnode':field.appendChild(document.createTextNode(json.textnode));break;
    case 'pattern':field.setAttribute(key,decodeURI(value));break;  
    case 'value':field.setAttribute("value",json.value);break;
    default:field.setAttribute(key,value);}  
    
  })

  if(json.id=="cep"){

    field.setAttribute('type','text');
    field.setAttribute('placeholder','CEP');
    field.setAttribute('type','text');
    field.setAttribute('pattern','[0-9]{8}');
    field.setAttribute('onkeypress','filterInput(this)');
    field.setAttribute('allow','/[0-9]/');

    div.setAttribute('loading','0');

    let icon = createObject('{"tag":"icon","class":"icon-spinner3"}');

    //div.append(icon);

    field.onkeyup=( async function(){

      let inputcep =  this.value.replace(/\D/g, '');

      if(inputcep.length >= 8){

        //loginInsetCheckCep(this.value)
        //loginInsertCepFillFields
        //let data  = await cep(this.value);

        //loginInsertCepFillFields(data);

        let url="https://brasilapi.com.br/api/cep/v1/"+this.value;

        const send = async function(data) {

          const rawResponse = await fetch(url, {

            method: 'GET',
            mode: 'cors',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
   
          });

          const post = await rawResponse.json();

          // console.log(post);
          loginInsertCepFillFields(post)

        }();

        //send(data); 

       

      }

    });
    
  }

  div.append(field)
  
  return div;
 
}