



function randomString() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 32; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function loadAjax(url) {
	
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			console.log(xmlhttp.responseText);

		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}

function loadXMLDoc(url) {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}


	var returnJson  = null;
	var frase       = Array();
		frase[0]   	= 'Houve uma falha, por favor tente novamente'; 
		frase[1]   	= 'Mensagem enviada com sucesso';
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			returnJson = eval('(' + xmlhttp.responseText + ')');

			// if(returnJson == 0){

			// } else if (returnJson == 1) {

			// }

			escreve(returnJson, frase[returnJson]);

			//if (json.sucesso == 1) {

				// return ReturnJson;

				// console.log(ReturnJson)
			//} else {

			//	alert(json.resposta);
			//	console.log(json.debuga);

			//}

			/*
          if(xmlhttp.responseText){
           
          }else{

          }*/

		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();



}

function isMobile() {


    if (sessionStorage.desktop) 
        return false;
    else if (localStorage.mobile) 
        return true;


    var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
    for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;


    return false;
}

function gibc(c){
  
  var tabela = got(document,"tabela")[0];
	var item = goap(tabela,"c",c)[0];
  
  return item;
  
}

function mountHeader(){
	
	if(!got(document,"header").length){

		var header  = cE("header");
				header.style.backgroundColor=localStorage.bgcolor;
		
		var a 		= cE("a");

		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(localStorage.systemname);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

		header.appendChild(a);

		got(document,"body")[0].appendChild(header);

	}
	
}


// Get system area
function gA(){return document.body.getAttribute('modules');}

// Get system modules label
function gM(name){
	
	var array   = JSON.parse(localStorage.anav);
	var nArray  = getValueArray(array,'name',name)[0];
  
  //console.log(nArray);
  
  var retorno = (nArray!=undefined)?nArray.title:"";

	return retorno;
	
}

// Get system modules info
function gMI(name,info){
	
	var array = JSON.parse(localStorage.anav);

	var nArray= getValueArray(array,'name',name)[0];

	return eval("nArray."+info);
	
}

// Loading 
function boxLoad(){
	
	var box 	= cE("box");
	var icon 	= cE("icon");

	box.appendChild(icon);

	return box;
	
}

function removeAcento(strToReplace) {

	var string = (strToReplace);

    str_acento 		= "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";

    str_sem_acento 	= "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    nova 			="";

	for (var i = 0; i < string.length; i++) {

		if (str_acento.indexOf(string.charAt(i)) != -1) {

        	nova+=str_sem_acento.substr(str_acento.search(string.substr(i,1)),1);
        	
	    } else {

	        nova+=string.substr(i,1);

	    }
	    
	}

    return nova;

}

function loadXMLDoc(url) {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}


	var returnJson  = null;
	var frase       = Array();
		frase[0]   	= 'Houve uma falha, por favor tente novamente'; 
		frase[1]   	= 'Mensagem enviada com sucesso';
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			returnJson = eval('(' + xmlhttp.responseText + ')');


			escreve(returnJson, frase[returnJson]);



		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();



}

function mountRanking(){

 var url 	= localStorage.getItem("url")+'/admin/json/jsonRanking.php?area='+gA();
  
	var ranking 	= got(document,"ranking")[0];
  race(ranking);
	var xmlhttp;

	
	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
			
				ranking.appendChild(mountRankingLine(json));
				
			}
			
		}
  
 	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  
}

function mountRankingLine(json){
  
  var div = cE("div");
  
  var line = cE("line");
  var label = cE("span");
  var count = cE("span");
  label.appendChild(cT("Colaborador"));
  count.appendChild(cT("Posts"));
  line.appendChild(label);
  line.appendChild(count);
  div.appendChild(line);  
  
  for(var x=0;x < json.length;x++){
    
    var line = cE("line");
    var label = cE("span");
    var count = cE("span");
    label.appendChild(cT(json[x].label));
    count.appendChild(cT(json[x].count));
    line.appendChild(label);
    line.appendChild(count);
    div.appendChild(line);
    
  }
  
  return div;
  
}

function adsense(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","width:320px;height:100px;float:left;border-top: 3px solid #fff;");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","2673791548");
  ins.setAttribute("class","adsbygoogle");
  
  return ins;
  
}

function adsenseVertical(){
  
  var ins = cE("ins");
  
  ins.setAttribute("style","display:inline-block;width:120px;height:600px");
  ins.setAttribute("data-ad-client","ca-pub-7384375628902072");
  ins.setAttribute("data-ad-slot","7149526584");
  ins.setAttribute("class","adsbygoogle");
  
  var adsensevertical = cE("adsensevertical");
  
  adsensevertical.appendChild(ins);
  
  return adsensevertical;  
  
  
} 



function resizeImage(file,cb){

// Get the image

	var oFReader = new FileReader();
	oFReader.readAsDataURL(file);
	
	oFReader.onload = function (oFREvent) {

		var temp = new Image();

		temp.src=oFREvent.target.result;

		temp.onload = function(){
		
			// callback(image);

			var image = convertCanvasToFile(convertImageToCanvas(temp));

			// Actions
			//document.getElementById("canvasHolder").appendChild(canvas);
			
 			//if(this.width!=this.height){
				
			//	alert("O sistema só permite foto quadrada. Recorte a foto e tente novamente.");
				
 		//	}else{
				
				cb(image);
				
		//	}

			
			
			
		};
		
	};

	// Converts image to canvas; returns new canvas element
	function convertImageToCanvas(image) {

		var canvas = document.createElement("canvas");

			var width  = 1280;
			var height = width * (image.height / image.width);

			canvas.height = height;
			canvas.width = width;

			canvas.getContext("2d").drawImage(image, 0, 0,width,height);

		return canvas;

	}

	// Converts canvas to an image
	function convertCanvasToImage(canvas) {

		var image = new Image();

		image.src = canvas.toDataURL("image/jpeg");

		return image;

	}

	function convertCanvasToFile(canvas) {
	
		var dataURL = canvas.toDataURL("image/jpeg");

		var blobBin = atob(dataURL.split(',')[1]);
		var array = [];

		for(var i = 0; i < blobBin.length; i++) {

			array.push(blobBin.charCodeAt(i));

		}

		var file=new Blob([new Uint8Array(array)], {type: 'jpg'});

		return file;
		
	}

}

function ad(){
  
  var ad      = createObject('{"tag":"ad"}');
  
  var p      = createObject('{"tag":"p","innerhtml":"Publicidade"}');

  var figure      = createObject('{"tag":"figure"}');
  
  ad.append(p,figure);
  
  return ad;
  
}

function checkCookies(){

    swal("A wild Pikachu appeared! What do you want to do?", {
    buttons: {
      cancel: "Run away!",
      catch: {
        text: "Throw Pokéball!",
        value: "catch",
      },
      defeat: true,
    },
  })
  .then((value) => {
    switch (value) {
  
      case "defeat":
        swal("Pikachu fainted! You gained 500 XP!");
        break;
  
      case "catch":
        swal("Gotcha!", "Pikachu was caught!", "success");
        break;
  
      default:
        swal("Got away safely!");
    }
  });

}

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

function datePTBR(string){
  
    var year = string.substring(0,4);
    var month = string.substring(5,7)-1;
    var day = string.substring(8,10);

    var hour = string.substring(11,13);
    var min = string.substring(14,16);
    var sec = string.substring(17,19);  
    var mil = 0;

    var data = new Date(year, month, day, hour, min, sec, mil);
  
  return data;
  
}

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

function filterInput(e) {

  regAllow = eval(e.getAttribute('allow'));

  if (!String.fromCharCode(event.keyCode).match(regAllow)) event.returnValue=false;
  
}



function getLocalStorage(key,object){

  var storage = JSON.parse(localStorage[key]);

  return storage[object];
  
}


function getLocalStorageMessages(key){
  
  var languages = JSON.parse(localStorage.languages);
  
 
  
  return eval("languages."+key);
  
}


function getModulesById(id){
		
		var groups = JSON.parse(localStorage.nav);
let modules = {}
    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.id==id){

            modules = value1;

          }

      });



    });

    return modules;
}


function getModulesByUrl(url){
		
		var groups = JSON.parse(localStorage.nav);
let modules = {}
    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.url==url){

            modules = value1;

          }

      });



    });

    return modules;
}

function grade(){
  	var grade   = cE('grade');
	/* grade.onclick=(function(){
		
		navClose();
		formClose();

	}); */
		document.body.appendChild(grade);
}


function getImageInfo(src,cb){
	
		var img = new Image();

						img.src = src
						
						img.onload = function(){

						var height = img.height;
						var width = img.width;
							
						// code here to use the dimensions
	
						cb();
					}
					


}
//get value of array
function getValueArray(array,field,value){
	
	var nArray= [];
	
	for(var x=0;x<array.length;x++){
		
		if (eval('array[x].'+field) == value){

			nArray.push(array[x]);
	
		}
		
	}

	return nArray;
}

// Get object by name
function gon(n){return document.getElementsByName(n);}

function gonFind(n){return document.getElementsByName(n).length;}

// Get object by id
function goi(id){return document.getElementById(id);}
function goiFind(id){return document.getElementById(id);}
function goiHtml(id,v){var html=goi(id);html.innerHTML+=v;}

// Get object by tag
function got(p,tag){
	
	if(p===0 || p=== null){
		
		var r = document.getElementsByTagName(tag);
		if(r.length){
			return document.getElementsByTagName(tag);
		}else{
			//debuga('[' + arguments.callee.name + '] Elemento "'+tag+'" não encontrado' );
			return false;
		}
		
	}else if(p===undefined){
		
		//debuga('[' + arguments.callee.name + '] Elemento "'+tag+'" não encontrado' );
		
		return false;
		
	}else{
		
		return p.getElementsByTagName(tag);
	}
	
}

function gotFind(tag){return document.getElementsByTagName(tag).length;}

function gotFindP(p,tag){return p.getElementsByTagName(tag).length;}

// Get url param, by position
function requestParam(n){var p = window.location.href.toString().split(window.location.host)[1];return p.split("/")[n];}

// Create element
function cE(tag) {return document.createElement(tag);}

// Create button
function cB(text) {var button = cE("button");sA(button,"type","button");button.appendChild(cT(text));return button;}

// Create element with attributes
function cEA(attributes){
	
	var object = cE(attributes.tag);
	
	object.innerHTML=(attributes.text!==undefined)?attributes.text:"";
	
	for (var key in attributes){if(key!="tag" && key!="text"){sA(object,key,attributes[key]);}}
	
	return object;
	
}

// Create Textnode
function cT(textnode){return document.createTextNode(textnode);}

// Set Atribute
function sA(e,a,v){if(e!== null){e.setAttribute(a,v);}else{debuga('Element error');}}

//Remove all child elements
function race(e){while (e.firstChild) {e.removeChild(e.firstChild);}}

function goap(p,a,v){
	
  var matchingElements = [];
  var allElements = p.getElementsByTagName('*');
	
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(a) === v){
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
		
    }
  }
	
  return matchingElements;
	
}

function goa(a,v){
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
	
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(a) === v){
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
		
    }
  }
	
  return matchingElements;
}

function rE(element){
	
	if(element===undefined){
		
		debuga('[' + arguments.callee.name + '] Elemento não encontrado' );
	}else if(element.length===0){
	}else if(element.length){

		while (element.length){

			debuga('[' + arguments.callee.name + '] Removido o elemento : ' + element[0].tagName+'>');
			element[0].parentNode.removeChild(element[0]);

		}

	}else{
    

		debuga('[' + arguments.callee.name + '] Removido o elemento : <' + element.tagName+'>');
		element.parentNode.removeChild(element);




	}	
	
}

function pO(tag) {

	element = document.getElementsByTagName(tag);

	if (element.length) {

		debuga("[" + arguments.callee.name + "] " + element.length + " Elements '" + tag + "' found");
		return element;

	} else {

		debuga("[" + arguments.callee.name + "] Element '" + tag + "' not found");
		return 0;
		
	}

}

function pegaObjetoPorAtributo(atributo){

	var matchingElements = [];
	var allElements = document.getElementsByTagName('*');
	
	for (var i = 0; i < allElements.length; i++)
	{
		if (allElements[i].getAttribute(atributo))
		{
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	
	return matchingElements;

}

function pegaObjetoPorAtributoP(p,atributo){

	var matchingElements = [];
	var allElements = p.getElementsByTagName('*');
	
	for (var i = 0; i < allElements.length; i++)
	{
		if (allElements[i].getAttribute(atributo))
		{
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	
	return matchingElements;

}

function debuga(mensagem){
  
  if(document.body.getAttribute("debuga")=="1"){
    
	  console.log("[" + arguments.callee.name + "]" + mensagem);
    
  }

}

function removeAcento(strToReplace) {

	var string = (strToReplace);

    str_acento 		= "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";



    str_sem_acento 	= "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    nova 			="";

	for (var i = 0; i < string.length; i++) {

		if (str_acento.indexOf(string.charAt(i)) != -1) {

        	nova+=str_sem_acento.substr(str_acento.search(string.substr(i,1)),1);
        	
	    } else {

	        nova+=string.substr(i,1);

	    }
	    
	}

    return nova;

}

const jsonToElement = function(json){



  var field = document.createElement("input");

  var div   = document.createElement("div");

  Object.entries(json).forEach(([key, value]) => {
    
    switch (key) {
      
      case 'innerhtml'  :field.innerHTML=json.innerhtml;break;
      case 'tag'        :break;        
      case 'textnode'   :field.appendChild(document.createTextNode(json.textnode));break;
      case 'pattern'    :field.setAttribute(key,value);break;  
      case 'value'      :field.setAttribute("value",json.value);break;
      
      default           :field.setAttribute(key,value);

    }  
    
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

        let url="https://brasilapi.com.br/api/cep/v1/"+this.value;

        const send = async function(data) {

          const rawResponse = await fetch(url, {

            method: 'GET',
            mode: 'cors',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
   
          });

          const post = await rawResponse.json();

          loginInsertCepFillFields(post)

        }();

      }

    });
    
  }

  div.append(field)
  
  return div;
 
}

  function lazyload() {
        
    var config        = JSON.parse(localStorage.config);
    var user          = JSON.parse(localStorage.user);
    var modules       = document.body.getAttribute("modules");
    var rolled        = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height        = document.documentElement.scrollHeight;
    var tabela        = got(document,"tabela")[0];

    if ((rolled) > (height-10)) {
      
      window.onscroll=null;

      const selectsearch = document.querySelectorAll("selectsearch")

      let match = {};

      Object.entries(selectsearch).forEach(([key, value]) => {

        let i = value.getAttribute('id');
        let m = value.getAttribute('modules');

        if(i){

          //f.push(JSON.parse('{"'+m+'":'+i+'}'));
          match[m]=i;

        }

      });

      match["uuid"]=user.session;

      var limit = got(got(document,"tabela")[0],"item").length;

      document.body.setAttribute("loading","1");

      const loadLazyJson = async function(limit){
        
          const rawResponse = await fetch(config.urlmodules, {

            method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            
            body: JSON.stringify({
              
              session: user.session, 
              modules: modules, 
              match: match, 
              page: limit
              
            })

          });

          const data = await rawResponse.json();

          Object.entries(data).forEach(([key, value]) => {

            let item = createObject('{"tag":"item","c":"'+value.id+'"}');


            loadItem(item,value);
            tabela.appendChild(item);
            
          });

          document.body.setAttribute("loading","0");
          window.onscroll=lazyload;
        
      }

      loadLazyJson(limit);

    }

}

function loadingMount(){
  
  let loading = createObject('{"tag":"loading"}');
  let icon    = createObject('{"tag":"icon","class":"icon-spinner9"}');
  //let label   = createObject('{"tag":"label","innerhtml":"Aguarde"}');
  
      loading.append(icon);
  
  return loading;
  
}



var MD5 = function (string) {

 


    function RotateLeft(lValue, iShiftBits) {


        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));


    }

 


    function AddUnsigned(lX,lY) {


        var lX4,lY4,lX8,lY8,lResult;


        lX8 = (lX & 0x80000000);


        lY8 = (lY & 0x80000000);


        lX4 = (lX & 0x40000000);


        lY4 = (lY & 0x40000000);


        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);


        if (lX4 & lY4) {


            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);


        }


        if (lX4 | lY4) {


            if (lResult & 0x40000000) {


                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);


            } else {


                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);


            }


        } else {


            return (lResult ^ lX8 ^ lY8);


        }


     }

 


     function F(x,y,z) { return (x & y) | ((~x) & z); }


     function G(x,y,z) { return (x & z) | (y & (~z)); }


     function H(x,y,z) { return (x ^ y ^ z); }


    function I(x,y,z) { return (y ^ (x | (~z))); }

 


    function FF(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function GG(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function HH(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function II(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function ConvertToWordArray(string) {


        var lWordCount;


        var lMessageLength = string.length;


        var lNumberOfWords_temp1=lMessageLength + 8;


        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;


        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;


        var lWordArray=Array(lNumberOfWords-1);


        var lBytePosition = 0;


        var lByteCount = 0;


        while ( lByteCount < lMessageLength ) {


            lWordCount = (lByteCount-(lByteCount % 4))/4;


            lBytePosition = (lByteCount % 4)*8;


            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));


            lByteCount++;


        }


        lWordCount = (lByteCount-(lByteCount % 4))/4;


        lBytePosition = (lByteCount % 4)*8;


        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);


        lWordArray[lNumberOfWords-2] = lMessageLength<<3;


        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;


        return lWordArray;


    };

 


    function WordToHex(lValue) {


        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;


        for (lCount = 0;lCount<=3;lCount++) {


            lByte = (lValue>>>(lCount*8)) & 255;


            WordToHexValue_temp = "0" + lByte.toString(16);


            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);


        }


        return WordToHexValue;


    };

 


    function Utf8Encode(string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";

 


        for (var n = 0; n < string.length; n++) {

 


            var c = string.charCodeAt(n);

 


            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }

 


        }

 


        return utftext;


    };

 


    var x=Array();


    var k,AA,BB,CC,DD,a,b,c,d;


    var S11=7, S12=12, S13=17, S14=22;


    var S21=5, S22=9 , S23=14, S24=20;


    var S31=4, S32=11, S33=16, S34=23;


    var S41=6, S42=10, S43=15, S44=21;

 


    string = Utf8Encode(string);

 


    x = ConvertToWordArray(string);

 


    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

 


    for (k=0;k<x.length;k+=16) {


        AA=a; BB=b; CC=c; DD=d;


        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);


        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);


        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);


        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);


        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);


        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);


        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);


        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);


        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);


        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);


        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);


        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);


        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);


        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);


        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);


        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);


        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);


        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);


        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);


        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);


        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);


        d=GG(d,a,b,c,x[k+10],S22,0x2441453);


        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);


        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);


        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);


        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);


        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);


        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);


        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);


        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);


        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);


        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);


        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);


        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);


        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);


        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);


        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);


        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);


        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);


        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);


        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);


        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);


        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);


        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);


        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);


        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);


        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);


        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);


        a=II(a,b,c,d,x[k+0], S41,0xF4292244);


        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);


        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);


        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);


        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);


        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);


        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);


        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);


        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);


        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);


        c=II(c,d,a,b,x[k+6], S43,0xA3014314);


        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);


        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);


        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);


        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);


        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);


        a=AddUnsigned(a,AA);


        b=AddUnsigned(b,BB);


        c=AddUnsigned(c,CC);


        d=AddUnsigned(d,DD);


    }

 


    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

 


    return temp.toLowerCase();

}


function setRequired(list){
  
  var form = got(document,"form");

  var input    = got(form[0],"input");

  for (var x = 0; x < input.length;x++){
    
    input[x].removeAttribute('required');
    
  }
  
  var split = list.split(",");
  
  for(x=0;x<split.length;x++){
    
    goi(split[x]).setAttribute("required","required");
    
  }
  
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function boxFilter(){
  
  const user   = JSON.parse(localStorage.user);
  const config = JSON.parse(localStorage.config);

  if(document.getElementsByTagName("boxfilter").length==0){
    
    var box           = document.createElement("boxfilter");
    var filter        = document.createElement("filter");
    var header        = document.createElement("header");
    var menu          = document.getElementsByTagName("menu")[0];
    
        box.appendChild(header);
        box.appendChild(filter);
    
        menu.append(box);
      
  }else{
    
    var box    = document.getElementsByTagName("boxfilter")[0];

    var filter = box.getElementsByTagName("filter")[0];
    
    race(filter);
    
    var header = box.getElementsByTagName("header")[0];
    
  }

  var modules = document.body.getAttribute("modules");

  if(modules=="prontuarios" && user.areas=='50'){

    filter.appendChild(mountFilterCustom("pacientes","Listagem de pacientes"));
    
    filter.appendChild(mountFilterCustom("category","Listagem de categorias"));

  }else if(modules=="pacientes"){

    filter.appendChild(filterSearch("pacientes","Listagem de pacientes"));

  }else if(modules=="eventos"){

    filter.appendChild(mountFilterCustom("category"));

  }else{
     filter.appendChild(mountFilterStandard());
  }
  
}

function mountFilterStandard(){

	var filter 	= cE("filter");
	var input   = cE("input");	
	var btSearch= cE("icon");
	    btSearch.setAttribute("class","icon-search");
	//sA(input,"class","hide");
	
	input.setAttribute("placeholder","Digite aqui para filtrar o resultados");
	
	btSearch.onclick = function() {input.focus();};
	
	input.onblur = function() {};
	
	input.onkeyup = function() {
		
		var item = got(got(document,"view")[0],"item");
			
		if(item.length){
			
			var string1 = removeAcento(this.value.toLowerCase());
			
			for(var x=0;x<item.length;x++){

				var nohtml =item[x].innerHTML.replace(/<(?:.|\n)*?>/gm, '');

				var f=removeAcento(nohtml.toLowerCase());

				if(f.indexOf(string1) >= 0){

					item[x].style.display="block";

				}else{

					item[x].style.display="none";

				}		

			}
		
		}
			
	};		
	
	filter.appendChild(input);
	filter.appendChild(btSearch);
	
	var header = got(document,"header")[0];
	
	//header.appendChild(filter);
	
	return filter;
}


function iconFilter(){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-search");
    
        icon.onclick=(function(){
          
        document.body.setAttribute("notification","0");

        if(document.body.getAttribute("filter")=="1"){

           document.body.setAttribute("filter","0");

        }else{

          document.body.setAttribute("filter","1");

        }
          
        });

  return icon;
  
}


function mountFilterCustom(modules,placeholder){

  const user   = JSON.parse(localStorage.user);
  const config = JSON.parse(localStorage.config);

  var div = createObject('{"tag":"selectsearch","modules":"'+modules+'"}');

  var label       = createObject('{"tag":"input"}'); 

      //div.setAttribute('class',modules);
/* 
      label.setAttribute("id","filterlabel"+modules);
      label.setAttribute("name","finder");
   */
		var labelfigure = cE("labelfigure");

		var icon		= cE("icon");
	
			icon.setAttribute("class","icon-cross");


  
		label.placeholder=placeholder;
	/* 	label.setAttribute("class","default"); */
		label.setAttribute("autocomplete","off");
	
		div.appendChild(labelfigure);
		div.appendChild(label);
		div.appendChild(icon);
  
		var select = cE("div");
				
    var url 	= config.url_filter;
    
      select.setAttribute("mouse","0");

      (async () => {

        const rawResponse = await fetch(config.url_filter, {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({modules: modules, session: user.session})
        });

        const json = await rawResponse.json();

        mountFilterOpt(json,select);

      })();

        /* mountFilterOpt(json,select); */
    
	select.onmouseover = function(){this.setAttribute("mouse","1");}
	
	select.onmouseout = function(){this.setAttribute("mouse","0");}
	
	label.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			label.value="";
		}
		
	};
  
	icon.onclick=(function(){
    
    var selectsearch = this.parentElement;
            
        selectsearch.removeAttribute("id");

        selectsearch.querySelector("input").setAttribute("placeholder",placeholder);

        selectsearch.querySelector("input").value="";

        selectsearch.querySelector("labelfigure").style="";
        tabelaLoadByFilter();
    
    });
  
	label.onfocus = function() {
		
		//if(attribute.value.length<50){
				var item = got(select,"opt");

				for(var x=0;x<item.length;x++){

								item[x].style.display="block";

				}
		//}
		
	};
	
  label.onkeyup = function() {

    var item = got(select,"opt");

    if(item.length && this.value.length>3){

      var string1 = removeAcento(this.value.toLowerCase());

            
      for(var x=0;x<item.length;x++){

        var ohtml=removeAcento(item[x].getElementsByTagName("label")[0].innerHTML.toLowerCase());

          if(ohtml.indexOf(string1) >= 0){			

            item[x].style.display="block";
            //item[x].parentElement.parentElement.setAttribute('open','1');
            
          }else{

            item[x].style.display="none";
            //item[x].parentElement.parentElement.setAttribute('open','0');
            
          }

      }

    }else{

      for(var x=0;x<item.length;x++){

        item[x].style.display="none";

      }

    }

  };
	
	div.appendChild(select);

/* 	div.appendChild(input); */

  return div;
  
}


function mountFilterOpt(json,select){

  for(var x=0;x<json.length;x++){

   /*    var input   = select.querySelector("[type='hidden']");
 */
      var codigo  = json[x].id;
      var alabel  = json[x].label;
    
      var count   = createObject('{"tag":"count","innerhtml":"'+json[x].count+'"}'); 
      var ecodigo = createObject('{"tag":"codigo","innerhtml":"'+json[x].id+'"}');

      var bt 			= cE("opt");

      var optlabel		= cE("label");

          optlabel.appendChild(cT(alabel));
    
      var optfigure 	= cE("figure");

      if(json[x].filename!==null){

          optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json[x].filename+"?key="+json[x].key+");");

      }

      bt.appendChild(optfigure);
      bt.append(ecodigo)
      bt.appendChild(optlabel);
      bt.append(count);
      bt.setAttribute("value",codigo);

      bt.onclick=(function(){

        let select = this.parentElement.parentElement;

        select.setAttribute("id",this.getAttribute("value"));

        let label       = select.querySelector("input");
        let labelfigure = select.querySelector("labelfigure");
        
        label.value=this.querySelector("label").innerHTML;

        label.setAttribute("placeholder",got(this,"label")[0].innerHTML);

        var style=got(this,"figure")[0].getAttribute("style");

        labelfigure.setAttribute("style",style);

        var selectsearch=this.parentElement;

        var opt = got(selectsearch,"opt");

        for (var x=0;x<opt.length;x++){

          opt[x].setAttribute("selected",false);
          opt[x].style.display="none";
          
        }

        this.setAttribute('selected',true);

        localStorage.filtropacientes=this.getAttribute("value");



   
        tabelaLoadByFilter();
      
    
        
      });

    select.appendChild(bt);

  } 

}

const filterSearch = (modules,placeholder) => {
  
    let div           = createObject('{"tag":"filtersearch","class":"'+modules+'"}');
    let label         = createObject('{"tag":"input","name":"finder","id":"filterlabel'+modules+'","placeholder":"'+placeholder+'","class":"default","autocomplete":"off"}');
    let labelfigure   = createObject('{"tag":"labelfigure"}');
    let icon          = createObject('{"tag":"icon","class":"icon-cross"}');
    let input         = createObject('{"tag":"input","filternamemodules":"'+modules+'","filters":"1","type":"hidden","id":"filtercodigo'+modules+'"}');
    let select        = createObject('{"tag":"div"}');

        div.append(labelfigure,label,icon);

        label.onkeyup = function() {labelkeyup(this);}

        select.onmouseover = function(){this.parentElement.setAttribute("mouse","1");}
        
        select.onmouseout = function(){this.parentElement.setAttribute("mouse","0");}
        
        label.onblur = function() {};
        
        label.onclick = function() {
            
            this.parentElement.setAttribute("mouse","1");
            
        };
    
        icon.onclick=(function(){
        
            var selectsearch=this.parentElement;

                div.innerHTML = '';
                document.getElementById("filterlabel"+modules).setAttribute("placeholder",placeholder);
                document.getElementById("filterlabel"+modules).value="";
                document.getElementById("filtercodigo"+modules).value="";
                
                selectsearch.getElementsByTagName("labelfigure")[0].style="";
                
                tabelaLoad("",function(tabela){
                
                    rE(got(document,'tabela'));
                    document.getElementsByTagName("view")[0].appendChild(tabela);
                
                });
        
        });
    
        label.onfocus = function() {
            

            
        };

        const optclick = (el) =>{

            input.value=el.codigo;
            label.value=el.label;
            label.setAttribute("placeholder",el.label);

            tabelaLoad(gA(),function(tabela){

                rE(got(document,'tabela'));
                document.getElementsByTagName("view")[0].appendChild(tabela);

            });
            
            div.parentElement.setAttribute("mouse","0");

        }

        const labelkeyup = (e) => {

            select = e.parentElement;
            div    = select.querySelector("div");

            if(e.value.length>3){

                select = e.parentElement;
                div    = select.querySelector("div")
                
                    let xmlhttp;

                    xmlhttp = new XMLHttpRequest();

                    xmlhttp.onreadystatechange = function() {

                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                            div.innerHTML = '';

                            let json = JSON.parse(xmlhttp.responseText);

                            for (var [key, el] of Object.entries(json)) {
 
                                let div         = select.querySelector("div")
                                let input       = select.querySelector("input[type='hidden']")

                                let opt         = createObject('{"tag":"opt"}'); 
                                let optlabel    = createObject('{"tag":"label","innerhtml":"'+el.label+'"}');
                                let optfigure   = createObject('{"tag":"figure"}');
                                let optcount    = createObject('{"tag":"count","innerhtml":"'+el.contador+'"}'); 
                                let optcodigo   = createObject('{"tag":"codigo","innerhtml":"'+el.codigo+'"}');
                                let optemail   = createObject('{"tag":"email","innerhtml":"'+el.email+'"}');

                                    opt.append(optfigure,optcodigo,optemail,optlabel,optcount);
        
                                    div.append(opt);

                                    if(el.filename!==null){

                                        optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+el.filename+"?key="+el.key+");");

                                    }

                                    opt.onclick=(function(){

                                        optclick(el);

                                    });

                            }

                        
                        }

                    }

                    let data = new FormData();
                    let url  = localStorage.getItem("url")+'/admin/json/jsonSelect.php';

                        data.append('modules', modules);
                        data.append('session', localStorage.session);
                        data.append('string', e.value);

                    xmlhttp.open("POST", url, true);
                    xmlhttp.send(data);

            }

    }

    
	div.append(select,input);


  return div;
  
}


function mountFilterStandard(){
	
	var filter 	= cE("filterstandard");
	var input   = cE("input");	
	var btSearch= cE("icon");
	    btSearch.setAttribute("class","icon-search");
	//sA(input,"class","hide");
	
	input.setAttribute("placeholder","Digite aqui para filtrar o resultados");
	
	btSearch.onclick = function() {input.focus();};
	
	input.onblur = function() {};
	
	input.onkeyup = function() {
		
		var item = got(got(document,"view")[0],"item");
			
		if(item.length){
			
			var string1 = removeAcento(this.value.toLowerCase());
			
			for(var x=0;x<item.length;x++){

				var nohtml =item[x].innerHTML.replace(/<(?:.|\n)*?>/gm, '');

				var f=removeAcento(nohtml.toLowerCase());

				if(f.indexOf(string1) >= 0){

					item[x].style.display="block";

				}else{

					item[x].style.display="none";

				}		

			}
		
		}
			
	};		
	
	filter.appendChild(input);
	filter.appendChild(btSearch);
	
	var header = got(document,"header")[0];
	
	//header.appendChild(filter);
	
	return filter;
}

function btFilter(){
  
  var button = createObject('{"tag":"button","action":"filter"}');
  var label  = createObject('{"tag":"label","innerhtml":"Filtro"}');
    var icon = cE("icon")
        icon.setAttribute("class","icon-search");
    
        button.onclick=(function(){
          
         document.body.setAttribute("notification","0");
          
          if(document.body.getAttribute("filter")=="1"){
             
             document.body.setAttribute("filter","0");
            
          }else{
            
            document.body.setAttribute("filter","1");
       
          
          }
          
        });
  button.append(icon,label);

  
  return button;
  
}


  


function btNew(){
	  
  var button = createObject('{"tag":"button","action":"new"}');
  var label  = createObject('{"tag":"label","innerhtml":"Novo"}');
  var icon   = createObject('{"tag":"icon"}');
      icon.setAttribute("class","icon-file-empty");

			button.onclick=(function(){

				formNew();

			});
  
	    button.append(icon,label);
  
	return button;
	
}

function iconNotification(){
  
    var iconNotifications= cE("icon");
  
        iconNotifications.setAttribute("class","icon-bell");
  
        tooltip(iconNotifications,"Notificações");
  
    var divNotification=cE("counternotification");
    
        iconNotifications.appendChild(divNotification);
 
        iconNotifications.onclick=(function(){
          
            setAllRead();
          
            document.body.setAttribute("filter","0");

            if(document.body.getAttribute("notification")=="1"){
              
              document.body.setAttribute("notification","0");
              
            }else{
              
              document.body.setAttribute("notification","1");
              
            }
        
        });
  
     return iconNotifications;

}

function loadNotifications(){
 
  var url    = localStorage.getItem("urljson")+"jsonNotifications.php";

  var data 	= new FormData();
      data.append('wasread', getNotification());
      data.append('session',localStorage.session);

  var xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);

              mountNotifications(json.notifications);

        }

      }
  
//   fetch(url, {
//     method: 'POST',
//     headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
//     body:  'wasread='+getNotification()
//   })
  
//   .then(response => response.json())
//   .then(data => mountNotifications(data.notifications))
//   .catch(erro => console.error(erro));

  xmlhttp.open("POST", url, true);
  xmlhttp.send(data);
  
}

function setAllRead(){
    
  var notifications = document.getElementsByTagName("notifications")[0];
  var div = notifications.getElementsByTagName("div");
  
  if(div!==undefined){

    for(var x=0;x<div.length;x++){

      div[x].setAttribute("r","1");

    }
    
  }
  
}

function getNotification(){
  
  var notifications = document.getElementsByTagName("notifications")[0];
  
  if(notifications!==undefined){
    
    var wasread = goap(notifications,"r","0");

    var param = "";
    
    for(var x=0;x<wasread.length;x++){
      
      param+=wasread[x].getAttribute("codigo");
      
      if(x!=wasread.length-1){

          param+=",";

       }
      
    }
    
    return param;
    
  }

}

function mountNotifications(data){

  var counternotification=document.getElementsByTagName("counternotification")[0];

      var notifications = document.getElementsByTagName("notifications")[0];
  
    if(notifications!==undefined){
      
      counternotification.innerHTML=goap(notifications,"r","0").length;
   
      
    }else{
      counternotification.innerHTML="0";
    }

      if(data.length>0){
        
          counternotification.style.display='block';
        
      }else{
        
          counternotification.style.display='none';
        
      }

      mountBoxNotification(data);

}

function mountBoxNotification(array){
  
  if(document.getElementsByTagName("boxnotification").length==0){
    
    var box           = document.createElement("boxnotification");
    var notifications = document.createElement("notifications");
    var header        = document.createElement("header");
    
        box.appendChild(header);
        box.appendChild(notifications);
    
        document.body.appendChild(box);
    
  }else{
    
    var box = document.getElementsByTagName("boxnotification")[0];
    var notifications = box.getElementsByTagName("notifications")[0];
    var header = box.getElementsByTagName("header")[0];
    
  }

  for (var x=0;x<array.length;x++){
   
    var data = datePTBR(array[x].data);
    
    var div = document.createElement("div");
        div.setAttribute('codigo',array[x].codigo);
        div.setAttribute('r',array[x].wasread);
    var figure = document.createElement("figure");
    
        var url="url('"+localStorage.getItem("imgp")+array[x].filename+"');";
    
        figure.setAttribute("style","background-image:"+url+";");
    
    var user = document.createElement("user");
        user.innerHTML = array[x].label;
    
    var action = document.createElement("action");
    
    
        action.innerHTML = language("ptbr",array[x].action);
    
    
    var modules = document.createElement("modules");
        //modules.innerHTML = array[x].modules;
    
    var date = document.createElement("date");
        date.innerHTML = data.toLocaleString();
 
    div.appendChild(figure);
    div.appendChild(user);
    div.appendChild(action);
    div.appendChild(modules);  
    div.appendChild(date);
    
    if(checkNotificationsRepeat(array[x].codigo)){
      
      notifications.appendChild(div);
      
    }
    
  }
  
}



function checkNotificationsRepeat(codigo){
  
  var div = document.getElementsByTagName("boxnotification")[0].getElementsByTagName("notifications")[0].getElementsByTagName("div");
  
  if(div!==undefined){
    //console.log(div.length);
    for(var x=0;x<div.length;x++){
      
      if(div[x].getAttribute("codigo")==codigo){
        return false
      }
      
    }
    
  }
  
  return true;
  
}

function language(c,word){
  
  var ptbr = [];
  var en = [];
  
      ptbr.share="compartilhou com você";
      en.share="shared with you";
  
      ptbr.agendamento="agendou uma consulta com você";
      en.agendamento="agendou uma consulta com você";
  
  return eval(c+"."+word);
  
}

function inputTypeNumber(element){
  
  var key = element.keyCode;
  
  if(key == 189 || key == 69){
    
    return false;
      
  }else{
    
    return true;
    
  }


}

function loginInsertShortcut(buttonid){
  
  document.body.setAttribute("openlogin","1");
  document.getElementById(buttonid).click();
  
}

function message(code){
 
  var a=[];
  
      a["1"]="Cadastro realizado com sucesso";

      a["501"]="Logado com sucesso";
      a["502"]="Senha inválida";
      a["503"]="Conta desativada";
      a["504"]="Email não encontrado ou senha incorreta";
      a["505"]="Campo password vazio";
      a["506"]="Erro deconhecido";
      a["507"]="Sistema em atualização";
      a["508"]="Campo usuário está vazio";

      a["602"]="Campo nome completo está vazio";
      a["603"]="Campo email está vazio";
      a["605"]="O campo cpf está vazio";
      a["606"]="Este cpf já foi cadastrado por outro usuário";
      a["607"]="Este email já foi cadastrado por outro usuário";
      a["620"]="Digite apenas números, 11 dígitos";
      
      a["301"]="As senhas não coincidem,repita a senha.";
      
  
      a["999"]="Erro no sistema";  
  
  return a[code];       

}




function mountOrder(){
  
  var order = cE("order");
  
  var lbOrder = cE('label');
  
  lbOrder.appendChild(cT('Ordenar por :'));
  lbOrder.setAttribute("class","order");
  
  var btOrderLabel=cB("nome");
  btOrderLabel.setAttribute("class","order");
  
  btOrderLabel.onclick=(function(){
    
		localStorage.order=1;
		viewLoad(gA());
			
	});
  
  var btOrderData=cB("data");
  
  btOrderData.setAttribute("class","order"); 
  
  btOrderData.onclick=(function(){
    
		localStorage.order=0;
		viewLoad(gA());
			
	});
  
  if(localStorage.order==1){
    btOrderLabel.setAttribute("selected","1");
  }else{
    btOrderData.setAttribute("selected","1");
  }
  
  order.appendChild(lbOrder);
  order.appendChild(btOrderLabel);
	order.appendChild(btOrderData);
  
  return order;
  
}




function mountPrint(array){
	
		var header = cE("printheader");
			
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(array.suites);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);
header.appendChild(logo);

		got(document,"body")[0].appendChild(header);
		
		
}

function navMount(){
  
  var user          = JSON.parse(localStorage.user);  
  var config        = JSON.parse(localStorage.config);
  var storagenav    = JSON.parse(localStorage.nav);

	if(gotFind("nav")){
    
		rE(got(document,"nav")[0]);

	}
	
	var html = '';

	var nav  	  = cE('nav');
	    nav.appendChild(profile());

	var body = got(document,'body')[0];

  Object.entries(storagenav).forEach(([key, value]) => {

    var span      = createObject('{"tag":"span","innerhtml":"'+value.label+'"}');

    nav.append(span);

    Object.entries(value.modules).forEach(([key1, value1]) => {

      let label     = value1.label;
      let url       = value1.url;
      let premium   = value1.premium;
      let id        = value1.id; 
      let attr      = value1.attributes; 
      let beta      = value1.beta; 
      
      var a         = createObject('{"tag":"a","innerhtml":"'+label+'","modules":"'+url+'","premium":"'+premium+'","c":"'+id+'"}');     

      a.onclick=(function(){

        document.body.setAttribute("loading","1");

        if(attr){
          
		      navClose();
          eval(attr.onclick);

        }else{

          resetHeaderOptions();
          //modulesLoadTitle(c);
          modulesOpen(url);
          navClose();
          gridHide();
        
          //mountRanking();

        }


      });
      if(beta==false || (beta==true && user.beta==true)){
        nav.append(a);
      }
      

    });

  }); 

  nav.append(createObject('{"tag":"span"}'));

	var a = cE('a');

	a.onclick=(function(){
 
    window.open('/','_self');

	});
	
	a.appendChild(cT('Sair')); 

	nav.appendChild(a);
	

nav.setAttribute('id','nav');


	
	body.appendChild(nav);

	
}

function navClose(){
	
		var nav=got(document,"nav")[0];
	
				nav.setAttribute('class','hide');
	
}

function loadNavSuite(){
  
  var navsuite = cE("navsuite");
  document.body.setAttribute("navsuite","0");
  
  document.body.appendChild(navsuite);

  
}


function pagesLoad(callback){
  
  var url = localStorage.getItem("supabaseurl")+"rest/v1/rpc/suites";
  
  fetch(url, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':localStorage.supabasekey},

  })
  
  .then(response => response.json())
  .then(data => callback(data))
  .catch(erro => console.error(erro));
    
}

function pagesMount(json){

  document.title = json.suiteinfo.label;
 
  var section = json.page.section;
  
  var pages   = document.createElement("pages"); 

  var header  = pagesMountHeader(json.page.section);
  
  var grid    = document.createElement("grid"); 

  //if(section.length>1){
    
      pages.appendChild(header);
    
 // }
  
  for(var x=0;x<section.length;x++){

     // pages.appendChild(pagesMountSection(section[(section.length-1)-x]));

  }
  


  pages.append(mountLogin());
 

  document.body.append(pages,grid);
 
}

      Number.prototype.pad = function(size, character = "0") {
        var s = String(this);
        while (s.length < (size || 2)) {s = character + s;}
        return s;
      }

function mountSection(){
	
	var section = cE("section");
	var view 		= cE("view");

	var ranking 	= cE("ranking");

	

	section.appendChild(view);
	
	got(document,"body")[0].appendChild(section);

}

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

function tooltip(element,label){
  
  var mobile=got(document,"body")[0].getAttribute('mobile');

  if(mobile==1){
   
    
  }else{
    
    var tooltip = createObject('{"tag":"tooltip","innerhtml":"'+label+'"}');
    var seta    = createObject('{"tag":"seta"}');

    tooltip.append(seta);

    element.append(tooltip);
    
  }
  
}

function tooltipmenu(element,innerhtml){
  
  var mobile=got(document,"body")[0].getAttribute('mobile');

  if(mobile==1){
   
    
  }else{
    
    let tooltip = element.getElementsByTagName("tooltipmenu")[0];
    
    if(tooltip==undefined){
      
      let tooltip = createObject('{"tag":"tooltipmenu","innerhtml":"'+innerhtml+'"}');
     // let seta    = createObject('{"tag":"seta"}');
      
         // tooltip.append(seta);
          element.append(tooltip);
      
    }
   
  }
  
}

/*
    Vanilla AutoComplete v0.1
    Copyright (c) 2019 Mauro Marssola
    GitHub: https://github.com/marssola/vanilla-calendar
    License: http://www.opensource.org/licenses/mit-license.php
*/
let VanillaCalendar = (function () {
    function VanillaCalendar(options) {
        function addEvent(el, type, handler){
            if (!el) return
            if (el.attachEvent) el.attachEvent('on' + type, handler)
            else el.addEventListener(type, handler);
        }
        function removeEvent(el, type, handler){
            if (!el) return
            if (el.detachEvent) el.detachEvent('on' + type, handler)
            else el.removeEventListener(type, handler);
        }
        let opts = {
            selector: null,
            datesFilter: false,
            pastDates: true,
            availableWeekDays: [],
            availableDates: [],
            date: new Date(),
            todaysDate: new Date(),
            button_prev: null,
            button_next: null,
            month: null,
            month_label: null,
            onSelect: (data, elem) => {},
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
        for (let k in options) if (opts.hasOwnProperty(k)) opts[k] = options[k]
        
        let element = document.querySelector(opts.selector)
        if (!element)
            return
        
        const getWeekDay = function (day) {
            return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][day]
        }
        
        const createDay = function (date) {
            let newDayElem = document.createElement('div')
            let dateElem = document.createElement('span')
            dateElem.innerHTML = date.getDate()
            newDayElem.className = 'vanilla-calendar-date'
            newDayElem.setAttribute('data-calendar-date', date)
            
            let available_week_day = opts.availableWeekDays.filter(f => f.day === date.getDay() || f.day === getWeekDay(date.getDay()))
            let available_date = opts.availableDates.filter(f => f.date === (date.getFullYear() + '-' + String(date.getMonth() + 1).padStart('2', 0) + '-' + String(date.getDate()).padStart('2', 0)))
            
            if (date.getDate() === 1) {
                newDayElem.style.marginLeft = ((date.getDay()) * 14.28) + '%'
            }
            if (opts.date.getTime() <= opts.todaysDate.getTime() - 1 && !opts.pastDates) {
                newDayElem.classList.add('vanilla-calendar-date--disabled')
            } else {
                if (opts.datesFilter) {
                    if (available_week_day.length) {
                        newDayElem.classList.add('vanilla-calendar-date--active')
                        newDayElem.setAttribute('data-calendar-data', JSON.stringify(available_week_day[0]))
                        newDayElem.setAttribute('data-calendar-status', 'active')
                    } else if (available_date.length) {
                        newDayElem.classList.add('vanilla-calendar-date--active')
                        newDayElem.setAttribute('data-calendar-data', JSON.stringify(available_date[0]))
                        newDayElem.setAttribute('data-calendar-status', 'active')
                    } else {
                        newDayElem.classList.add('vanilla-calendar-date--disabled')
                    }
                } else {
                    newDayElem.classList.add('vanilla-calendar-date--active')
                    newDayElem.setAttribute('data-calendar-status', 'active')
                }
            }
            if (date.toString() === opts.todaysDate.toString()) {
                newDayElem.classList.add('vanilla-calendar-date--today')
            }
            
            newDayElem.appendChild(dateElem)
            opts.month.appendChild(newDayElem)
        }
        
        const removeActiveClass = function () {
            document.querySelectorAll('.vanilla-calendar-date--selected').forEach(s => {
                s.classList.remove('vanilla-calendar-date--selected')
            })
        }
        
        const selectDate = function () {
            let activeDates = element.querySelectorAll('[data-calendar-status=active]')
            activeDates.forEach(date => {
                date.addEventListener('click', function () {
                    removeActiveClass()
                    let datas = this.dataset
                    let data = {}
                    if (datas.calendarDate)
                        data.date = datas.calendarDate
                    if (datas.calendarData)
                        data.data = JSON.parse(datas.calendarData)
                    opts.onSelect(data, this)
                    this.classList.add('vanilla-calendar-date--selected')
                })
            })
        }
        
        const createMonth = function () {
            clearCalendar()
            let currentMonth = opts.date.getMonth()
            while (opts.date.getMonth() === currentMonth) {
                createDay(opts.date)
                opts.date.setDate(opts.date.getDate() + 1)
            }
            
            opts.date.setDate(1)
            opts.date.setMonth(opts.date.getMonth() -1)
            opts.month_label.innerHTML = opts.months[opts.date.getMonth()] + ' ' + opts.date.getFullYear()
            selectDate()
        }
        
        const monthPrev = function () {
            opts.date.setMonth(opts.date.getMonth() - 1)
            createMonth()
        }
        
        const monthNext = function () {
            opts.date.setMonth(opts.date.getMonth() + 1)
            createMonth()
        }
        
        const clearCalendar = function () {
            opts.month.innerHTML = ''
        }
        
        const createCalendar = function () {
            document.querySelector(opts.selector).innerHTML = `
            <div class="vanilla-calendar-header">
                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="previous"><svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg></button>
                <div class="vanilla-calendar-header__label" data-calendar-label="month"></div>
                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="next"><svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>
            </div>
            <div class="vanilla-calendar-week"></div>
            <div class="vanilla-calendar-body" data-calendar-area="month"></div>
            `
        }
        const setWeekDayHeader = function () {
            document.querySelector(`${opts.selector} .vanilla-calendar-week`).innerHTML = `
                <span>${opts.shortWeekday[0]}</span>
                <span>${opts.shortWeekday[1]}</span>
                <span>${opts.shortWeekday[2]}</span>
                <span>${opts.shortWeekday[3]}</span>
                <span>${opts.shortWeekday[4]}</span>
                <span>${opts.shortWeekday[5]}</span>
                <span>${opts.shortWeekday[6]}</span>
            `
        }
        
        this.init = function () {
            createCalendar()
            opts.button_prev = document.querySelector(opts.selector + ' [data-calendar-toggle=previous]')
            opts.button_next = document.querySelector(opts.selector + ' [data-calendar-toggle=next]')
            opts.month = document.querySelector(opts.selector + ' [data-calendar-area=month]')
            opts.month_label = document.querySelector(opts.selector + ' [data-calendar-label=month]')
            
            opts.date.setDate(1)
            createMonth()
            setWeekDayHeader()
            addEvent(opts.button_prev, 'click', monthPrev)
            addEvent(opts.button_next, 'click', monthNext)
        }
        
        this.destroy = function () {
            removeEvent(opts.button_prev, 'click', monthPrev)
            removeEvent(opts.button_next, 'click', monthNext)
            clearCalendar()
            document.querySelector(opts.selector).innerHTML = ''
        }
        
        this.reset = function () {
            this.destroy()
            this.init()
        }
        
        this.set = function (options) {
            for (let k in options)
                if (opts.hasOwnProperty(k))
                    opts[k] = options[k]
            createMonth()
//             this.reset()
        }
        
        this.init()
    }
    return VanillaCalendar
})()

window.VanillaCalendar = VanillaCalendar


function goToMedicLogin(){
  
  document.body.setAttribute("openlogin","1");
  document.getElementById('btInsertMedico').click();
  
}

function goToPacienteLogin(){
  
  document.body.setAttribute("openlogin","1");
  document.getElementById('btInsertPaciente').click();
  window.scrollTo( 0, 0 );
}

function iconCalendar(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-calendar");
  
        tooltip(icon,"Agenda");
  
    var userinfo    = JSON.parse(localStorage.userinfo);
    var systeminfo  = JSON.parse(localStorage.systeminfo);
  
    icon.onclick=(function(){

        if(document.body.getAttribute("calendar")=="1"){

          document.body.setAttribute("calendar","0");

        }else{

          document.body.setAttribute("calendar","1");

        }

    });

  element.appendChild(icon);
  
}

function iconFacedoctor(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
        tooltip(icon,"Conheça o Facedoctors");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
     
           window.open("https://facedoctors.com.br/","_blank");
          
        });

  element.appendChild(icon);
  
}

function iconPlanilha(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-table2");
  tooltip(icon,"Solicitação de contato");
  
    var config = JSON.parse(localStorage.config);

        icon.onclick=(function(){
          
          window.open(config.planilha,"_blank");
          
        });

  element.appendChild(icon);
  
}


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


  


function formMountAutoStart(area,cb){
 
	var url 	= localStorage.getItem("url")+'/json/'+area+'/editar/null';

  var view 	= got(document,"view")[0];
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
     
				
			  cb(json);
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  
}


function btOptionsBtShare(){

	var bt = cE("icon");
			
			bt.setAttribute("action","share");
			bt.setAttribute("class","icon-share2");
			bt.onclick=(function(){

			});
  
	return bt;
	
}


function formCustomEdit(areas){
	
		formMount(areas,null,function(){
			
			document.body.setAttribute("loading","0");
      
      //var userinfo  = JSON.parse(localStorage.userinfo);
      

			
			gridShow();
			
		});

}


function formCustomView(areas,codigo){
	
		formMountV2(areas,'view',codigo,function(){
			
			document.body.setAttribute("loading","0");
            
			gridShow();
			
		});

}


function formDelete(codigo){
	
  const modules     = document.querySelector("window").getAttribute("modules");
  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  const url         = config.formdelete;

  document.body.setAttribute("loading","1");



  const send = async function() {

    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,id:codigo})

    });

    const post = await rawResponse.json();

    document.body.setAttribute("loading","0");
        let item = document.querySelector("item[c='"+codigo+"']");
     rE(item);
    
  }
  
	if (confirm("Tem certeza que deseja excluir?") === true) {



    formClose();
  
    send();
    
 
    
  }

}





function formEdit(modules,id){
  
  gridShow();
  
  if(modules=='social'){
    
    social_form(modules,id);
    
  }else if(modules=='prontuarios'){
    
    prontuarios_form(modules,id);
    
  }else if(modules=='users'){
    
    users_form(modules,id);
    
  }else if(modules=='mvb'){
    
    mvb_form(modules,id);
    
  }else{
    formMount(modules,id);
  }
  


    /* 
			document.body.setAttribute("loading","0");
      
      var user  = JSON.parse(localStorage.user);
      
			if(id==user.id && (modules=="users" || modules=="formcovid")){
        //Edicao do proprio Profile
      }else{

        var item  = gibc(id);

        item.setAttribute("open","1");
			  localStorage.openedformcodigo=id;
        
      }

			gridShow();
			 */

}

function formMount(modules,id,header){

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const send = async function() {
    
    const rawResponse = await fetch(config.form, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,id:id})

    });

    const data = await rawResponse.json();

	               await formMountFields(modules,data);

    document.body.removeAttribute("loading");

  }

  send();

}

function formMountFields(modules,pagedata){

	var user     = JSON.parse(localStorage.user);
	var config   = JSON.parse(localStorage.config);

	var window   = createObject('{"tag":"window","modules":"'+modules+'"}');
	var form     = createObject('{"tag":"form","autocomplete":"off"}');
	var header   = createObject('{"tag":"header"}');
	var label    = createObject('{"tag":"label"}');

	header.append(btBack(pagedata.id),label);

	window.append(header);

  header.append(btHeaderSave(pagedata.id));

	if(pagedata.id){

    label.appendChild(cT("Editando "+modules));
    header.appendChild(btHeaderPrint());
    
		got(document,"body")[0].setAttribute("open","1");

    var jsonform = pagedata.form.fields;

    header.append(btHeaderDelete(pagedata.id));
 

	}else{

		window.setAttribute("tutorial","1");
		label.appendChild(cT("Novo "+modules));
		
		var jsonform = pagedata.form.fields;

	}  



	Object.entries(jsonform).forEach(([key, value]) => {

    form.append(fields(value,header,pagedata));	
	
	});
  
	window.append(form);
	
	document.body.appendChild(window);
  
}  

        


function formClose(){

	rE(got(document,"window"));
	got(document,"body")[0].setAttribute("open","0");

	gridHide();

	if(localStorage.openedformcodigo){
    
    var item  = gibc(localStorage.openedformcodigo);
    
    if(item!=undefined){
      
       	item.setAttribute("open","0");
      
    }

		localStorage.openedformcodigo="";
		
	}
	
}

function formNew(){

  document.body.setAttribute("loading","1");
  formEdit(gA(),null);

}

function gridShow(){
	
		var grade= got(document,"grade")[0];

		grade.setAttribute("class","show");

	
}

function gridHide(){
	
		var grade= got(document,"grade")[0];
	
		grade.setAttribute("class","hide");

}

function btClose(codigo){

	var btClose = cE("icon");
			btClose.setAttribute("class","icon-cross");
	//btClose.appendChild(cT("×"));
			btClose.setAttribute("action","close");
			btClose.onclick=(function(){

				formClose(codigo);

			});

	return btClose;
	
}

function btBack(codigo){

  var label = createObject('{"tag":"label","innerhtml":"voltar"}');
  var bt    = createObject('{"tag":"icon","class":"icon-arrow-left2","action":"back"}');


bt.append(label);
  
			bt.onclick=(function(){

				formClose(codigo);

			});

	return bt;
	
}

function btHeaderPrint(){

	var bt = cE("icon");
			
			bt.setAttribute("action","print");
			bt.setAttribute("class","icon-printer");
			bt.onclick=(function(){

					print();

			});

	return bt;
	
}

function btHeaderAttach(){
	
var attribute = [];
		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.multiple	= "";
		attribute.onchange	= "upload(this);";
	
var fileupload = cEA(attribute);
	
	var bt = cE("icon");
		
			bt.setAttribute("action","attach");
			bt.setAttribute("class","icon-attachment");
			bt.onclick=(function(){

				

			});

	bt.appendChild(fileupload);
	
	return bt;
	
}

function btHeaderSeeAttach(){

	var bt = cE("icon");
			
			bt.setAttribute("action","seeattach");
			bt.setAttribute("class","icon-images");
			bt.onclick=(function(){
					var anexos=document.getElementsByName('files')[0].value;
					window.open("/admin/json/jsonAnexosView.php?anexos="+anexos,"_blank");

			});

	return bt;
	
}

function btHeaderSave(codigo){

  var label = createObject('{"tag":"label","innerhtml":"Salvar"}');
  
	var bt = createObject('{"tag":"icon"}');
			
			bt.setAttribute("action","save");
			bt.setAttribute("class","icon-checkmark");

      bt.append(label);
  
			bt.onclick=(function(){
					formSave(codigo);


			});


/*   	var bt = createObject('{"tag":"button","innerhtml":"Salvar"}');

			bt.onclick=(function(){
					formSave(codigo);


			}); */

	return bt;
	
}

function btHeaderDelete(codigo){

	var bt = cE("icon");
			
			bt.setAttribute("action","delete");
			bt.setAttribute("class","icon-bin");
			bt.onclick=(function(){
					formDelete(codigo);

			});

	return bt;
	
}

function btDelete(codigo){
	
		var btDelete = cB("excluir");
	
				btDelete.setAttribute("action","delete");
				btDelete.onclick=(function(){

					formDelete(codigo);

				});
	
	return btDelete;
}

function btSave(codigo){
	
		var button = cB("salvar");
				button.setAttribute("action","save");
				button.onclick=(function(){

					formSave(codigo);

				});
	
	return button;
		
}

function btPrint(){
	
	var button = cB("imprimir");
	
			button.setAttribute('action','print');
			button.onclick=(function(){

				print();

			});
	
	return button;
	
}

function btAttach(){
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		//attribute.anexos 	= object.getAttribute('value');
		attribute.gwidth 	= "900";
		attribute.multiple	= "";
		attribute.onchange	= "formUpload(this);";

	var fileupload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "div";
		attribute.class 	= "fileupload";

	
	var divFileUpload = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 		= "icon-attachment";
	
	var icon = cEA(attribute);
	
	var attribute = [];

		attribute.tag 		= "button";
		attribute.text 		= "";
		attribute.action 	= "attach";
	
	var divFileUploadEnviar = cEA(attribute);
	
	divFileUploadEnviar.appendChild(icon);
	
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
	
	return divFileUpload;
	
}

function btSeeAttach(){

				var anexos=document.getElementsByName('files')[0].value;
	
			var attribute = [];

			attribute.tag 		= "button";
			attribute.text 		= "Visualizar anexos";
			attribute.onclick	= "window.open('/admin/json/jsonAnexosView.php?anexos="+anexos+"','_blank')";
			attribute.type		= "button";
			attribute.action	= "seeattach";
	
		var bt = cEA(attribute);
			return bt;

}

function formSave(codigo){

  var modules       = document.querySelector("window").getAttribute("modules");
	var formfields    = document.querySelectorAll("window > form input,textarea");
  var data          = {};
  let error         = '';
  var fieldlabel    = {};

	Object.entries(formfields).forEach(([key, value]) => {

    let id          = value.getAttribute('id');
    let required    = value.getAttribute('required');
    let label       = value.parentElement.querySelector("label").innerHTML;
    let title       = (value.getAttribute('title'))?value.getAttribute('title'):label;
    let valueid     = value.getAttribute('valueid') || value.value;
    let type        = value.parentElement.getAttribute("type");
    let div         = value.parentElement;

    data[id]        = valueid;

    if(type=='checkbox' || type=='radio'){

      let optlabel = div.querySelectorAll("opt[checked='1'] > label");

      let textLabel = "";

	    Object.entries(optlabel).forEach(([k, v]) => {

        textLabel+=v.innerHTML;
        textLabel+=", ";

      });
      
      fieldlabel[id]={}
      fieldlabel[id].label  = label;
      fieldlabel[id].value = textLabel;

    }else if(type=='termos'){



    }else{

      fieldlabel[id]={}
      fieldlabel[id].label  = label;
      fieldlabel[id].value = valueid;

    }

    if(required=="true"){

      if(!valueid || valueid=="{}" || valueid==="false"){

        error+="Campo "+title+" está vazio \n";
        value.setAttribute("error","1");

      }else{
            
        value.setAttribute("error","0");
        
      }
      
    }

	});

  if(error){
    
    swal("Erro",error, "error");

  }else{

    if(modules=='mvb'){
    
      data["fieldlabel"] = fieldlabel;
      
      mvb_send(data,codigo);
      
    }else if(modules=='prontuarios'){
    
      prontuarios_send(data,codigo);
      
    }else if(modules=='usersremedios'){
      
      usersremedios_send(data,codigo); 
      
    }else if(modules=='social'){
      
      social_send(data,codigo); 
      
    }else if(modules=='users'){
      
      users_send(data,codigo); 
      
    }else{

      formSend(data,codigo); 
      
    }

  }

}

function formSend(data,id){

  const modules     = document.querySelector("window").getAttribute("modules");
  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  const url         = (modules=="mvb")?config.formsavemvb:config.formsave;

  data.modules      = modules;
  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules:modules,data:data})

    });

    const post = await rawResponse.json();

   
    if(post.status==1){
      
      switch(modules) {
      
        case "prontuarios":    return prontuarios_reload(id);
        case "usersremedios":  return usersremedios_reload(id);
        
        default:return document.body.setAttribute("loading","0");
      
      } 
      
    }else{
      
      console.log('falhou');
      
    }


  }

  send(data); 

}

function itemReload(id){

  var user    = JSON.parse(localStorage.user);
  var config  = JSON.parse(localStorage.config);

  if(id){
    
      const send = async function() {

        const rawResponse = await fetch(config.urlmodules, {
        
              method: 'POST',
              headers: {'Accept': 'application/json','Content-Type': 'application/json'},
              body: JSON.stringify({session: user.session, modules: gA(),id:id})
        
            });
        
            const data = await rawResponse.json();
        
                  var item = document.querySelector("tabela item[c='"+id+"']");
        
                  race(item);
                  loadItem(item,data[0]);
        
        
        document.body.removeAttribute("loading");
        
      }

      send();

  }else{

    modulesOpen(gA());

  }

}

function formView(areas,codigo){
	
  formMount(areas,codigo,function(){

    document.body.setAttribute("loading","0");

    let userinfo  = JSON.parse(localStorage.userinfo);

    let item      = gibc(codigo);
        item.setAttribute("open","1");

    localStorage.openedformcodigo=codigo;

    gridShow();

  });

}

const fieldCep = function(data){
/* 
  const send = async function(data) {

    const config = JSON.parse(localStorage.config);

    const rawResponse = await fetch(config.url_fetchcep, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({cep:'31170660'})

    });

  }

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

      object.onkeypress = (function(){

        console.log("teste"+this.value);
        
      });

  div.appendChild(label);

  label.innerHTML=data.label;
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div; */
  
}

const checkbox = function(data){
  
/*   console.log(JSON.stringify(data.value)); */
  
  var value       = (data.value!==undefined && data.value!==null)?JSON.stringify(data.value):"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.append(label);

  if(data.attributes){

    if(data.attributes.options){

      var options = data.attributes.options

      Object.entries(options).forEach(([k, v]) => {

        /* let replaced = (value)?value.replace('{', '[').replace('}', ']'):"[]"; */

        let arrayValue = (data.value)?data.value:"";
        
        let checked   = (arrayValue.indexOf(parseInt(k))>-1)?"1":"0";

        var opt       = createObject('{"tag":"opt","value":"'+k+'","checked":"'+checked+'"}')

        var label     = createObject('{"tag":"label","innerhtml":"'+v+'"}')

        var icon      = createObject('{"tag":"icon","class":"icon-"}');

            opt.append(icon,label);
            div.append(opt);

            opt.onclick=(function(){

              let input = this.parentElement.querySelector("input");

              let text  = input.value;

              let array = (text)?JSON.parse(input.value):[];
  
                  value = parseInt(this.getAttribute("value"));

                 

              let find  = (array)?array.indexOf(value):-1;

              if(find>-1){

                array.splice(find, 1);
                opt.setAttribute("checked","0");

              }else{

                array.push(parseInt(this.getAttribute("value")));
                opt.setAttribute("checked","1");

              } 
              
              
              
              input.value=(array.length)?"["+array+"]":""; 

          

            })

      });

    }

  }
      
  label.innerHTML=data.label;

	object.setAttribute("type","hidden");
	object.setAttribute("class","default");
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function date(data){
  
  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'","type":"date"}');

  div.appendChild(label);


	object.setAttribute("autocomplete","new-password");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.appendChild(object);
  
  return div;
}

function fieldTooltip(div,data){

  if(data){

    var tooltip   = createObject('{"tag":"tooltipv2","innerhtml":"'+data.title+'"}');

    var icon   = createObject('{"tag":"tooltipv2icon","class":"icon-question"}');

        icon.append(tooltip);

    div.appendChild(icon); 
  }
  
}



function fields(data,header,pagedata){

  const e = (function(){
  
    switch(data.type) {

    case "textarea":    return textarea(data);
    case "selectajax":  return selectAjax(data,header);
    case "date":        return date(data);
    case "fileupload":  return fileupload(data,header,pagedata);
    case "checkbox":    return checkbox(data);
    case "radio":       return radio(data);
    case "number":      return number(data); 
    case "password":    return password(data);  
    case "termos":      return termos(data);  
    /*  case "cep":         return fieldCep(data);   */
    /*  case "multiplehidden":return multipleHidden(data); */
    /*  case "share":return share(data);header.append(btOptionsBtShare()); */
 
    default:return text(data);
      
    } 

  }())

  if(data.attributes){

    Object.entries(data.attributes).forEach(([key, value]) => {

      let input = e.querySelector("input");

      input.setAttribute(key,value); 

    });

  }

  //e.setAttribute('required',data.required);
  e.setAttribute('id','div'+data.url);
  e.setAttribute('grid',data.grid);
  e.setAttribute('gridmobile',data.gridmobile);
  //e.setAttribute('fieldcodigo',data.id);
  e.setAttribute('type',data.type);

  return e;
  
}

function getAttValue(data,att){

  if (data.attributes){
    if(data.attributes[att]){
      return data.attributes[att];
    }else{
      return false;
    }

  }else{
    return false;
  }

}

function multipleHidden(data){

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
	var div         = createObject('{"tag":"div","class":"multiplehidden"}');
  var view        = createObject('{"tag":"multipleview"}');


  var valor  = data.value;
    
  var input  = createObject('{"tag":"input","id":"'+data.url+'","value":"'+valor+'"}');


  var select = createObject('{"tag":"multiplehidden"}');
  
      multipleHiddenFinder(select);
  
		  select.append(input,multipleHiddenClose());

      div.append(select,view);

  return div;
}



/* function multipleHidden(data){

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
	var div         = createObject('{"tag":"div","class":"multiplehidden"}');
  var view        = createObject('{"tag":"multipleview"}');
 
      view.appendChild(multipleAdd(data));
  
      div.appendChild(label);
  
  var valor  = (data.value[0].value[0]==",")?data.value[0].value:","+data.value[0].value;
	
  var input  = createObject('{"tag":"input","name":"'+data.name+'","title":"","value":"'+valor+'","autocomplete":"off","required":"","type":"hidden","tipo":"select"}');
     
  var select = createObject('{"tag":"multiplehidden"}');
  
      select.appendChild(multipleHiddenClose());
  
      multipleHiddenFinder(select);
  
		  select.appendChild(input);
		
	var object = data.value;

		for (var item in object){
			
			let codigon = new Number(object[item].codigo);
     
			let codigo = object[item].codigo;
      
			let label = object[item].label;
      
			var bt = createObject('{"tag":"opt","areas":"'+object[item].areas+'","value":"'+codigo+'","innerhtml":"'+codigon.pad(6)+' - '+label+'"}');
      
      if(object[item].filename!=undefined){

        let filename = object[item].filename;    

        let style = "background-image:url("+localStorage.getItem("imgm")+filename+");";
        
            bt.setAttribute("style",style);
        
      }

			   // bt.appendChild(cT((codigo).pad(6)+" - "+label));
			   // bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

          var list = [];

          list.label=label;
          list.codigo=codigo;

          view.appendChild(coolbutton(list));        
        
			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.getAttribute('value')+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
          var multipleview = got(this.parentElement.parentElement,"multipleview")[0];
          
          rE(goap(multipleview,"c",this.getAttribute('value'))[0]);
        
          
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.getAttribute('value')+",";
					input.value=input.value+valor;
          
          var list = [];
              list.label=this.innerHTML;
              list.codigo=this.getAttribute('value');
          
          var multiple = this.parentElement.parentElement;
          var multipleview = got(multiple,"multipleview")[0];
              multipleview.appendChild(coolbutton(list));
					
				}

			});

			select.appendChild(bt);

		}
	
	  div.appendChild(select);
    div.appendChild(view);
  
  return div;
	
}

 */


function multipleAdd(attribute){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-plus");
  
  var label = cE("label");
      label.appendChild(cT(attribute.label));
  
  var btadd = cE("add");
      btadd.onclick=(function(){this.parentElement.parentElement.setAttribute("search","1");});
  
  
      btadd.appendChild(icon);
      btadd.appendChild(label);
    
  return btadd;
  
}


function multipleHiddenClose(){
  
  var icon  = cE("icon");
      icon.setAttribute("class","icon-cross");
  
 
      icon.onclick=(function(){this.parentElement.parentElement.setAttribute("search","0");});
  
  return icon;
  
}


function coolbutton(list){
    
  var suitesinfo = JSON.parse(localStorage.suitesinfo); 
  var div     = cE("div");
  var label   = cE("label");
  label.setAttribute('style','background-color:'+suitesinfo.color1+';');
  var figure  = cE("figure");
  var close   = cE("icon"); 
   close.setAttribute('style','background-color:'+suitesinfo.color1+';');
      close.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	close.onclick=(function(){
      
				if(confirm("Tem certeza que deseja remover ?")){
          
          var multiplehidden=got(this.parentElement.parentElement.parentElement,"multiplehidden")[0];

          var input = got(multiplehidden,"input")[1];

          var valor = ","+this.parentElement.getAttribute("c")+",";
          var text = input.value;
          var x = text.replace(valor,","); 

              input.value=x;
              rE(this.parentElement);

        }
			
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(close);
  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}

function multipleHiddenFinder(object){
	
	var finder = cE("input");
	//var label = got(object,"label");
	
      //finder.setAttribute("type","text");
      finder.setAttribute("placeholder","Digite para procurar");
      finder.setAttribute("name","finder"); 
  
	finder.onkeyup = function() {
    
    var item = got(object,"opt");
    
    if(this.value.length>=3){
      
      if(item.length){

        var string1 = removeAcento(this.value.toLowerCase());

        for(var x=0;x<item.length;x++){

          var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

          //if(item[x].getAttribute("selected")=="0"){

            if(ohtml.indexOf(string1) >= 0){			

              //item[x].style.display="block";
              item[x].setAttribute('found','1');


            }else{

              //item[x].style.display="none";
              item[x].setAttribute('found','0');
            }
          //}
        }
      }

    }else{
      
      for(var x=0;x<item.length;x++){

        item[x].setAttribute('found','0');

      }
    }
      
	};
	
	object.appendChild(finder);
	
}

function number(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.appendChild(label);

  label.innerHTML=data.label;
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","number");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function password(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div","pass":"1"}');
	var icon        = createObject('{"tag":"icon","class":"icon-"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.appendChild(label);

  label.innerHTML = data.label;
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.append(object,icon);

  icon.onclick=(function(){

    let pass = this.parentElement.getAttribute("pass");

    if(pass=="1"){
      this.parentElement.setAttribute("pass","0");
    }else{
      this.parentElement.setAttribute("pass","1");
    }

  });

  return div;
  
}


const radioReset = function(e){

  Object.entries(e.querySelectorAll("opt")).forEach(([key, value]) => {

      value.setAttribute("checked","0");
     
  });

}

const radio = function(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.append(label);

  if(data.attributes){

    if(data.attributes.options){

      var options = data.attributes.options

      Object.entries(options).forEach(([k, v]) => {


        let checked = (value==k)?"1":"0";

        var opt    = createObject('{"tag":"opt","value":"'+k+'","checked":"'+checked+'"}');
        var icon   = createObject('{"tag":"icon","class":"icon-"}');

        var label  = createObject('{"tag":"label","innerhtml":"'+v+'"}')

          opt.append(icon,label);
          div.append(opt);

          opt.onclick=(function(){

            radioReset(this.parentElement);

            this.setAttribute("checked","1");
            this.parentElement.querySelector("input").value = this.getAttribute("value");

          })

      });

    }

  }
      
  label.innerHTML=data.label;

	object.setAttribute("type","hidden");
	object.setAttribute("class","default");
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function selectAjax(data,header){

  var div         = createObject('{"tag":"div"}');
  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');

  var plugin      = getAttValue(data,"plugin");
  var btshare     = createObject('{"tag":"compartilhar","innerhtml":"Compartilhar"}');
  var finder      = selectAjaxSetInputValue(data);
  var valueid     = finder.getAttribute("valueid");

      div.append(label,finder); 

  if(plugin=="multiply"){

    let json = (data.value)?data.value:[];
    let btshare=btOptionsBtShare();

    div.append(selectAjaxListCards(json));

    label.onclick = function(){selectBox(data.url);};

    btshare.onclick = function(){selectBox(data.url);};

    header.append(btshare);

  }else{


    selectFigure(div,valueid);

    finder.onclick = function(){

      selectBox(data.url);

    };

  }

  //fieldTooltip(label,data.attributes);   

  var select = createObject('{"tag":"selectajax"}');

  return div;
	
}


function selectAjaxRemoveCard(e){

  let input     = e.parentElement.parentElement.parentElement.querySelector("input");

  let elements  = e.parentElement.parentElement.getElementsByTagName("card");

  rE(e.parentElement);

  let json      = [];

  Object.entries(elements).forEach(([key, value]) => {

    json.push(parseInt(value.id));

  });

  valueid = (json.length)?JSON.stringify(json):"";

  input.setAttribute("valueid",valueid);

}

function selectAjaxSetInputValue(data){

  let value       = (data.value)?data.value:null;

  if(Array.isArray(value)){

    var valueid = "";

    let json    = [];

    Object.entries(value).forEach(([key, value]) => {json.push(value.id)});

    valueid = JSON.stringify(json).replace(/"/g, '');
    
    var placeholder = value[0].label;
    
  }else{

    var valueid     = (value)?value.id:"";
    var placeholder = "Escolha "+data.label;
    
  }

 /*  let placeholder = (value)?value.label:"Escolha "+data.label; */

  var finder = createObject('{"tag":"input","title":"'+data.label+'","id":"'+data.url+'","class":"default","placeholder":"'+placeholder+'","valueid":"'+valueid+'"}');

  if(getAttValue(data,"plugin")){

    finder.setAttribute("plugin",getAttValue(data,"plugin"));

  }

    if(data.attributes){
      if(data.attributes.required){
        finder.setAttribute("required","required");
      }
    }



return finder;

}


function selectAjaxListCards(data){

  if(document.querySelector("cards")){

    var cards = document.querySelector("cards");

  }else{

    var cards = createObject('{"tag":"cards"}');

  }

  Object.entries(data).forEach(([key, value]) => {



    var card    = createObject('{"tag":"card","id":"'+value.id+'"}');
    var label   = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');
    var btclose = createObject('{"tag":"btclose","class":"icon-cancel-circle"}');

      selectFigure(card,value);
      card.append(label,btclose);
      cards.append(card);

      btclose.onclick=(function(){

        swal("Tem certeza que deseja remover este compartilhamento?", {
          buttons: {
                   defeat: "Sim",
            cancel: "Cancelar",
          },
        })
        .then((value) => {
          switch (value) {
    
            case "defeat":
               selectAjaxRemoveCard(this);
              break;

          }
        });

      });

  });

  return cards

}


function selectBox(modules){
	
  var selectbox   = document.querySelector('selectbox');
  var window   = document.querySelector('window');
  
  if(!selectbox){

    selectbox   = createObject('{"tag":"selectbox"}');
    selectbox.append(selectBoxFields(modules),selectBoxList());
  
    window.append(selectbox);
 

  }

  document.body.setAttribute("selectbox","1")

  selectbox.setAttribute('modules',modules);

  document.getElementsByTagName("selectbox")[0].getElementsByTagName("input")[0].focus();

}


function selectBoxFields(modules){

  var fields = createObject('{"tag":"fields"}');

  var loading   = createObject('{"tag":"icon","class":"icon-spinner3"}');

  var icon   = createObject('{"tag":"icon","class":"icon-cancel-circle"}');

  var input  = createObject('{"tag":"input","type":"text","placeholder":"Digite para procurar"}'); 

      input.onkeyup = function(){

        if(this.value.length>3){
          selectBoxSearch(this.value,modules)
        }
          
      }

      tooltip(icon,"fechar"); 

      icon.onclick=(function(){
        rE(document.querySelector('selectbox'));
          document.body.removeAttribute("selectbox")
      });

      fields.append(loading,input,icon);

  return fields;

}

function selectBoxList(){

  let list = createObject('{"tag":"list"}');

  return list;

}

function selectBoxOpt(data,modules){

  var opt        = createObject('{"tag":"opt"}');
  var plugin     = document.querySelector("#"+modules).getAttribute("plugin");

  opt.onclick=(function(){

    if(plugin=='multiply'){

      selectBoxOptClickMultiply(this,data,modules);

    }else{

      selectBoxOptClick(this,data,modules);

    }

  })

  let eFiles = selectBoxCells('files',data.files,data.color);
  let eId    = selectBoxCells('id',data.id);
  let eAreas = selectBoxCells('areas',data.areas);
  let eLabel = selectBoxCells('label',data.label);

  opt.append(eFiles);
  opt.append(eId);

  if(data.areas){

    opt.append(eAreas);

  }
  
  opt.append(eLabel);
  
  return opt;

}

function selectBoxOptClick(e,data,modules){

    let input = document.getElementById(modules);

        input.placeholder  = data.label;
        input.setAttribute("valueid",data.id); 

    let optfigure = e.querySelector('figure').style.backgroundImage;
    let figure    = document.querySelector('#div'+modules+' figure');

    figure.style.backgroundImage    = optfigure;
    
    rE(document.querySelector('selectbox'));

}


function selectBoxCells(type,data,color){

  const e = (function(){

   switch(type) {

      case "id"     :return createObject('{"tag":"'+type+'","innerhtml":"'+data+'"}');
      case "label"  :return createObject('{"tag":"'+type+'","innerhtml":"'+data+'"}');
      case "files"  :return selectBoxCellsFigure(data,color);
      case "areas"  :return createObject('{"tag":"'+type+'","innerhtml":"'+data+'"}');
   }

  }())

  return e;

} 

function selectBoxCellsFigure(data,color){



  var figure = createObject('{"tag":"figure"}');

  if(color){
    figure.setAttribute("style","background-color:"+color+";")
  }

  if(data!==null){

    var config = JSON.parse(localStorage.config); 

    let filename = data[0].filename;
    let key      = data[0].key; 
    let url      = config.imgm+filename+"?key="+key;

        figure.style.backgroundImage="url("+url+")";

  }

  return figure;

}

function selectBoxOptClickMultiply(e,data,modules){

    let input   =  document.getElementById(modules);
    let valueid =  input.getAttribute("valueid");
    let cards   = input.parentElement.querySelector("cards");
   
        json = (valueid)?JSON.parse(valueid):[];

        json.push(data.id);

    input.setAttribute('valueid',JSON.stringify(json));

    selectAjaxListCards([data]);

    rE(document.querySelector('selectbox'));

}

function selectBoxSearch(string,modules){

  document.querySelector('selectbox').setAttribute("loading","1");

  const config = JSON.parse(localStorage.config);

  const url = (modules=='remedios')?localStorage.supabaseurl+'rest/v1/rpc/select_remedios':config.urlselect;

    const send = async function() {
      
      const rawResponse = await fetch(url, {

        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apikey':localStorage.supabasekey
        },
        body: JSON.stringify({modules:modules,string:string})

      });

      const data = await rawResponse.json();
      
      const list = document.querySelector('selectbox > list');
      
      race(list);

      Object.entries(data).forEach(([key, value]) => {

        list.append(selectBoxOpt(value,modules));

      });

      document.querySelector('selectbox').setAttribute("loading","0");
      
  }();

}

function selectFigure(div,data){

  var config = JSON.parse(localStorage.config); 

  var labelfigure   = createObject('{"tag":"figure"}');

  if(data.files){

    let filename = data.files[0].filename;
    let key      = data.files[0].key; 
    let url      = config.imgm+filename+"?key="+key;

    labelfigure.style.backgroundImage="url("+url+")";

  }
    
  div.append(labelfigure);

}

function share(attribute){

  var label       = cE("label");
	var div         = cE("div");
 
  var input  = cE("input");
  
  var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
      input.setAttribute("name",attribute.name);
      input.setAttribute("title",attribute.title);
      input.setAttribute("value",valor);
      input.setAttribute("autocomplete","off");
      input.setAttribute("required","");
      input.setAttribute("type","hidden");
      input.setAttribute("tipo","select");
 
  div.append(input);
  
  return div;
	
}

const termos = function(data){

  var value       = (data.value)?data.value:"false";

  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');

	var div         = createObject('{"tag":"div"}');

	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

      div.append(label);

  let checked = (value==="true")?"1":"0";

  var opt       = createObject('{"tag":"opt","value":"","checked":"'+checked+'"}')

  var icon      = createObject('{"tag":"icon","class":"icon-"}');

  opt.append(icon,createObject('{"tag":"label","innerhtml":"'+data.attributes.options[0]+'"}'));
  div.append(opt);

  opt.onclick=(function(){

    let input = this.parentElement.querySelector("input");

    let text  = input.value;

    if(text=="true"){

      input.value="false";
      opt.setAttribute("checked","0");

    }else{

      input.value="true";
      opt.setAttribute("checked","1");

    } 
    

  })

  //label.innerHTML=data.label;

	object.setAttribute("type","hidden");
	object.setAttribute("class","default");
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function text(data){

  var value       = (data.value!==undefined)?data.value:"";
  var placeholder = (data.placeholder!==undefined)?data.placeholder:"";

  var label       = createObject('{"tag":"label","innerhtml":""}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+value+'","id":"'+data.url+'"}');

  div.appendChild(label);

  label.innerHTML = data.label;
	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");

  if(placeholder){
	  object.setAttribute("placeholder",placeholder);
  }

	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function textarea(data){
  
  var label = createObject('{"tag":"label","type":"'+data.type+'","innerhtml":"'+data.label+'"}');
  var div   = createObject('{"tag":"div"}');
  
  if(data.attributes){
  
  	Object.entries(data.attributes).forEach(([key, value]) => {
  
      if(key=='title'){
          fieldTooltip(label,data.attributes); 
      }
  
    });
    
  }

  div.append(label);
  
  var object = createObject('{"tag":"textarea","title":"'+data.label+'","id":"'+data.url+'","class":"default","placeholder":"'+data.label+'"}');
	
	Object.entries(data).forEach(([key, value]) => {

    if(value!=="0" && value!==""){

      if(key=='value'){
        object.append(cT(value));
      }else{
        //object.setAttribute(key,value);
      }

    }
		
	});

  div.append(object);

  return div;
  
}


function textareaPresetSelect(textarea,array){
  
  let label = createObject('{"tag":"label"}');
  
  let select = createObject('{"tag":"select"}');

      select.onchange=(function(){

        if(array[this.value].content!==undefined){
          textarea.innerHTML = array[this.value].content;
        }

      });
  
      select.append(createObject('{"tag":"option","value":"","innerhtml":"Predefinidos"}'));
  
      for (var x=0;x<array.length;x++){
        
        //let label   = array[x].label;
        let content = array[x].content;
        
        let option       = createObject('{"tag":"option","value":"'+x+'","innerhtml":"'+array[x].label+'"}');
        
        select.append(option);
        
      }
  
      label.append(select);

  return label;
  
}


function fileupload(data,header,pagedata){

  var label    = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
  var div      = createObject('{"tag":"div"}');
  var uuid     = (data.uuid)?data.uuid:uuidv4();

  var object   = createObject('{"tag":"input","id":"files","type":"hidden","value":"'+uuid+'"}');

      header.append(btHeaderAttach());

  var span   = createObject('{"tag":"uploadedStatus"}');
  var result = createObject('{"tag":"uploadedFiles"}');
    
      div.append(label,object,result,span);
    
      if(data.value){
    
        if(data.value.length){
          
          var files    = data.value;
          
        }else{
          
          var files    = JSON.parse(data.value);
          
        }
    
        fileUploadFigure(result,files);
    
      }

  return div;
  
}


function addUploadFiles(local,object){

  const config = JSON.parse(localStorage.config);

  var div         = createObject('{"tag":"div","type":"jpg","id":"'+filename+'"}');
	var figure 			= createObject('{"tag":"figure"}');

	var spanDelete 	= createObject('{"tag":"span","class":"icon-bin"}');
	var spanLeft 		= createObject('{"tag":"span","class":"icon-undo"}');
	var spanRight 	= createObject('{"tag":"span","class":"icon-redo"}');
	var spanZoom 		= createObject('{"tag":"span","class":"icon-search"}');
	var divOptions 	= createObject('{"tag":"options"}');

	if(object.filename!==undefined){
    
		var filename = object.filename;
		var key      = object.key;
		
	}else{

		var filename = object;

	}
	
	if(filename!==null){
    
    var urlimgm = config.imgm+filename+"?key="+key;
    var urlimg  = config.img+filename+"?key="+randomString(32);

		    divOptions.append(spanDelete,spanLeft,spanZoom,spanRight);
		 /*    div.append(divOptions); */


		sA(figure,"style","background-image:url('"+urlimgm+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    


    figure.onclick=(function(){
      window.open(urlimg,'_blank');
    });
                      
		spanLeft.onclick=(function(){

      let key = randomString(32);

			figure.setAttribute('style',"background-image:url('"+config.urlimagerotate+"?img="+filename+"&rotate=left&key="+key+"');");


      rotateImage(filename,key);
      
		});

		spanRight.onclick=(function(){

      let key = randomString(32);

			figure.setAttribute('style',"background-image:url('"+config.urlimagerotate+"?img="+filename+"&rotate=right&key="+key+"');");

      rotateImage(filename,key);
		});
		
		if(goiFind(filename)){
			
			goi(filename).append(figure,divOptions);

		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.append(figure,divOptions);
			
		}
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		

	
		
	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
	
		
		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}


}


const rotateImage = async function(filename,key){

  const config      = JSON.parse(localStorage.config);

  const rawResponse = await fetch(config.urlsetimagekey, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({filename:filename,key:key})

  });

  const data = await rawResponse.json();
  
}


function addUploadFilesMP4(local,filename){
  
  const config = JSON.parse(localStorage.config);
  
  var div         = createObject('{"tag":"div","type":"mp4","id":"'+filename+'"}');

	var textCover 	= createObject('{"tag":"Destaque"}');
  
	var spanDelete 	= createObject('{"tag":"span"}');
	var spanZoom 	  = createObject('{"tag":"span"}');
	var spanCover 	= createObject('{"tag":"span"}');
  
	var divOptions 	= createObject('{"tag":"options"}');

	if(filename!==null){

    		spanCover.append(textCover);
    
    		divOptions.append(spanDelete,spanZoom);
    
   /*  		div.append(divOptions); */
    
    		spanDelete.setAttribute('class','icon-bin');
    
    		spanZoom.setAttribute('class','icon-play3');

    let video = createObject('{"tag":"video"}');

    let video_source = createObject('{"tag":"source","src":"'+config.mp4+filename+'","type":"video/mp4"}');

        video.append(video_source);
    
        spanDelete.setAttribute("onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
        video.setAttribute("onclick","window.open('"+config.mp4+filename+"','_blank');");
    
        divOptions.append(spanDelete,spanZoom);

      	if(goiFind(filename)){
      
      		goi(filename).append(video,divOptions);
      
      	}else{
      
      		local.insertBefore(div, local.childNodes[0]);
      		div.append(video,divOptions);
          
      	}

	}else{

	  var icon 	= createObject('{"tag":"icon","class":"icon-user"}');
    
    		figure.setAttribute('style',"");
    		figure.append(icon);
    		div.append(figure);
    		local.append(div);
    
	}


}


function addUploadFilesPDF(local,filename){

  const config = JSON.parse(localStorage.config);

	var split       = filename.split(".");

	var div         = createObject('{"tag":"div","type":"pdf","id":"'+filename+'"}');
	var divOptions 	= createObject('{"tag":"options"}');
	var spanDelete 	= createObject('{"tag":"span","class":"icon-bin"}');
	var spanCover 	= createObject('{"tag":"span","innerhtml":"Destaque"}');
	var spanZoom 		= createObject('{"tag":"span","class":"icon-search"}');
	var figure 			= createObject('{"tag":"figure","style":"background-image:url('+config.imgp+split[0]+'.jpg);"}');
	var divLabel 		= createObject('{"tag":"h3"}');
  
  spanDelete.onclick=(function(){

      if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,filename)}

  });

  figure.onclick=(function(){

    window.open(config.pdf+filename,'_blank');

  });
	
  divOptions.append(spanDelete,spanZoom);
  figure.append(divLabel);

	if(goiFind(filename)){

		goi(filename).append(divOptions,figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.append(figure,divOptions);
    
	}
  
}
/* 
function addUploadFilesPDFv2(local,filename){

  const config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var divOptions 	= cE("options");

	var textCover 	= cT("Destaque");
	
	var spanDelete 	= cE("span");
	var spanCover 	= cE("span");
	var spanZoom 		= cE("span");
	var figure 			= cE("iframe");
	

	var divLabel 			= cE("h3");
	
	spanDelete.setAttribute('class','icon-bin');
	spanCover.appendChild(textCover);
	spanZoom.setAttribute('class','icon-search');
	divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanZoom);
	figure.appendChild(divLabel);
	div.appendChild(figure);
			div.appendChild(divOptions);

	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);
	}
	

	var split= filename.split(".");
	
	sA(figure,"src",localStorage.getItem("pdf")+split[0]+".pdf");

	sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
	
	sA(spanZoom,"onclick","window.open('"+localStorage.getItem("pdf")+filename+"','_blank');");
	//console.log(filename);
	
	div.setAttribute("id",filename);
	
}
 */


function addUploadFilesPNG(local,filename){

	var div 		= cE("div");
	var figure 		= cE("figure");
	
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");

	var spanZoom 	= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");

	if(filename!==null){

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);

		divOptions.appendChild(spanZoom);


		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin')

		spanZoom.setAttribute('class','icon-search')
		
		sA(figure,"style","background-image:url('"+localStorage.getItem("png")+filename+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		sA(spanZoom,"onclick","window.open('"+localStorage.getItem("png")+filename+"','_blank');");

		div.appendChild(figure);
		local.appendChild(div);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
		local.appendChild(div);
		icon.setAttribute('class','icon-user');

	}


}


function fileUploadFigure(result,data){

  Object.entries(data).forEach(([key, value]) => {

    var ext = value.filename.split('.').pop();

    switch(ext) {

      case "jpg": addUploadFiles(result,value);break;
      case "pdf": addUploadFilesPDF(result,value.filename);break;
      case "png": addUploadFilesPNG(result,value.filename);break;
      case "mp4": addUploadFilesMP4(result,value.filename);break;
    } 

  });

}


function insertAnexos(anexos,filename){

  const config  = JSON.parse(localStorage.config);
  const user    = JSON.parse(localStorage.user);


  (async () => {
    const rawResponse = await fetch(config.insertfile, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session: user.session, anexos: anexos, filename: filename})
    });

    const data = await rawResponse.json();

  })();

}


function removeAnexos(e,filename){

  const config  = JSON.parse(localStorage.config);
  const user    = JSON.parse(localStorage.user);

  (async () => {
    const rawResponse = await fetch(config.deletefile, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session: user.session, filename: filename})
  });

  const data = await rawResponse.json();
  
    rE(e);

  })();
			
}



function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

  var size = file.size;
  
	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];

	

	var labelLoading=cE("label");
  var iconLoading     = createObject('{"tag":"icon","class":"icon-spinner3"}');
  
	    var uploadedfiles = document.querySelector("form uploadedfiles");
      var divLoading    = createObject('{"tag":"div"}');
          
          divLoading.append(iconLoading,labelLoading);
          uploadedfiles.insertBefore(divLoading, uploadedfiles.childNodes[0]);
	
	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
                             
      divLoading.setAttribute("type",object.ext);
      
			if(object.ext=='jpg'){

				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);

			}else if(object.ext=='png'){

				insertAnexos(anexos,object.filename);
				cb(object.filename);


			}else if(object.ext=='pdf'){
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}else if(object.ext=='mp4'){
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
				
			}
			
		}

	};


  xhr.open('POST', url, true);
  xhr.send(formData);
  


}

function upload(object){

	const config = JSON.parse(localStorage.config);

	var window = got(document,"window")[0];
	
	var uploadedfiles = got(window,"uploadedfiles")[0];
	
	for(var x=0;x<object.files.length;x++){
			
		var ext     = object.files[x].type;

		var anexos  = document.getElementById('files').value;

    var size    = object.files[x].size;
    
    var maxsize = '80';
    
    switch(ext) {

      case "image/jpeg": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFiles(uploadedfiles,filename);});break;
      case "application/pdf": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFilesPDF(uploadedfiles,filename);});break;
      case "image/png": sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFiles(uploadedfiles,filename);});break;
      case "video/mp4": 
        
        if(size < (maxsize * 1024 * 1024)){
  
         sendFile(object.files[x],anexos,config.upload+'?',function(filename){addUploadFilesMP4(uploadedfiles,filename);});
          
        }else{
          
          alert('Arquivo maior que o permitido '+maxsize+'mb');
          console.log((size/1024)/1024);
          
        }
        
        break;
        
      default:alert('Formato de arquivo não suportado');
        
    } 


	}
		
}

function mountHeader(array){
  
  var user    = JSON.parse(localStorage.user);  
  var config  = JSON.parse(localStorage.config);

	if(!got(document,"header").length){

    var user   = JSON.parse(localStorage.user);  
    var config = JSON.parse(localStorage.config);

		var header = cE("header");
    
    var header_progressbar 		  = createObject('{"tag":"header_progressbar","class":"_it4vx _72fik"}');
    
		var content = cE("content");
		var icon = cE("icon");
				icon.setAttribute("id","navmenu");
		    icon.setAttribute("class","icon-menu");
    
    var iconSuite= cE("icon");
        iconSuite.setAttribute("class","icon-infinite");
    
	/* 	header.appendChild(icon);
    */
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(config.label);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

    content.append(header_profile());
    
		content.appendChild(a);
    
		logo.onclick=(function(){
        
      var view  = document.querySelector("view");
    
      race(view);
      
      document.body.setAttribute("modules","");
      
    });
    
		icon.onclick=(function(){

			var nav = goi("nav"); 
			nav.setAttribute('class','show');

			gridShow();

		});    

		got(document,"body")[0].appendChild(header);
    
		if(user.areas==1){
      
      content.appendChild(iconSuite);
      content.appendChild(mountMobileVersion());
      
    }
    
    var options = document.createElement("options");
    
        options.appendChild(iconNotification());

    
		if(config.id==1){      
      
      if(user.areas==50 ){
        
        iconPlanilha(options);
        
      }

      
      iconHelp(options);   
      
      if(user.areas==50 ){
        
        iconReceitaEspecial(options);
        
      }
      
    }
    
    content.append(options);
    header.append(header_progressbar,content);
       

	}
	
}

function resetHeaderOptions(){
  
  document.body.setAttribute("notification","0");
  document.body.setAttribute("filter","0");
  
}

function navSuiteMount(){
  
  var div = cE("navsuite");
  
  return div;
  
}

function mountMobileVersion(){
  
  var icon = cE("mobileversion");
  
  icon.onclick=(function(){
    
    var mobile=got(document,"body")[0].getAttribute('mobile');
    
    if(mobile==1){
      got(document,"body")[0].setAttribute('mobile','0');
    }else{
      
      got(document,"body")[0].setAttribute('mobile','1');
    }
    
    
  });
  
  return icon;
  
}

function iconHelp(element){
  
var icon = cE("icon")
    icon.setAttribute("class","icon-question");

tooltip(icon,"Tutorial");

var user = JSON.parse(localStorage.user);
var config = JSON.parse(localStorage.config);

    icon.onclick=(function(){

      if(user.areas==50){

        window.open(config.medicohelp);

      }else if(user.areas==100){

        window.open(config.pacientehelp);

      }

    });

    element.appendChild(icon);
  
}


function iconVideo(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-users");
  
        tooltip(icon,"Video confêrencia");
  
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
          window.open("https://whereby.com/"+userinfo.whereby,"_blank");
           //window.open("https://facedoctors.com.br/","_blank");
          
        });

  element.appendChild(icon);
  
}


const header_profile = function() {

  var user      = JSON.parse(localStorage.user);  
  var config    = JSON.parse(localStorage.config);


	var profile 	= createObject('{"tag":"profile"}');
/* 	var label 		= createObject('{"tag":"label"}'); */
	var icon 		  = createObject('{"tag":"icon"}');
  
  let style = '';
  
  if(user.profileimage){

    let key       = user.profileimage[0].key;
    let filename  = user.profileimage[0].filename;
    let url       = config.imgp+filename+'?key='+key;
    
        style = 'background-image:url('+url+')';
    
  }
  
  let figure    = createObject('{"tag":"figure","style":"'+style+'"}');

  icon.append(figure);
  
  tooltip(icon,"Editar meu profile");
  
  label.appendChild(cT(user.label));

  profile.onclick=(function(){	

    document.body.setAttribute("loading","1");

    formEdit("users");

    
  });
	
	profile.append(icon);

	return profile;

};

function profile(){

  var user   = JSON.parse(localStorage.user);  
  var config = JSON.parse(localStorage.config);

	var div    		= cE("div");
	var profile 	= cE("profile");
	//var figure 		= cE("figure");
	var label 		= cE("label");

		//profile.appendChild(figure);

			label.appendChild(cT(user.label));
	
	div.onclick=(function(){	

    document.body.setAttribute("loading","1");

		formEdit("users");
		navClose();
		
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
	
	if(user.profileimage){


    //Object.entries(user.profileimage).forEach(([key, value]) => {

      addUploadFilesProfile(result,user.profileimage[0]);

    //});

	}

	div.appendChild(result);

	addUploadFilesProfile(result,null);
	
	profile.appendChild(div);
	profile.appendChild(label);

	
	return profile;

}

function addUploadFilesProfile(local,file){


  var config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var figure 			= cE("figure");

	if(file!==null){

    let filename = file.filename;
    let key      = file.key;

		sA(figure,"style","background-image:url('"+config.imgp+filename+"?key="+key+"');");

		div.appendChild(figure);

	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);

		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}
	
	local.insertBefore(div, local.childNodes[0]); 

}



const jsonformlogin = `[
  {
    "tag": "btclose",
    "innerhtml": "x",
    "onclick": "closeFormLogin()"
  },
  {
    "tag": "p",
    "innerhtml": "Login",
    "class": "plogin"
  },
  {
    "tag": "p",
    "innerhtml": "Criar conta",
    "class": "pinsert"
  },
  {
    "tag": "p",
    "innerhtml": "Cadastro de Médico",
    "class": "pinsertm"
  },
  {
    "tag": "p",
    "innerhtml": "Recuperar senha",
    "class": "precovery"
  },
  {
    "tag": "login",
    "class": "login",
    "name": "login"
  },
  {
    "tag": "input",
    "id": "label",
    "placeholder": "Nome completo"
  },
  {
    "tag": "input",
    "id": "email",
    "placeholder": "seu@email.com",
    "type":"email"

  },
  {
    "tag": "input",
    "id": "password",
    "type": "password",
    "placeholder": "Crie uma senha"
  },
  {
    "tag": "input",
    "id": "cpf",
    "title": "Exemplo: 98776543220",
    "placeholder": "CPF (ex: 98776543220)",
    "type": "text",
    "pattern": "[0-9]{11}",
    "onkeypress": "filterInput(this)",
    "allow": "/[0-9]/"
  },
  {
    "tag": "input",
    "id": "whatsapp",
    "title": "Exemplo: 5531987654321",
    "placeholder": "Whatsapp (ex: 5531987654321)",
    "type": "text",
    "pattern": "[0-9]{13}",
    "onkeypress": "filterInput(this)",
    "allow": "/[0-9]/"
  },
  {
    "tag": "input",
    "id": "cep",
    "title": "Exemplo: 31222300"
  },
  {
    "tag": "input",
    "id": "rua",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "numero",
    "type": "text",
    "placeholder": "Número"
  },
  {
    "tag": "input",
    "id": "complemento",
    "type": "text",
    "placeholder": "Complemento"
  },
  {
    "tag": "input",
    "id": "bairro",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "cidade",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "estado",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "button",
    "id": "btInsertPaciente",
    "type": "button",
    "textnode": "Sou paciente",
    "onclick": "clickBtInsertPaciente()"
  },
  {
    "tag": "button",
    "id": "btInsertMedico",
    "type": "button",
    "textnode": "Sou profissional da saúde",
    "onclick": "clickBtInsertMedico()"
  },
  {
    "tag": "input",
    "id": "crm",
    "placeholder": "Registro profissional",
    "type": "text",
    "onkeydown": "return inputTypeNumber(event);"
  },
  {
    "tag": "p",
    "innerhtml": "Ao clicar em cadastrar, você concorda com a <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/ target=_blank>política de privacidade</a>, <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>termos de uso</a> e <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>acordo do usuário</a> e <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/ target=_blank>política de cookies</a>.",
    "class": "ptermos"
  },
  {
    "tag": "input",
    "id": "areas",
    "type": "hidden"
  },
  {
    "tag": "div",
    "id": "status",
    "class": "status"
  },
  {
    "tag": "button",
    "id": "btEntrar",
    "innerhtml": "Entrar"
  },
  {
    "tag": "button",
    "id": "btCadastrar",
    "innerhtml": "Cadastrar"
  },
  {
    "tag": "button",
    "id": "btRecuperar",
    "innerhtml": "Recuperar"
  },
  {
    "tag": "button",
    "id": "btLogin",
    "type": "button",
    "textnode": "Fazer login",
    "onclick": "clickBtLogin()"
  },
  {
    "tag": "button",
    "id": "btInsert",
    "type": "button",
    "textnode": "Criar conta",
    "onclick": "clickBtInsert()"
  },
  {
    "tag": "button",
    "id": "btRecovery",
    "type": "button",
    "textnode": "Esqueci minha senha",
    "onclick": "clickBtRecovery()"
  }
]`;

function load(){
  

//console.log(fetch("https://api.db-ip.com/v2/free/self"));
  
    if (window.innerWidth <= 480 || window.innerHeight<=800) {

      document.body.setAttribute('mobile', '1');

    } else {

      document.body.setAttribute('mobile', '0');

    }

   // suporteLoad();

/*     document.body.appendChild(loadingMount()); */
    document.body.appendChild(ad());
    document.body.setAttribute('open','0');
    document.body.setAttribute('logged','0');
    //fail
    pagesLoad((data)=>{

      var text   = [];
      var config = {};

      for (var [key, value] of Object.entries(data[0].suites_config)) {

          config[value.label]=value.url;

      }

      //var config=JSON.parse(text);


      localStorage.config       = JSON.stringify(config);

      //console.log(JSON.stringify(data));
      //localStorage.languages    = JSON.stringify(data.languages);
      //localStorage.language    = "ptbr";
      
      setInterval(loop, 3000);
      mountLogin();
      grade();

      //formEdit('prontuarios',21233);
      //document.body.append(selectBox('pacientes'));

    });


}

function loopCheck(){
  
  setTimeout(function(){

    if(document.body.getAttribute('open')=='1'){
      
/*       if (navigator.onLine) {loadNotifications();} else {console.log('offline');}
       */
    }
   
    loopCheck();
    
  }, 15000);  
    
}

window.onblur = function() {
  document.body.setAttribute('open','0');
}

window.onfocus = function() {
  document.body.setAttribute('open','1');
}

document.onkeydown = function(evt) {
	
	var teste=evt.keyCode;
   
	if(teste==27){
    formClose();
    navClose();
	}
	
}


window.onload=load;

function loadLogged(authentic){
  
  localStorage.user       = JSON.stringify(authentic.user);
  localStorage.nav        = JSON.stringify(authentic.nav);
  localStorage.shortcut   = JSON.stringify(authentic.shortcut);

	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();
  loadNavSuite();
  modal();
  document.getElementsByTagName("body")[0].setAttribute("modules","");
  document.getElementsByTagName("body")[0].setAttribute("premium",authentic.user.premium);
  loopCheck();
  
  
	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){
        document.getElementsByTagName("body")[0].setAttribute("openlogin","0");

        
         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
 
           
                }, 5000);
  
          }, 1000);
  
}

function debugIphone(array){
  
  if(array.userinfo.codigo=='10001'){
  
    alert(JSON.stringify(array));
    
  }
  
}

const mountLogin = async function(){

  const  login 	     = createObject('{"tag":"login","class":"login","name":"login"}');
  const  formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;","autocomplete":"off"}');

  Object.entries(JSON.parse(jsonformlogin)).forEach(([key, value]) => {

    if(value.tag=='input'){

      formLogin.append(jsonToElement(value));

    }else{

      formLogin.append(jsonToObject(value));

    }

  });

  login.append(formLogin);

  document.getElementsByTagName("pages")[0].append(login);

}



  const closeFormLogin = function(){
    document.body.setAttribute('openlogin',0);
  }

  const clickBtLogin = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    sA(login,'class','login');
    setRequired('email,password')
    sA(formLogin,'onsubmit','login();return false;');

  }

  const clickBtInsert = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insert');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="100";

  }

  const clickBtInsertPaciente = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insertpaciente');
    sA(goi('name'),'required','required');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="100";

  }

  const clickBtInsertMedico = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('label,email,password,crm,password,whatsapp,cep,cidade,estado,cpf');
    sA(login,'class','insertmedico');
    sA(goi('name'),'required','required');
    sA(formLogin,'onsubmit','insert();return false;');
    goi('areas').value="50";

  }

  const clickBtRecovery = function(){

    var login     = document.querySelector("login");
    var formLogin = login.querySelector("form");

    setRequired('email');
    sA(login,'class','recovery');
    sA(formLogin,'onsubmit','recovery();return false;');

  }

function insert(){

	const config = JSON.parse(localStorage.config);

  const status = goi("status");

  
        status.innerHTML = "Verificando...";

    var formfields    = document.querySelectorAll("form input");
    var data          = {};
    let error         = '';

    Object.entries(formfields).forEach(([key, value]) => {

      let id          = value.getAttribute('id');
      let required    = value.parentElement.getAttribute('required');
      let title       = value.getAttribute('title');
      let valueid     = value.value;
      
        data[id]=valueid;

        if(required=="required"){

          error+= (valueid)?"":"Campo "+title+" está vazio \n";

        }

    });

    const send = async function(data) {

      const rawResponse = await fetch(config.logininsert, {

        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({data:data})

      });

      const post = await rawResponse.json();

      switch (post.status) {
          
        case '1':loginInsertSuccess(post);break;

        case '301':goi("password").setAttribute('class','error');status.innerHTML=message(post.status);break; 

        case '602':goi("label").setAttribute('class','error');status.innerHTML=message(post.status);break;
        case '603':goi("password").setAttribute('class','error');status.innerHTML=message(post.status);break;
        case '605':goi("cpf").setAttribute('class','error');status.innerHTML=message(post.status);break;   
        case '606':goi("cpf").setAttribute('class','error');status.innerHTML=message(post.status);break;  
        case '607':goi("email").setAttribute('class','error');status.innerHTML=message(post.status);break; 

        default:goi("email").setAttribute('class','error');status.innerHTML=message("999");    

      }  

    }

    send(data);

}


function loginInsertCepFillFields(data){

  let login = document.querySelector("login")

  let cep = login.querySelector("#cep");
  let cidade = login.querySelector("#cidade");
  let estado = login.querySelector("#estado");

  let bairro = login.querySelector("#bairro");
  let rua    = login.querySelector("#rua");


  cidade.value = "";
  estado.value = "";
  bairro.value = "";
  rua.value = "";


  //let bairro = login.querySelector("bairro");

if(!("errors" in data)){

  cidade.value = data.city;
  estado.value = data.state;
  bairro.value = data.neighborhood;
  rua.value = data.street;
}else{

  alert("CEP não encontrado");
  
  cep.value = "";

}

  //bairro.value = data.bairro;

}


/* 
function loginInsetCheckCep(cep) {

  var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=loginInsertCepFillFields';

  document.body.appendChild(script);

} */

function loginInsertSuccess(authentic){
  
	var status   = goi('status');
  sA(status,"class","sucess");
  
  status.innerHTML=message(authentic.status);
  
  setTimeout(function () {
    rE(got(document,"login"));
    loadLogged(authentic);
  }, 2000);
  
}


function login(){
	
	//var form  	 = got(document,'form');

	var email 	 = goi('email');
	var password = goi('password');
	var suite    = goi('suite');
	var status   = goi('status');
	
	email.setAttribute('class','');
	password.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Autenticando...";
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/logincheck'
  const supabasekey       = localStorage.supabasekey;
  const url               = supabaseurl + supabase_function;
  
	setTimeout(function () {

    (async () => {
      const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({email: email.value, password: password.value,agent:window.navigator.userAgent})
      });

      const authentic = await rawResponse.json();


        if(authentic.status==1){
          
          //success

          status.innerHTML=message("501");	
          sA(status,"class","sucess");
          setTimeout(function () {loadLogged(authentic);}, 100);
        
        }else{
          
          sA(status,"class","error");
          console.log(authentic);
          status.innerHTML=message(authentic.status);
          
          switch (authentic.status) {

            case '502':sA(password,"class","error");break;  
            case '504':sA(email,"class","error");break; 
            case '505':sA(password,"class","error");break;
            case '508':sA(email,"class","error");break;            
    
          }  
    
          //setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 100);
          
        }

    })();
		
	}, 100);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.user.areas);
  document.body.setAttribute('open',"1");

}


function logout(){
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLogout.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

         mountLogin(authentic);
     
         setTimeout(function () {
           
            logoutResetStep1();
           
            setTimeout(function () {
              logoutResetStep2();
              pagesLoad();
            }, 1000);
      
          }, 500);

		}
		
	};
  
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}


function logoutResetStep1(){
  
   document.body.setAttribute('logged','0');
   document.body.setAttribute('notification','0');
   document.body.setAttribute('filter','0');
  
}

function logoutResetStep2(){
  
    rE(got(document,'nav'));
    //rE(got(document,'grade'));
    rE(got(document,'section'));
    rE(got(document,'boxfilter'));
    rE(got(document,'header'));
    rE(got(document,'boxnotification'));
    rE(got(document,'navsuite'));
    rE(got(document,'printheader'));
    document.body.setAttribute('modules',"");
  
    delete localStorage.userinfo;

  }


function recovery(){
  
	var config      = JSON.parse(localStorage.config);

	var email 	 = goi('email');
	var status   = goi('status');

	email.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Localizando conta...";

  const send = async function() {

    const rawResponse = await fetch(config.passrecovery, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({email:email.value})

    });

    const post = await rawResponse.json();

    if(post.status){

      status.innerHTML="A senha enviada por email";				
      sA(status,"class","sucess");

    }else{

      status.innerHTML="Email não encontrado";
      email.setAttribute('class','error');

    }

  }

  send(); 

}



/* function recovery(){
  
	var config      = JSON.parse(localStorage.config); 

	var email 	 = goi('email');
	var status   = goi('status');
  var suites = document.body.getAttribute("suites");
	
	email.setAttribute('class','');
	
	sA(status,"class","loading");
	status.innerHTML="";
	status.innerHTML="Localizando conta...";
	
	var url = localStorage.getItem("url")+'/admin/json/jsonLoginRecovery.php?email='+email.value+'&suite='+suites;
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

		
			if(authentic==1){
				
				//success

				status.innerHTML="A senha enviada por email";				
				sA(status,"class","sucess");
			
			
			}else{
				
				sA(status,"class","error");
				
				if(authentic==2){

					//blank username
					sA(email,"class","error");
					status.innerHTML="Campo vazio";

				}else if(authentic==3){

					//blank password
					sA(password,"class","error");
					status.innerHTML="Campo vazio";
					
				}else if(authentic==501){

					//wrong usernme
					status.innerHTML="Usuário não encontrado";
					email.setAttribute('class','error');

				}else if(authentic==502){	

					//wrong password
					status.innerHTML="Senha inválida";
					password.setAttribute('class','error');

				}else if(authentic==503){

					//deactivated account
					status.innerHTML="Conta desativada";

				}else{
					
					status.innerHTML="Erro desconhecido";
					
				}
				
				setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 5000);
				
			}
		}
	}; 

	setTimeout(function () {
		
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	}, 1000);

	
}
*/

function getLoginStatus(){
  
	console.log("Checking login status");
  
	var url = localStorage.getItem("url")+'/admin/json/jsonLogin.php';
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);
			            
        console.log("-- Insert data [authentic.suitesinfo]");
			  localStorage.suitesinfo=JSON.stringify(authentic.suitesinfo);
      
				if(authentic.status=="1"){
				
					//success
					loadLogged(authentic);
          //console.log(authentic);
          document.body.setAttribute('logged','1');
          
          document.body.setAttribute('open','1');
          loopCheck();
      
				}else{
          
          document.body.setAttribute('open','0');
					document.body.setAttribute('logged','0');
					//fail
		      pagesLoad();
					mountLogin(authentic);

				}
      
		}
    
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

const modal = function(){




  
  var user      = JSON.parse(localStorage.user);

  var body    = got(document,'body')[0];

  var modal   = createObject('{"tag":"modal"}');

      modal.append(modalProntuarios());

    //if(user.customforms){
     
          if(user.areas=='100') {

            modal.append(modalMVB());
            modal.append(modalRemedios());
            
          }

          modalUsers();

    //}

  body.append(modal);
  
}


const modalMVB = function(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Médicos do Brasil"}');
  
  let content = createObject('{"tag":"content"}');

  let icon    = createObject('{"tag":"icon","class":"icon-file-text2"}');
  let p       = createObject('{"tag":"p","innerhtml":"Formulário para ser preenchido antes do atendimento médico."}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Preencher"}');
  
      content.onclick=(function(){formEdit("mvb")});
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;


}


const modalMVBCheckFields = async function() {

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const rawResponse = await fetch(config.form, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session:user.session,modules:"users"})

  });

  const data = await rawResponse.json();

  let x = 0;
  let text = "";

  Object.entries(data.form.fields).forEach(([key, value]) => {

    if(value.value){

        x++;

    }else{

        text+="<li>"+value.label+"</li>";

    }

  });

  return text;

}



function modalProntuarios(){

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let icon    = createObject('{"tag":"icon","class":"icon-folder-open"}');
  let p       = createObject('{"tag":"p","innerhtml":"Bem-vindo ao Doctor8, clique aqui para começar"}');
  let button  = createObject('{"tag":"button","type":"button","innerhtml":"Acessar meus arquivos"}');
  
      content.onclick=(function(){modulesOpen('prontuarios')});
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;

}

const modalRemedios =  function() {

  var div     = createObject('{"tag":"div"}');

  var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
  var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
  
  let content = createObject('{"tag":"content"}');
  let icon    = createObject('{"tag":"icon","class":"icon-aid-kit"}');
  let p       = createObject('{"tag":"p","innerhtml":"Meus medicamentos em uso"}');

      content.onclick=(function(){modulesOpen('usersremedios');}); 
  
      header.append(title);
      content.append(icon,p);

      div.append(header,content);

  return div;

}


const modalUsers = async function(){

  let text = await modalUsersCheckFields();

  if(text){

    let li = "<ul>"+text+"</ul>";

    var div     = createObject('{"tag":"div"}');

    var header  = createObject('{"tag":"header","style":"background-color:#176B89;"}');
    var title   = createObject('{"tag":"label","innerhtml":"Aviso"}');
    
    let content = createObject('{"tag":"content"}');
    let p       = createObject('{"tag":"p","innerhtml":"Seu cadastro está incompleto'+li+'"}');
    let button  = createObject('{"tag":"button","type":"button","innerhtml":"Completar cadastro"}');
    
        button.onclick=(function(){

          formEdit("users");

          rE(this.parentElement.parentElement);

          });
    
    header.append(title);
    content.append(p,button);

    div.append(header,content);

    document.querySelector("modal").append(div);

  }


}


const modalUsersCheckFields = async function() {

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const rawResponse = await fetch(config.form, {

    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session:user.session,modules:"users"})

  });

  const data = await rawResponse.json();

  let x = 0;
  let text = "";

  Object.entries(data.form.fields).forEach(([key, value]) => {

    if(value.value){

        x++;

    }else{

        text+="<li>"+value.label+"</li>";

    }

  });

  return text;

}

function category(header,item,id,label){
  
  if(id){
		
		var icon = cE("category");
    
/*     if(array.filename){
      
      let categoryfilename = array.filename;
      
      let categorystyleimage="url("+localStorage.getItem("img")+"/"+categoryfilename+")";
     
    }
     */
		icon.appendChild(cT(label));

		header.appendChild(icon);

		item.setAttribute("category",id);

    
	}	
  
}

function loadItem(item,array){
  
  var header = cE("header");
  
  var footer = cE("footer");

  if(array.me!==undefined){
    item.setAttribute('me',array.me);
  }
  if(array.a!==undefined){
    item.setAttribute("a",array.a);
  }
   
  item.setAttribute("view","0");
  
  if(array.me==true){
    
  }else{
    
      var iconshare = document.createElement("icon");
          iconshare.setAttribute("class","icon-share2");
    
      header.appendChild(iconshare);
    
  }
  
  
  if(array.category!==undefined && array.category!==null){item.appendChild(header); } 
  
  //loadInfo(header,array);
	
  loadPacientes(header,array.jsonpacientes);
  
  category(header,item,array.category,array.categorylabel);

  if(array.label!==""){
	  modulesLoadItemContent(item,array);
  }
  
  if(array.jsonpacientes){

    loadPacientesFull(item,array.jsonpacientes);

  }
  
  loadItemOptions(item,array);
  itemDetail(item,array);
  loadMedicos(item,array.jsonmedicos);
  loadShare(item,array);
  loadItemUpdateTime(footer,array);

  if(footer.innerHTML!=""){item.appendChild(footer);}

}

function itemDetail(item,data){

  if(data.files){

    var detalhes = cE("detalhes");

    Object.entries(data.files).forEach(([key, value]) => {
          
      detalhes.appendChild(itemDetailFigure(value));	

    });

    item.appendChild(detalhes);

  }

}

function itemDetailFigure(data){


      var config = JSON.parse(localStorage.config);

      let figure = createObject('{"tag":"figure"}');

			let split  =data.filename.split(".");

      let extensao = split[1];
      let filename = split[0];

      let onclick = "";

      switch(extensao) {

      case "jpg": 

          let url = config.img+filename+".jpg?key="+data.key;

          onclick="window.open('"+url+"','_blank');"
          figure.setAttribute("onclick",onclick);

        break;

      case "pdf": 

        onclick = "window.open('"+config.pdf+filename+".pdf','_blank');"
        

        let label = createObject('{"tag":"label","innerhtml":"pdf"}');

            figure.setAttribute("onclick",onclick);
            figure.append(label);

        break;
      }        

			figure.style.backgroundImage="url("+config.imgp+filename+".jpg?key="+data.key+")";
		
return figure;
}


function loadMedicos(elements,array){
  
   if(array){

      var medico   = createObject('{"tag":"medicos"}');

      var div   = createObject('{"tag":"div"}');

      var icon   = createObject('{"tag":"icon","class":"icon-reddit"}');
      
      div.append(createObject('{"tag":"label","innerhtml":"Médico: "}'));
      div.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));


      medico.appendChild(div);
      elements.appendChild(medico);
     
   }

}


function modulesLoad(array) {

    let tabela   = createObject('{"tag":"tabela"}');

    var modules = document.body.getAttribute("modules");

    Object.entries(array).forEach(([key, value]) => {

      let item   = createObject('{"tag":"item","c":"'+value.id+'"}');

        if (modules == "medicos" || modules == "pacientes" || modules == "formcovid") {

            loadItemView(item, value);

        } else {

            loadItem(item, value);

        }

        tabela.append(item);

    });
    
    return tabela;

}

function modulesLoadCalendar(){
  
  let calendar    = createObject('{"tag":"calendar"}');
  let div         = createObject('{"tag":"div","id":"myCalendar","class":"vanilla-calendar"}');
  let events      = createObject('{"tag":"events"}');
  let newevent    = createObject('{"tag":"button","type":"button","innerhtml":"Agendar consulta"}');
  let list        = createObject('{"tag":"list"}');
  let consulta    = createObject('{"tag":"div"}');
  
  consulta.innerHTML="15/10/2020 - Cláudia Solmucci - Oncologia";

  list.append(consulta);
  events.append(newevent,list);
  calendar.append(div,events);

  document.body.append(calendar);
  
  let myCalendar = new VanillaCalendar({
    
      selector: "#myCalendar",
      onSelect: (data, elem) => {

          var data  = new Date(data.date);
        
          var dia = data.getDate().toString().padStart(2, '0');
          var mes = (data.getMonth()+1).toString().padStart(2, '0');
          var ano = data.getFullYear();

          console.log(ano+"-"+mes+"-"+dia);

      }
    
  });
  
}


function newevent(){
  
  
}

function loadInfo(header,array){
  
  var icon = document.createElement("icon");
      icon.setAttribute("class","icon-info");
  
  var formatter = new Intl.DateTimeFormat("pt", { month: "short" });
	
	var mes       = formatter.format(new Date(array.dataextenso));
	
	var date      = new Date(array.dataextenso);
  
	var dia       =  date.getDate()
  
	var text = cT(array.data);
	var postdata = document.createElement("data");
			//postdata.appendChild(text);
			postdata.setAttribute("title","Codigo\n"+array.codigo+"\n\nData\n"+array.data+"\n\nCriado por\n"+array.userslabel);
  
      postdata.appendChild(icon);
  
 header.appendChild(postdata);
  
}

function actionButton(element,fields,table,array){
  
  var value     = element.getAttribute("value");

  var xmlhttp;
  
  element.onclick=(function(){

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      
      var item = gibc(array.codigo);
      var json = JSON.parse(xmlhttp.responseText);
      

      for (const [key, value] of Object.entries(json[0])) {
             
        item.setAttribute(key,value)
   
        
      }
      
    }}


    var data = new FormData();

        data.append('w', 'codigo|'+array.codigo);
        data.append('f', fields+'|'+value);
        data.append('t', table);

    var url 	= localStorage.getItem("url")+'/admin/json/jsonUpdateFields.php';

    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);  
  
  });
  
}

function modulesLoadItemContent(item,array){
  
  var p 	 = cE('p');

  p.appendChild(cT(array.label));

  item.appendChild(p);
  
}

function loadItemOptions(elements,array){
  
    let options = createObject('{"tag":"options"}');
  
  	if(array.me==true){
    
      let edit = createObject('{"tag":"button","action":"edit","class":"icon-pencil"}');

	    edit.onclick=( async function(){ 

			  document.body.setAttribute("loading","1");
         await formEdit(gA(),array.id)
      
      });
      
      options.append(edit);
      
    }
  
      let view = createObject('{"tag":"button","action":"view","class":"icon-enlarge"}');
  
 	        view.onclick=(function(){ 
        
            document.querySelector("item[c='"+array.id+"']").setAttribute("view","1");
      
          });
  
      let close = createObject('{"tag":"button","class":"icon-shrink","action":"close"}');

          close.onclick=(function(){ 

            document.querySelector("item[c='"+array.id+"']").setAttribute("view","0");

          });
    
    options.append(view);
    options.append(close);
    

    
    elements.appendChild(options);


}

function loadItemUpdateTime(elements,array){

  let elementocreated = document.createElement("created");
  let elementoupdated = document.createElement("updated");
  let elementodata    = document.createElement("data");
  
  let data            = new Date(array.update);
  let createddata     = new Date(array.created_at);
  
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  let update  = data.toLocaleDateString('pt-BR', options);
  
  let created = createddata.toLocaleDateString('pt-BR', options);
  
  let updatetext  = "Editado "+update;
     
  let createdtext = "Criado "+created;

    elementoupdated.append(document.createTextNode(updatetext));
    elementocreated.append(document.createTextNode(createdtext));

    elementodata.append(elementocreated);
  
  if(array.created_at!==array.update){
    
    elementodata.append(elementoupdated); 
    
  }

  if(array.created_at!==null && array.created_at!==undefined){
    
      elements.append(elementodata);
    
  }

}

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

function loadItemDetail(elements,array){

	if(array.files!==undefined ){
    
		var detalhes = cE("detalhes");
    
		for(var y=0;((y<array.files.length));y++){
			
			var figure = cE("figure");
			
      		figure.style['border']="2px solid "+array.categorycolors+"40";
      
			var filename=array.files[y].filename.split(".");
			var key=array.files[y].key;
      
      if(array.me!=="1"){
        
          if(filename[1]=="jpg"){

            figure.setAttribute("onclick","window.open('"+localStorage.getItem("url")+"/admin/json/jsonAnexosView.php?anexos="+array.anexos+"','_blank');");
            
          }else if(filename[1]=="pdf"){
    
            var label = cE("label");
            label.appendChild(cT("pdf"));
            figure.appendChild(label);
            figure.setAttribute("onclick","window.open('"+localStorage.getItem("pdf")+""+filename[0]+".pdf','_blank');");
  
          }    
        
      }else{

          if(filename[1]=="jpg"){

          }else if(filename[1]=="pdf"){

            var label = cE("label");
            
            label.appendChild(cT("pdf"));
            figure.appendChild(label);
            
          }          
        
      }
               
			figure.style.backgroundImage="url("+localStorage.getItem("imgp")+filename[0]+".jpg?key="+key;
			detalhes.appendChild(figure);	
				
		}
    
    elements.appendChild(detalhes);
	}		

}

function loadPacientesFull(element,array){

  if(array){
        
      var now      = new Date().getFullYear();
      var birthday = new Date(array.nascimento).getFullYear();
      var age      = (now - birthday);
    
      var rua           = (array.rua)?array.rua:"";
      var numero        = (array.numero)?" "+array.numero:"";
      var complemento   = (array.complemento)?", "+array.complemento:"";
      var bairro        = (array.bairro)?" - "+array.bairro:"";
      var cidade        = (array.cidade)?" - "+array.cidade:"";
      var estado        = (array.estado)?" - "+array.estado:"";
    
      var endereco   = rua+numero+complemento+bairro+cidade+estado;
      
      var nascimento = (array.nascimento)?age:"Não informado";  
      var telefone   = (array.telefone)?array.telefone:"Não informado";  
      var whatsapp   = (array.whatsapp)?new String(array.whatsapp):"";  
      var label      = (array.label)?array.label:"Não informado";  
      var cpf        = (array.cpf)?array.cpf:"Não informado";  
      var identidade = (array.identidade)?array.identidade:"Não informado";  
      var email      = (array.email)?array.email:"Não informado";  
    
    
      var eEndereco   = createObject('{"tag":"endereco","innerhtml":"Endereço : '+endereco+'"}');
      var eNascimento = createObject('{"tag":"nascimento","innerhtml":"Idade : '+nascimento+'"}');
      var eTelefone   = createObject('{"tag":"telefone","innerhtml":"Telefone : '+telefone+'"}');
      var eEmail      = createObject('{"tag":"email","innerhtml":"Email : '+email+'"}');
      var eCPF        = createObject('{"tag":"cpf","innerhtml":"CPF : '+cpf+'"}');
      var eIdentidade = createObject('{"tag":"identidade","innerhtml":"Identidade : '+identidade+'"}');
      var eWhatsapp   = createObject('{"tag":"icon","class":"icon-whatsapp"}');
      var eOpen       = createObject('{"tag":"icon","class":"icon-profile"}');
    
      let ePacientes  = createObject('{"tag":"pacientes"}');
      let eDiv        = createObject('{"tag":"div"}');
      let eLabel      = createObject('{"tag":"label","innerhtml":"Paciente : '+label+'"}');
      
      eLabel.append(eOpen);
      
      eDiv.append(eLabel,eEmail,eEndereco,eNascimento,eTelefone,eCPF,eIdentidade);
    
      if(whatsapp.length==13){
    
        eWhatsapp.onclick=(function(){
    
          window.open('https://api.whatsapp.com/send?phone='+whatsapp,'_blank');
    
        });
    
        eDiv.append(eWhatsapp);
    
      }
    
        eLabel.onclick=(function(){
          
          let open = this.parentElement.parentElement;
    
          console.log(open.getAttribute('open'));
    
          if(open.getAttribute('open')=="1"){
            
             open.setAttribute('open','0');
            
          }else{
    
            open.setAttribute('open','1');
            
          }
          
         
        
        });
      
      ePacientes.append(eDiv);
      element.append(ePacientes);
    
  }
  
}


function loadPacientesInfo(element,array){
  
     element.mouseover(function(){
            

      var xmlhttp;

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);
          
          let today = new Date().getFullYear();
          
          
          if(json[0].nascimento!==null){
            
            var nasc  = new Date(json[0].nascimento).getFullYear();
            var age   = Math.abs(today - nasc);
            
          }else{
            
            var age="Nao informado";
            
          }
          
          
          
          let texto=json[0].label;
              texto+="\n Telefone: "+json[0].telefone;
              texto+="\n Email: "+json[0].email;          
              texto+="\n CPF: "+json[0].cpf;          
              texto+="\n Endereço: "+json[0].endereco;          
              texto+="\n Idade: "+age;          
       
          element.setAttribute('title',texto);
             // tooltipmenu(label2,texto);
          
        }

      };
       
      var data = new FormData();
       
          data.append('p','users|label|email|telefone|cpf|endereco|nascimento'); 
          data.append('w','codigo|'+array.pacientescodigo);
       
      var url = localStorage.getItem("url")+'/admin/json/jsonGetTableView.php';

      xmlhttp.open("post", url, true);
      xmlhttp.send(data);  
       
       
    });

   }

function loadShare(element, array) {

  if (array.share !== null && array.share !== undefined) {

    let share      = createObject('{"tag":"share"}');

    Object.entries(array.share).forEach(([key, value]) => {
    
      let div      = createObject('{"tag":"div"}');
      let figure   = createObject('{"tag":"figure"}');
      let label   = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');
    
        div.append(figure,label);  
    
        share.append(div);
    
    });


    element.appendChild(share);

  }


}



function modulesLoadTitle(id){
		
		var groups = JSON.parse(localStorage.nav);

    Object.entries(groups).forEach(([key, value]) => {

      Object.entries(value.modules).forEach(([key1, value1]) => {

          if(value1.id==id){

            

          }



      });

    });

    
/* 		var nArray= getValueArray(array,'name',name)[0];
	
		var logo 	= got(document,"logo")[0];
		var span  = cE("span");
		var title = cT(nArray.title);
	
		race(logo);
	
		span.appendChild(title);
		logo.appendChild(span);
	
		 */

}


function loadUser(elements,array){
  
  if(array.userslabel!==undefined){

    var div = cE("div");
    
    var user = cE('user');
    
    var icon = cE("icon");
        icon.setAttribute("class","icon-user");

    var label = cE("label");
        label.appendChild(cT("Criado por: "));
    div.appendChild(label);
    var label2 = cE("label");
        label2.appendChild(cT(array.userslabel));

    //div.appendChild(icon);
    div.appendChild(label);    
    div.appendChild(label2);
    
    user.appendChild(div);
    
    elements.appendChild(user);
    
  }
  
}


const modulesOpen = async function(url){

	var body    = document.querySelector("body");
  var view    = document.querySelector("view");
  
	var modules = getModulesByUrl(url);
  
      body.setAttribute('modules',modules.url)
  
	    race(view);
  
	var tips    = createObject('{"tag":"tips","innerhtml":"Preencha este formulário antes do atendimento médico. "}');

      tips.onclick=( async function(){

        
        
      });
  
	var menu    = createObject('{"tag":"menu"}');

      menu.append(btNew(),btFilter());
  /*     view.append(tips); */
      view.append(menu); 
  
      switch (modules.url) {
          
        case 'usersremedios'   :usersremedios();  break;
        case 'social'          :social();         break;
        case 'prontuarios'     :prontuarios();    break;
          
        default:tabelaLoad(modules);
    
      }
  
}

const mvb_form = (modules,id,header) =>{
  
  document.body.setAttribute("loading","1");
  
  gridShow();
  
  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f300'

  const eId               = (id)?id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;
  
  const send = async function() {
    
    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({euuid:user.session,eid:id})

    });

    const data = await rawResponse.json();
          data.id = id;
	               await formMountFields(modules,data);

   document.body.removeAttribute("loading");

  }

  send();
  

  
}

const mvb_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  var fieldlabel="";

  Object.entries(data.fieldlabel).forEach(([key, value]) => {

      if(data.fieldlabel[key] && key!=='welcome'){
            fieldlabel+=''+value.label+'\n';
            fieldlabel+=value.value+'\n\n'; 
      }
    
  });

 data.fieldlabel=fieldlabel;
  
  const send = async function(data) {

    const updated_data = await mvb_update(data);
  
    /*     prontuarios_reload(updated_data); */
    
    document.body.removeAttribute("loading");
    
  }

  send(data); 
  
/*   document.body.removeAttribute("loading"); */
  
}


const mvb_update = async function(data) {
  console.log("loading");
  document.body.setAttribute("loading","1");
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u300v1'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {
    
    'euuid':user.session,
    'data':data

  }
 
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });
  

  
  return await response.json();
  
}

function loadPacientes(element,array){

   if(array){

      var ePaciente   = createObject('{"tag":"pacientes"}');
      var eDiv        = createObject('{"tag":"div"}');
      var eIcon       = createObject('{"tag":"icon","class":"icon-user"}');
     // var eId         = createObject('{"tag":"id"}');

      eDiv.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));
      eDiv.append(createObject('{"tag":"id","innerhtml":"'+array.id+'"}'));


      ePaciente.append(eDiv);
      element.appendChild(ePaciente);
     
   }

}

const social = async function(data){

  let json    = (data==undefined)?await social_select(null):data;

  let view    = document.querySelector('view');

  if(view.querySelector('tabela')){

    var tabela  = view.querySelector('tabela');

    race(tabela);
    
  }else{
    
    var tabela  = createObject('{"tag":"tabela"}');
    
  }

  var modules = document.body.getAttribute("modules");

  Object.entries(json).forEach(([key, value]) => {

    let eId = '{"tag":"item","c":"'+value.id+'"}';

    let item   = createObject(eId);

    social_item(item,value);
        
    tabela.append(item);

  });

  view.append(tabela);
  
  document.body.setAttribute("loading","0");
  
  window.onscroll=null;  

}

const social_form = (modules,id,header) =>{
  
  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f600'

  
  const eId               = (id)?id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;
  
  const send = async function() {
    
    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({euuid:user.session,eid:id})

    });

    const data = await rawResponse.json();

	               await formMountFields(modules,data);

    document.body.removeAttribute("loading");

  }

  send();

}

const social_item = (item,value) =>{

  if(value.label!==""){

    let eP = '{"tag":"p","innerhtml":"'+value.label+'"}';
      
    item.append(createObject(eP));
  
  }

  //loadItemOptions(item,value)

}

const social_reload = (data) =>{

    var user    = JSON.parse(localStorage.user);
    var config  = JSON.parse(localStorage.config);

    if(data.length==1){
    
        const send = async function() {
        
          var item = document.querySelector("tabela item[c='"+data[0].id+"']");
        
          race(item);
          
          social_item(item,data[0]);
          
          document.body.removeAttribute("loading");
          
        }
        
        send();
       
    }else if(data.length>1){
       
      social(data);
       
    }else{
       
      console.log('sem dados');
      
    } 

}

const social_select = async function() {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s600'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function
  
  let param = {'euuid':user.session}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();
  
}

const social_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const updated_data = await social_update(data);
    
    social_reload(updated_data);

  }

  send(data); 

}


const social_update = async function(data) {
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u600'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {'eid':eId,'elabel':data.label,'eshare':data.share,'euuid':user.session}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });

  return await response.json();
  
}

function tabelaLoad(json){

  window.onscroll=null;

  var config        = JSON.parse(localStorage.config);
  var user          = JSON.parse(localStorage.user);
  let view          = got(document,'view')[0];

  let modules       = (json)?json.url:gA();
  let match         = {};

  match["uuid"]=user.session;

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,match:match, modules: modules})

    });

    const data = await rawResponse.json();

    /* rE(got(document,"box")); */

    boxFilter();

    document.body.setAttribute("loading","0");

    const tabela = modulesLoad(data);

    view.append(tabela); 

    if(modules=="prontuarios" || modules=="prontuariosmedicos" || modules=="pacientes" || modules=="usersremedios"){

        window.onscroll=lazyload;   

    }
    
  })();

}

function tabelaLoadByFilter(){

  rE(got(document,'tabela'));

  var config        = JSON.parse(localStorage.config);
  var user          = JSON.parse(localStorage.user);

  let view          = got(document,'view')[0];

  const selectsearch = document.querySelectorAll("selectsearch")

  let match = {};

  Object.entries(selectsearch).forEach(([key, value]) => {

    let i = value.getAttribute('id');
    let m = value.getAttribute('modules');

    if(i){

      //f.push(JSON.parse('{"'+m+'":'+i+'}'));
      match[m]=i;

    }

  });

match["uuid"]=user.session;



  rE(got(document,"tabela"));

  let modules       = gA();

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session:user.session,modules: modules, match: match})

    });

    const data = await rawResponse.json();

    document.body.setAttribute("loading","0");
    view.append(modulesLoad(data)); 
    
  })();

}

const users_form = (modules,id,header) =>{
  
  document.body.setAttribute("loading","1");
  
  gridShow();
  
  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f1'

  const eId               = (id)?id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;
  
  const send = async function() {
    
    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({euuid:user.session,eid:id})

    });

    const data = await rawResponse.json();
          data.id = id;
	               await formMountFields(modules,data);

   document.body.removeAttribute("loading");

  }

  send();
  

  
}

const users_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const updated_data = await users_update(data);
    
    /*     prontuarios_reload(updated_data); */
document.body.removeAttribute("loading");
  }

  send(data); 
  
/*   document.body.removeAttribute("loading"); */
  
}


const users_update = async function(data) {
  console.log("loading");
  document.body.setAttribute("loading","1");
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u1'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {
    
    'euuid':user.session,
    'data':data

  }
 
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });
  

  
  return await response.json();
  
}

const usersremedios = async function(data){

  let json    = (data==undefined)?await usersremedios_select(null):data;

  let view    = document.querySelector('view');

  if(view.querySelector('tabela')){

    var tabela  = view.querySelector('tabela');

    race(tabela);
    
  }else{
    
    var tabela  = createObject('{"tag":"tabela"}');
    
  }

  var modules = document.body.getAttribute("modules");

  Object.entries(json).forEach(([key, value]) => {

    let eId = '{"tag":"item","c":"'+value.id+'"}';

    let item   = createObject(eId);

    usersremedios_item(item,value);
        
    tabela.append(item);

  });

  view.append(tabela);
  
  document.body.setAttribute("loading","0");
  
  window.onscroll=null;  

}

const usersremedios_item = (item,value) =>{

  if(value.label!==""){

    let eP = '{"tag":"p","innerhtml":"'+value.label+'"}';
      
    item.append(createObject(eP));
  
  }

  if(value.posologia!==""){
  
    let P = '{"tag":"p","innerhtml":"'+value.posologia+'"}';
      
    item.append(createObject(P));
    
  }

  loadItemOptions(item,value)

  
}

const usersremedios_reload = (data) =>{

    var user    = JSON.parse(localStorage.user);
    var config  = JSON.parse(localStorage.config);

     if(data.length==1){
    
        const send = async function() {
        
          var item = document.querySelector("tabela item[c='"+data[0].id+"']");
        
          race(item);
          
          usersremedios_item(item,data[0]);
          
          document.body.removeAttribute("loading");
          
        }
        
        send();
       
    }else if(data.length>1){
       
      usersremedios(data);
       
    }else{
       
      console.log('sem dados');
      
    } 

}

const usersremedios_select = async function() {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s500'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function
  
  let param = {'euuid':user.session}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();
  
}

const usersremedios_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const updated_data = await usersremedios_update(data);
    
    usersremedios_reload(updated_data);

  }

  send(data); 

}


const usersremedios_update = async function(data) {
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u500'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {'eid':eId,'eremedios':data.remedios,'eposologia':data.posologia,'euuid':user.session}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });

  return await response.json();
  
}

const prontuarios = async function(data){
document.body.setAttribute("loading","1");
  let json    = (data==undefined)?await prontuarios_select(null):data;

  let view    = document.querySelector('view');

  if(view.querySelector('tabela')){

    var tabela  = view.querySelector('tabela');

    race(tabela);
    
  }else{
    
    var tabela  = createObject('{"tag":"tabela"}');
    
  }

  var modules = document.body.getAttribute("modules");

  Object.entries(json.page).forEach(([key, value]) => {

    let eId    = '{"tag":"item","c":"'+value.id+'"}';

    let item   = createObject(eId);

                 prontuarios_item(item,value);
                    
                 tabela.append(item);

  });

  view.append(tabela);
  
  document.body.setAttribute("loading","0");
  
  boxFilter();
  
  window.onscroll = prontuarios_lazyload;  

}

const prontuarios_chat = async function(element,array) {
  
    let chat        = createObject('{"tag":"chat"}');
    let viewchat    = createObject('{"tag":"viewchat"}');
    let formchat    = createObject('{"tag":"formchat"}');
  
    let inputchat   = createObject('{"tag":"input","placeholder":"Digite um comentário"}');
    let inputbutton = createObject('{"tag":"button","innerhtml":"Enviar"}');
    let iconloading = createObject('{"tag":"icon","class":"icon-spinner9"}');
  
        inputbutton.onclick=(async function(){

          if(this.parentElement.querySelector('input').value!==''){

            this.disabled = true;
            
            let json = await prontuarios_chat_insert(this);
      
            /* prontuarios_chat_reload(element,json); */
              
            this.disabled = false;
            
            inputchat.value="";
            
          }
          
        });

        inputchat.addEventListener("keypress", function(event) {

          if (event.key === "Enter") {
  
            this.parentElement.querySelector("button").click();
            
          }
          
        });
  
    formchat.append(inputchat,inputbutton,iconloading);
    chat.append(viewchat,formchat);
  
    element.appendChild(chat);
  
}

const prontuarios_chat_insert = async function(element) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u133chatv1'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function

  let label = element.parentElement.querySelector("input").value;
  let id    = element.parentElement.parentElement.parentElement.getAttribute("c");

  
  let param = {'euuid':user.session,'label':label,'prontuarios':id}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  
  
  return await response.json();
}

const prontuarios_chat_reload = async function(element,ejson) {
  
  config = JSON.parse(localStorage.config);
  
  if(ejson!==undefined){
  
      var json = ejson;
    
  }else{
    
      var json = await prontuarios_chat_select(element);
    
  }

  let viewchat = element.querySelector('viewchat');
  
/*   if(json.chat){
  race(viewchat);  
  } */
  console.log(json.chat.length);
  if(json.chat.length){
    
    Object.entries(json.chat).forEach(([key, value]) => {
  
      let users      = createObject('{"tag":"userslabel","innerhtml":"'+value.userslabel+'"}');
      let created_at = createObject('{"tag":"created_at","innerhtml":"'+value.created_at+'"}');
      let label      = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');
      let figure     = createObject('{"tag":"figure"}');
      let message    = createObject('{"tag":"message"}');
      let post       = createObject('{"tag":"post","chat_id":"'+value.id+'"}');
  
          message.append(created_at,users,label);
          post.append(figure,message);
          viewchat.append(post);
  
          if(value.files){
            
            let url = config.imgp+value.files[0].filename+'?key='+value.files[0].key;
            
                figure.setAttribute("style","background-image:url('"+url+"')");
            
          }
      
    });


    
/*   race(viewchat); */
    viewchat.scrollTop = viewchat.scrollHeight;
    
  }
  
  
}

const prontuarios_chat_select = async function(element) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s133chatv1'
  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function
 
  let id      = element.getAttribute('c');

  let post    = element.querySelector("chat post:last-child");
  
  let last_id = (post)?post.getAttribute("chat_id"):null;
  
  let param   = {'euuid':user.session,'prontuarios':id,'last_id':last_id}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();

}

const prontuarios_form = (modules,id,header) =>{
  
  document.body.setAttribute("loading","1");
  
  gridShow();
  
  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/f133'

  
  const eId               = (id)?id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;
  
  const send = async function() {
    
    const rawResponse = await fetch(url, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
      body: JSON.stringify({euuid:user.session,eid:id})

    });

    const data = await rawResponse.json();
          data.id = id;
	               await formMountFields(modules,data);

    document.body.removeAttribute("loading");

  }

  send();

}

const prontuarios_item = (item,value) =>{
  
  var header = cE("header");
  
  var footer = cE("footer");

      item.setAttribute('me',value.me);
    
      item.setAttribute("a",value.a);

      item.setAttribute("view","0");
  
      if(value.me==false){
        
          var iconshare = document.createElement("icon");
              iconshare.setAttribute("class","icon-share2");
        
          header.appendChild(iconshare);
        
      }
    
      item.append(header); 
  	
      loadPacientes(header,value.jsonpacientes);
      
      category(header,item,value.category,value.categorylabel);
  
      let text = cT(value.label);
      
      let eP = '{"tag":"p"}';
      
      let object = createObject(eP)
    
          object.append(text);
  
          if(value.label){
            
            item.append(object);
            
          }
     
          loadPacientesFull(item,value.jsonpacientes);
         
          prontuarios_options(item,value)
      
          itemDetail(item,value);
          loadMedicos(item,value.jsonmedicos);
          loadShare(item,value);
          prontuarios_chat(item,value);
          loadItemUpdateTime(footer,value);
        
          if(footer.innerHTML!=""){
            
            item.appendChild(footer);
            
          }
  
}

  const prontuarios_lazyload = async function() {
        
    var config        = JSON.parse(localStorage.config);
    var user          = JSON.parse(localStorage.user);
    
    var modules       = document.body.getAttribute("modules");
    var rolled        = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height        = document.documentElement.scrollHeight;
    var tabela        = document.querySelectorAll("tabela")[0];

    if ((rolled) > (height-10)) {
        
        window.onscroll = null;
  
        const selectsearch = document.querySelectorAll("selectsearch")
  
        let match = {};
  
        Object.entries(selectsearch).forEach(([key, value]) => {
  
          let i = value.getAttribute('id');
          let m = value.getAttribute('modules');
  
          if(i){
  
            //f.push(JSON.parse('{"'+m+'":'+i+'}'));
            match[m]=i;
  
          }
  
        });
  
        match["uuid"]=user.session;
  
        var offset = got(got(document,"tabela")[0],"item").length;
  
        document.body.setAttribute("loading","1");
  
        const data = await prontuarios_select(offset);
  
        Object.entries(data.page).forEach(([key, value]) => { 
          
          let item = createObject('{"tag":"item","c":"'+value.id+'"}');
          
          prontuarios_item(item,value);
          
          tabela.append(item);
          
        });
  
        document.body.setAttribute("loading","0");
        
       window.onscroll=prontuarios_lazyload;


    }

}

const prontuarios_options = async function(element,array) {
  
    let options = createObject('{"tag":"options"}');
  
  	if(array.me==true){
    
      let edit = createObject('{"tag":"button","action":"edit"}');
      
      let iconedit  = createObject('{"tag":"icon","class":"icon-pencil"}');
      let labeledit = createObject('{"tag":"label","innerhtml":"Editar"}');

      edit.append(iconedit,labeledit);
      
	    edit.onclick=( async function(){ 

        document.body.setAttribute("loading","1");
        await prontuarios_form(gA(),array.id)
      
      });
      
      options.append(edit);
      
    }
    
    let chatview       = createObject('{"tag":"button","action":"chatview"}');
    let iconlchatview  = createObject('{"tag":"icon","class":"icon-bubbles3"}');
    let labelchatview  = createObject('{"tag":"label","innerhtml":"Discussão"}');
  
        chatview.append(iconlchatview,labelchatview);
  
        chatview.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","1");
          
          prontuarios_chat_reload(element);
        
        });

    let chatclose       = createObject('{"tag":"button","action":"chatclose"}');
    let iconchatclose   = createObject('{"tag":"icon","class":"icon-bubbles3"}');
    let labelchatclose  = createObject('{"tag":"label","innerhtml":"Fechar"}');
  
        chatclose.append(iconchatclose,labelchatclose);
        chatclose.onclick=( async function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("chat","0");
        
        });
    
        options.append(chatview,chatclose);
    
    let view = createObject('{"tag":"button","action":"view"}');
    let iconview  = createObject('{"tag":"icon","class":"icon-enlarge"}');
    let labelview  = createObject('{"tag":"label","innerhtml":"Expandir"}');
  
        view.append(iconview,labelview);

        view.onclick=(function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("view","1");
        
        });
    
    let close       = createObject('{"tag":"button","action":"close"}');
    let iconclose    = createObject('{"tag":"icon","class":"icon-shrink"}');
    let labelclose   = createObject('{"tag":"label","innerhtml":"Fechar"}');
  
        close.append(iconclose,labelclose);
      
        close.onclick=(function(){ 
        
          document.querySelector("item[c='"+array.id+"']").setAttribute("view","0");
        
        });
    
    options.append(view);
    options.append(close);
    element.append(options);


}

const prontuarios_reload = (data) =>{

    var user    = JSON.parse(localStorage.user);
    var config  = JSON.parse(localStorage.config);

var page = data.page;

  
     if(page.length==1){
    
        const send = async function() {
        
          var item = document.querySelector("tabela item[c='"+data.page[0].id+"']");
        
          race(item);
          
          prontuarios_item(item,page[0]);
          
          document.body.removeAttribute("loading");
          
        }
        
        send();
       
    }else if(page.length>1){
       
      prontuarios(data);
       
    }else{
       
      console.log('sem dados');
      
    } 

}

const prontuarios_select = async function(query_offset) {
  
  const user = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/s133v1'
  const supabasekey       = localStorage.supabasekey;
  
  const url  = supabaseurl + supabase_function
  
  let param = {'euuid':user.session,'query_offset':query_offset,'eid':null}
  
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
    
  });

  return await response.json();
  
}

const prontuarios_send = (data,id) =>{

  const config      = JSON.parse(localStorage.config);
  const user        = JSON.parse(localStorage.user);

  data.id           = id;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const updated_data = await prontuarios_update(data);
    
    prontuarios_reload(updated_data);

  }

  send(data); 

}


const prontuarios_update = async function(data) {
  
  const user              = JSON.parse(localStorage.user);
  
  const supabaseurl       = localStorage.supabaseurl;
  const supabase_function = 'rest/v1/rpc/u133'

  
  const eId               = (data.id)?data.id:'0';

  const supabasekey       = localStorage.supabasekey;
  
  const url               = supabaseurl + supabase_function;

  let param = {
    
    'euuid':user.session,
    'eid':eId,
    'ecategory':data.category,
    'efiles':data.files,
    'epacientes':data.pacientes,
    'elabel':data.label,
    'eshare':data.share

  }
 
  const response = await fetch(url, {

    method: 'POST',
    mode: 'cors',
    headers: {'Accept': 'application/json','Content-Type': 'application/json','apikey':supabasekey},
    body:JSON.stringify(param)
                               
  });

  return await response.json();
  
}

const testinsert = function(){

  let label    = MD5(rnd(20)).slice(0, 12);
  let email    = MD5(rnd(20)).slice(0, 6)+"@testeinsert.com";
  let password = MD5(rnd(20)).slice(0, 6);
  let cep      = "31170660";
  let whatsapp = "5531998765432";
  let cpf      = "90070060050";

  document.querySelector("bt1").click();
  document.querySelector("#btinsert").click();

  document.querySelector("#label").value    = label;
  document.querySelector("#email").value    = email;
  document.querySelector("#password").value = password;
  document.querySelector("#cep").value      = cep;
  document.querySelector("#whatsapp").value = whatsapp;
  document.querySelector("#cpf").value      = cpf;

}

const rnd = (() => {

    const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));

    const sets = {
        num: gen(48,57),
        alphaLower: gen(97,122),
        alphaUpper: gen(65,90),
        special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`]
    };

    function* iter(len, set) {

        if (set.length < 1) set = Object.values(sets).flat(); 
        for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]

    }

    return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);

})();

const loop = async function() {
  
  var e = document.querySelectorAll('[chat="1"]');

  Object.entries(e).forEach(([key, value]) => {

    prontuarios_chat_reload(value);
    
  });

}

