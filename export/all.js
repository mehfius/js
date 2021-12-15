



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
	grade.onclick=(function(){
		
		navClose();
		formClose();

	});
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

          console.log(match);

          var limit = got(got(document,"tabela")[0],"item").length;


          document.body.setAttribute("loading","1");

          const loadLazyJson = async function(limit){
            
              const rawResponse = await fetch(config.urlmodules, {

                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify({

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

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}




function boxFilter(){
  
  const user = JSON.parse(localStorage.user);

  const config = JSON.parse(localStorage.config);

  if(document.getElementsByTagName("boxfilter").length==0){
    
    var box           = document.createElement("boxfilter");
    var filter        = document.createElement("filter");
    var header        = document.createElement("header");
    var menu = document.getElementsByTagName("menu")[0];
    
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
  
  var button = createObject('{"tag":"button","innerhtml":"Filtro","action":"filter"}');
  
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
  
  button.append(icon);
  
  return button;
  
}


  


function btNew(){
	  
  var button = createObject('{"tag":"button","innerhtml":"Novo","action":"new"}');
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-file-empty");

			button.onclick=(function(){

				formNew();

			});
	button.append(icon);
	return button;
	
}

function mountHeader(array){
  
  var user   = JSON.parse(localStorage.user);  
  var config          = JSON.parse(localStorage.config);

	if(!got(document,"header").length){

    var user   = JSON.parse(localStorage.user);  
    var config = JSON.parse(localStorage.config);

		var header = cE("header");

		var icon = cE("icon");
				icon.setAttribute("id","navmenu");
		    icon.setAttribute("class","icon-menu");
    
    var iconSuite= cE("icon");
        iconSuite.setAttribute("class","icon-infinite");
    
		header.appendChild(icon);
   
		var a 			= cE("a");
		var logo    = cE("logo");
		var span    = cE("span");	
		var text    = cT(config.label);

		span.appendChild(text);
		logo.appendChild(span);
		a.appendChild(logo);

		header.appendChild(a);

		icon.onclick=(function(){

			var nav = goi("nav"); 
			nav.setAttribute('class','show');

			gridShow();

		});    

		got(document,"body")[0].appendChild(header);
    
		if(user.areas==1){
      
      header.appendChild(iconSuite);
      header.appendChild(mountMobileVersion());
      
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
     
    header.appendChild(options);
       

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
      a["504"]="Usuário não encontrado";
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
  
  var user   = JSON.parse(localStorage.user);  
  var config          = JSON.parse(localStorage.config);
  var storagenav     = JSON.parse(localStorage.nav);

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

       let label   = value1.label;
       let url    = value1.url;
       let premium = value1.premium;
       let id       = value1.id; 

      var a      = createObject('{"tag":"a","innerhtml":"'+label+'","modules":"'+url+'","premium":"'+premium+'","c":"'+id+'"}');     

     a.onclick=(function(){
        resetHeaderOptions();
        //modulesLoadTitle(c);
        modulesOpen(url);
        navClose();
        gridHide();
       
        //mountRanking();

        document.body.setAttribute("loading","1");
      });


      nav.append(a);

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
  
  var url = localStorage.getItem("url")+"/suites";
  
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
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

		formEdit("users",user.session);
		navClose();
		
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
		
	if(user.figures!==undefined){

		for(var x=0;x<user.figures.length;x++){

			addUploadFilesProfile(result,user.figures[x]);

		}

	}

	div.appendChild(result);

	addUploadFilesProfile(result,null);
	
	profile.appendChild(div);
	profile.appendChild(label);

	
	return profile;

}

function profileUpload(array){


	/*
	var object = cE("input");

	object.setAttribute("type","hidden");
	object.setAttribute("value",array.files);	
	object.setAttribute("name","files");
	
	var attribute = [];

		attribute.tag 		= "input";
		attribute.type 		= "file";
		attribute.name 		= "fileupload";
		attribute.anexos 	= object.getAttribute('value');
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
		attribute.class 	= "icon-upload3";

	var divFileUploadEnviar = cEA(attribute);					

	var attribute = [];

		attribute.tag 		= "label";
		attribute.text 		= "enviar foto";

	var divFileUploadEnviar = cEA(attribute);	

	var attribute = [];

		attribute.tag 		= "uploadedStatus";

	var span = cEA(attribute);	
		

		
	div.appendChild(object);
		
	divFileUpload.appendChild(divFileUploadEnviar);
	divFileUpload.appendChild(fileupload);
		
	div.appendChild(divFileUpload);

	div.appendChild(span);	
		
	*/
	
	var attribute = [];

		attribute.tag 		= "icon";
		attribute.class 	= "icon-pencil";
	
	var icon = cEA(attribute);	
	
	icon.onclick=(function(){
		console.log(array);
		formEdit("users",array.codigo);
		navClose();
	});
	
	var attribute = [];

	attribute.tag 		= "uploadedFiles";

	var result = cEA(attribute);
		
	if(array.figures!==undefined){

		for(var x=0;x<array.figures.length;x++){

			addUploadFilesProfile(result,array.figures[x]);

		}

	}

	div.appendChild(result);
	div.appendChild(icon);
	
	addUploadFilesProfile(result,null);
	
	return div;	
  
}

function addUploadFilesProfile(local,filename){

	var div 				= cE("div");
	var figure 			= cE("figure");

	if(filename!==null){

		sA(figure,"style","background-image:url('"+localStorage.getItem("imgp")+filename+"');");

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


function formEdit(modules,id){
  
  gridShow();
  formMount(modules,id);


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

 /*   const data = await rawResponse.json();

		await formMountFields(modules,data); */


}

function formMountFields(modules,data){

	var user     = JSON.parse(localStorage.user);
	var config   = JSON.parse(localStorage.config);

	var window   = createObject('{"tag":"window","modules":"'+modules+'"}');
	var form     = createObject('{"tag":"form","autocomplete":"off"}');
	var header   = createObject('{"tag":"header"}');
	var label    = createObject('{"tag":"label"}');

	header.append(btBack(data.id),label);

	window.append(header);

  header.append(btHeaderSave(data.id));

	if(data.id){
    
    label.appendChild(cT("Editando "+modules));
    header.appendChild(btHeaderPrint());
    
		got(document,"body")[0].setAttribute("open","1");

    var jsonform = data.form.fields;

	}else{

		window.setAttribute("tutorial","1");
		label.appendChild(cT("Novo "+modules));
		
		var jsonform = data.form.fields;

	}  
  
  //let menu = createObject('{"tag":"menu","style":"background-color:'+config.bgcolor+';"}');

	//form.appendChild(menu);


	Object.entries(jsonform).forEach(([key, value]) => {

    form.append(fields(value,header));	
	
	});
  
	window.append(form);
	
	document.body.appendChild(window);
  
}  

/* 
		var type 		      = json[x].type;
		var grid 		      = json[x].grid;
		var gridmobile 		= json[x].gridmobile;
		var fieldcodigo 	= json[x].id;
    
		var attribute = [];
		
        attribute.codigo		      = codigo;
        attribute.label			      = json[x].label;
        attribute.name			      = json[x].name;
        attribute.title			      = json[x].title;
        attribute.required	      = json[x].required;
        attribute.pattern		      = json[x].pattern;
        attribute.value			      = (json[x].value!==undefined)?json[x].value:"";	
        attribute.list			      = (json[x].list!==undefined)?json[x].list:"";	
        attribute.limit			      = json[x].limit;
        attribute.grid			      = json[x].grid;
        attribute.gridmobile      = json[x].gridmobile;
        attribute.admin			      = json[x].admin;
        attribute.attributes			= json[x].attributes;
        attribute.placeholder			= json[x].placeholder;
        attribute.presetarray			= json[x].presetarray;  
        attribute.action			    = action;

    
		switch(type) {

            case "hide":            var div = formMountHide(attribute);div.setAttribute('type',type);           break;
            case "hideinput":       var div = formMountHideInput(attribute);div.setAttribute('type',type);      break; 
            case "textarea":        var div = formMountTextarea(attribute);div.setAttribute('type',type);       break;
            case "textareapreset":  var div = formMountTextareaPreset(attribute);div.setAttribute('type',type);       break;
            case "data":            var div = formMountData(attribute);div.setAttribute('type',type);           break;
            case "text":            var div = formMountText(attribute);div.setAttribute('type',type);           break;
            case "password":        var div = formMountPassword(attribute);div.setAttribute('type',type);       break;
            case "youtube":         var div = formMountYoutube(attribute);div.setAttribute('type',type);        break;  
            case "trueorfalse":     var div = formMountTrueFalse(attribute);div.setAttribute('type',type);      break;	
            case "texturl":         var div = formMountTexturl(attribute);div.setAttribute('type',type);        break;
            case "selectajax":      var div = formMountSelectAjax(attribute);                                   break;
            case "selectcolor":     var div = formMountSelectColor(attribute);                                  break;   
            case "search":          var div = formMountSelectCustom(attribute);                                 break;
            case "multiple":        var div = formMountMultiple(attribute);div.setAttribute('type',type);       break;
            case "multiplehidden":  var div = formMountMultipleHidden(attribute);div.setAttribute('type',type); break;
            case "share":           var div = formFieldShare(attribute);div.setAttribute('type',type);header.append(btOptionsBtShare());break;    
            case "tag":             var div = formMountTag(attribute);div.setAttribute('type',type);            break;
            case "taggroup":        var div = formMountTagGroup(attribute);div.setAttribute('type',type);       break; 
            case "keywords":        var div = formMountKeywords(attribute);div.setAttribute('type',type);       break;        
            case "fileupload":      var div = formMountFileupload(attribute);div.setAttribute('type',type);header.append(btHeaderAttach());break;
            case "select":
                        
                if(attribute.value=='undefined'){

                    if(attribute.value.length<30){
                        var div = formMountSelect(attribute);
                    }else{
                        var div = formMountSelectCustom(attribute);
                    }

                }else{
                    
                    var div = formMountSelect(attribute);
                    
                }

        	    break;

            default:
                    
                var div = formMountText(attribute);
                //console.log(type);

		}
    */

        


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

function formDelete(codigo){
	


	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	

						
		}
		
	};

	if (confirm("Tem certeza que deseja excluir?") === true) {

    var url = localStorage.getItem("url")+'/admin/json/jsonUpdate.php';
    
    var data = new FormData();
    
        data.append('area',gA());
        data.append('acao','delete');
        data.append('codigo',codigo);
        data.append('session',localStorage.session);
    
		xmlhttp.open("POST", url, true);
		xmlhttp.send(data);
		
			rE(gibc(codigo));
			formClose();
		
	} else {

	

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

	var bt = cE("icon");
			//btClose.setAttribute("class","icon-cross");
	//bt.appendChild(cT("<"));
			bt.setAttribute("action","back");
			bt.setAttribute("class","icon-arrow-left2");
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

	var bt = cE("icon");
			
			bt.setAttribute("action","save");
			bt.setAttribute("class","icon-checkmark");
			bt.onclick=(function(){
					formSave(codigo);


			});

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

	var formfields    = document.querySelectorAll("window > form input,textarea");
  var data          = {};
  let error         = '';

	Object.entries(formfields).forEach(([key, value]) => {

    let id          = value.getAttribute('id');
    let required    = value.parentElement.getAttribute('required');
    let title       = value.getAttribute('title');
    let valueid     = value.getAttribute('valueid') || value.value ;
        //data[id] = [];
        data[id]=valueid;

        if(required=="true"){

          error+= (valueid)?"":"Campo "+title+" está vazio \n";

        }

	});

  if(error){
    
    swal("Erro",error, "error");

  }else{
    formSend(data,codigo); 

  }

}



function formSend(data,id){

  const modules     = document.querySelector("window").getAttribute("modules");
  const config        = JSON.parse(localStorage.config);
  const user          = JSON.parse(localStorage.user);

data.session=user.session;
data.modules=modules;
data.id=id;

  var url  = config.formsave;

  document.body.setAttribute("loading","1");

  formClose();

  const send = async function(data) {

    const rawResponse = await fetch(config.formsave, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({data:data})

    });

    const post = await rawResponse.json();

    itemReload(id)

  
    
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

function fieldTooltip(div,data){

  if(data){

    var tooltip   = createObject('{"tag":"tooltipv2","innerhtml":"'+data.title+'"}');

    var icon   = createObject('{"tag":"tooltipv2icon","class":"icon-question"}');

        icon.append(tooltip);

    div.appendChild(icon); 
  }
  
}



function fields(data,header){

  const e = (function(){
    
    switch(data.type) {

    case "textarea":return textarea(data);
    case "selectajax":return selectAjax(data,header);
  /*   case "multiplehidden":return multipleHidden(data);
   case "share":return share(data);header.append(btOptionsBtShare());*/
    case "fileupload":return fileupload(data,header);
 
    default:return text(data);
      
    } 

  }())


  e.setAttribute('required',data.required);
  e.setAttribute('id','div'+data.url);
  e.setAttribute('grid',data.grid);
  e.setAttribute('gridmobile',data.gridmobile);
  e.setAttribute('fieldcodigo',data.id);
  e.setAttribute('type',data.type);

  return e;
  
}

/*


//   case "hide":            var div = formMountHide(attribute);div.setAttribute('type',type);           break;
 //   case "hideinput":       var div = formMountHideInput(attribute);div.setAttribute('type',type);      break; 
////    case "textareapreset":  var div = formMountTextareaPreset(attribute);div.setAttribute('type',type);       break;
 //   case "data":            var div = formMountData(attribute);div.setAttribute('type',type);           break;
//    case "text":            var div = formMountText(attribute);div.setAttribute('type',type);           break;
 //   case "password":        var div = formMountPassword(attribute);div.setAttribute('type',type);       break;
 //   case "youtube":         var div = formMountYoutube(attribute);div.setAttribute('type',type);        break;  
  //  case "trueorfalse":     var div = formMountTrueFalse(attribute);div.setAttribute('type',type);      break;	
   // case "texturl":         var div = formMountTexturl(attribute);div.setAttribute('type',type);        break;
   // case "selectcolor":     var div = formMountSelectColor(attribute);                                  break;   
  //  case "search":          var div = formMountSelectCustom(attribute);                                 break;
  //  case "multiple":        var div = formMountMultiple(attribute);div.setAttribute('type',type);       break;
   // case "tag":             var div = formMountTag(attribute);div.setAttribute('type',type);            break;
  //  case "taggroup":        var div = formMountTagGroup(attribute);div.setAttribute('type',type);       break; 
   // case "keywords":        var div = formMountKeywords(attribute);div.setAttribute('type',type);       break;        


       case "select":
                
        if(data.value=='undefined'){

            if(data.value.length<30){
                var div = select(attribute);
            }else{
                var div = selectCustom(attribute);
            }

        }else{
            
            var div = formMountSelect(attribute);
            
        }

      break;
   */

function fileupload(data,header){

  var label    = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
  var div      = createObject('{"tag":"div"}');

  var uuid = uuidv4();

  var object   = createObject('{"tag":"input","id":"files","type":"hidden","value":"'+uuid+'"}');

      header.append(btHeaderAttach());

  var span   = createObject('{"tag":"uploadedStatus"}');
  var result = createObject('{"tag":"uploadedFiles"}');
    
      div.append(object,result,span);

      if(data.value){

        var files    = JSON.parse(data.value);

        Object.entries(files).forEach(([key, value]) => {
          
            fileUploadFigure(result,files);
      
            object.setAttribute('value',value.uuid);

        });

      }

  return div;
  
}


function addUploadFiles(local,object){

  const config = JSON.parse(localStorage.config);

	var div 				= cE("div");
	var figure 			= cE("figure");
	var textCover 	= cT("Destaque");
	var spanDelete 	= cE("span");
	var spanLeft 		= cE("span");
	var spanRight 	= cE("span");
	var spanZoom 		= cE("span");
	var spanCover 	= cE("span");
	var divOptions 	= cE("options");
  var spanEdit 		= cE("span");

	if(object.filename!==undefined){
    
		var filename=object.filename;
		var key=object.key;
		
	}else{
		var filename=object;
	}
	
	if(filename!==null){
    
    var urlimgm = config.imgm+filename+"?key="+key;
    var urlimg  = config.img+filename+"?key="+randomString(32);

		spanCover.appendChild(textCover);

		divOptions.appendChild(spanDelete);
		divOptions.appendChild(spanLeft);
		divOptions.appendChild(spanZoom);
		divOptions.appendChild(spanRight);
		//divOptions.appendChild(spanEdit);
		
		div.appendChild(divOptions);

		spanDelete.setAttribute('class','icon-bin');
		spanLeft.setAttribute('class','icon-undo');
		spanRight.setAttribute('class','icon-redo');
		spanZoom.setAttribute('class','icon-search');
		spanEdit.setAttribute('class','icon-edit');
		
		sA(figure,"style","background-image:url('"+urlimgm+"');");
		sA(spanDelete,"onclick","if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,'"+filename+"')}");
		
		//sA(spanZoom,"onclick","window.open('"+localStorage.getItem("img")+filename+"?key="+randomString(32)+"','_blank');");
    
    spanZoom.onclick=(function(){
      window.open(urlimg,'_blank');
    });
                      
		spanLeft.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=left&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
      
		});

		spanRight.onclick=(function(){

			figure.setAttribute('style',"background-image:url('"+localStorage.getItem("urlimagerotate")+"?img="+filename+"&rotate=right&key="+randomString(32)+"');");
			divOptions.setAttribute('style',"background-image:url('"+localStorage.getItem("url")+"/admin/action/actionChangeImageKey.php?filename="+filename+"&key="+randomString(32)+"');");
      
		});
		
		if(goiFind(filename)){
			
			goi(filename).appendChild(divOptions);
			goi(filename).appendChild(figure);
			
		}else{
			
			local.insertBefore(div, local.childNodes[0]);
			div.appendChild(figure);
			
		}
		

		/*local.appendChild(div);*/
		
		
		var label   = cE("input");
		var content = cE("textarea");
    var btsalvar = cE("button");
        
		label.setAttribute("name","label");
		label.setAttribute("placeholder","Título");
		content.setAttribute("name","textarea");
    content.setAttribute("placeholder","Descrição");
    btsalvar.setAttribute("type","button");
		
    /*    
	    div.appendChild(label);
		div.appendChild(content);
		div.appendChild(btsalvar);
			*/
		div.setAttribute("id",filename);
	
		
	}else{

		var icon 	= cE("icon");

		figure.setAttribute('style',"");
		figure.appendChild(icon);
		div.appendChild(figure);
	
		
		local.insertBefore(div, local.childNodes[0]);
		icon.setAttribute('class','icon-user');

	}


}



function addUploadFilesPDF(local,filename){

  const config = JSON.parse(localStorage.config);

	var split       = filename.split(".");

	var div 				= createObject('{"tag":"div","id":"'+filename+'"}');
	var divOptions 	= createObject('{"tag":"options"}');
	var spanDelete 	= createObject('{"tag":"span","class":"icon-bin"}');
	var spanCover 	= createObject('{"tag":"span","innerhtml":"Destaque"}');
	var spanZoom 		= createObject('{"tag":"span","class":"icon-search"}');
	var figure 			= createObject('{"tag":"figure","style":"background-image:url('+config.imgp+split[0]+'.jpg);"}');
	var divLabel 		= createObject('{"tag":"h3"}');


	if(goiFind(filename)){

		goi(filename).appendChild(divOptions);
		goi(filename).appendChild(figure);

	}else{

		local.insertBefore(div, local.childNodes[0]);
		div.appendChild(figure);

	}
	
  spanDelete.onclick=(function(){

      if(confirm('Deseja remover este arquivo?')){removeAnexos(this.parentNode.parentNode,filename)}

  });

  spanZoom.onclick=(function(){

    window.open(config.pdf+filename,'_blank');

  });
	
  divOptions.append(spanDelete,spanZoom);
  figure.append(divLabel);
  div.append(figure,divOptions);

}

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
      case "png": ddUploadFilesPNG(result,value.filename);break;

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



function sendFile(file,anexos,url,cb){

	var formData 	= new FormData();

	formData.append('fileupload', file);

	var xhr = new XMLHttpRequest();
	
	//var anexos = gon('files')[0].value;
	
	var form = got(document,"form")[0];
	var uploadedfiles = document.querySelector("form uploadedfiles");
	
	var divLoading=cE("div");
	var labelLoading=cE("label");
	divLoading.appendChild(labelLoading);
	uploadedfiles.insertBefore(divLoading, uploadedfiles.childNodes[0]);
	

	
	xhr.upload.addEventListener("progress", function(e) {
		
		var pc = parseInt((e.loaded / e.total * 100));

			labelLoading.innerHTML=pc+"%";
		
	}, false);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			var object = JSON.parse(xhr.responseText);
			
			if(object.ext=='jpg'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				divLoading.setAttribute("id",object.filename);
				divLoading.innerHTML="";
				cb(object.filename);
			
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='png'){

				var div = cE('div');
				
				//sA(div,"style","background-image:url('/client/"+object.url+"');");
				//sA(div,"onclick","window.open('/client/"+object.url+"','_blank');");
				
				insertAnexos(anexos,object.filename);
				cb(object.filename);
				console.log(object);
				//got('fileuploadresult').appendChild(div);

			}else if(object.ext=='pdf'){
				
				//var uploadedfiles = got(object.parentNode.parentNode,"uploadedfiles")[0];
				
				//addUploadFiles(uploadedfiles,object.filename);
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

		if(ext=='image/jpeg'){

			sendFile(object.files[x],anexos,config.upload+'?',

				function(filename){

					addUploadFiles(uploadedfiles,filename);

				}

			);
			
		}else if(ext=='application/pdf'){
			
			sendFile(object.files[x],anexos,localStorage.getItem("upload")+'?',

							 
				function(filename){
        
				  //pdftothumb(object);
	

					addUploadFilesPDF(uploadedfiles,filename);

				}
							 
			);

		}else if(ext=='image/png'){
			
			sendFile(object.files[x],anexos,config.upload+'?',

							 
				function(filename){
				

					addUploadFiles(uploadedfiles,filename);

				}
							 
			);
						
		}else{
			alert('Formato de arquivo não suportado');
		}

	}
		
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

function selectAjax(data,header){

  var div         = createObject('{"tag":"div"}');
  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');

  var plugin      = getAttValue(data,"plugin");
  var btshare     = createObject('{"tag":"compartilhar","innerhtml":"Compartilhar"}');
  var finder  = selectAjaxSetInputValue(data);
  var valueid = finder.getAttribute("valueid");

      div.append(label,finder); 

  if(plugin=="multiply"){

    let json = (data.value)?JSON.parse(data.value):[];
    let btshare=btOptionsBtShare();

    div.append(selectAjaxListCards(json));

    label.onclick = function(){

      selectBox(data.url);

    };

btshare.onclick = function(){

 selectBox(data.url);
};

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

  valueid = JSON.stringify(json);

  input.setAttribute("valueid",valueid);

}

function selectAjaxSetInputValue(data){

  let value       = (data.value)?JSON.parse(data.value):null;

  if(Array.isArray(value)){

    var valueid = "";

    let json    = [];

    Object.entries(value).forEach(([key, value]) => {json.push(value.id)});

    valueid = JSON.stringify(json);

  }else{

    var valueid     = (value)?value.id:"";

  }

  let placeholder = (value)?value.label:"Escolha "+data.label;

  

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

  selectbox.setAttribute('modules',modules);

  document.getElementsByTagName("selectbox")[0].getElementsByTagName("input")[0].focus();

}


function selectBoxFields(modules){

  var fields = createObject('{"tag":"fields"}');

  var icon   = createObject('{"tag":"icon","class":"icon-cancel-circle"}');

  var input  = createObject('{"tag":"input","type":"text","placeholder":"Digite para procurar"}'); 



    input.onkeyup = function(){

      if(this.value.length>4){
        selectBoxSearch(this.value,modules)
      }
        
    }

tooltip(icon,"fechar"); 

    icon.onclick=(function(){
      rE(document.querySelector('selectbox'));
    });

  fields.append(input,icon);

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

  opt.append(selectBoxCells('files',data.files),selectBoxCells('id',data.id),selectBoxCells('label',data.label));

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


function selectBoxCells(type,data){

  const e = (function(){

   switch(type) {

      case "id"     :return createObject('{"tag":"'+type+'","innerhtml":"'+data+'"}');
      case "label"  :return createObject('{"tag":"'+type+'","innerhtml":"'+data+'"}');
      case "files"  :return selectBoxCellsFigure(data);

   }

  }())

  return e;

} 

function selectBoxCellsFigure(data){

  var figure = createObject('{"tag":"figure"}');

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
  
  const config = JSON.parse(localStorage.config);

    const send = async function() {
      
      const rawResponse = await fetch(config.urlselect, {

        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({modules:modules,string:string})

      });

      const data = await rawResponse.json();
      
      const list = document.querySelector('selectbox > list');
      
      race(list);

      Object.entries(data).forEach(([key, value]) => {

        list.append(selectBoxOpt(value,modules));

      });

  }();

}

function selectFigure(div,data){

  var config = JSON.parse(localStorage.config); 

  var labelfigure   = createObject('{"tag":"figure"}');

if(data){

  if(data.files){

    let filename = data.files[0].filename;
    let key      = data.files[0].key; 
    let url      = config.imgm+filename+"?key="+key;

    labelfigure.style.backgroundImage="url("+url+")";

  }
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

function text(data){
  
  var label       = createObject('{"tag":"label","innerhtml":"'+data.label+'"}');
	var div         = createObject('{"tag":"div"}');
	var object      = createObject('{"tag":"input","value":"'+data.value+'","id":"'+data.url+'"}');

  div.appendChild(label);

/* 	for (var key in attribute){
				
		if(attribute[key]!=="0" && attribute[key]!==""){
			object.setAttribute(key,attribute[key]);
		}

	}
	 */

	object.setAttribute("autocomplete","new-password");
	object.setAttribute("type","text");
	object.setAttribute("class","default");
	object.setAttribute("placeholder",data.placeholder);
	object.setAttribute("required",data.required);
		
  div.appendChild(object);

  return div;
  
}

function textarea(data){
  
  var label = createObject('{"tag":"label","type":"'+data.type+'","innerhtml":"'+data.label+'"}');
  var div   = createObject('{"tag":"div"}');

	Object.entries(data.attributes).forEach(([key, value]) => {

    if(key=='title'){
        fieldTooltip(label,data.attributes); 
    }

  });

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



function removeAnexos(e,filename){
	
	var url 	= localStorage.getItem("url")+'/admin/json/jsonAnexosDelete.php?filename='+filename;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			
			if(xmlhttp.responseText==1){
				
				rE(e);
				console.log(e);
			}
			
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
			
}

function load(){

    if (window.innerWidth <= 480) {

      document.body.setAttribute('mobile', '1');

    } else {

      document.body.setAttribute('mobile', '0');

    }

   // suporteLoad();

    document.body.appendChild(loadingMount());
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

      document.getElementsByTagName("pages")[0].append(mountLogin());
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

  if(authentic.customform!=undefined){
    localStorage.customform = JSON.stringify(authentic.customform);
  }
  
  //debugIphone(authentic);
  
  //jsonToWebSQL(authentic.shortcut[0].json);
  
	mountHeader(authentic);
	mountPrint(authentic);
	mountSection();

	navMount();
	//modulesLoadCalendar();
  loadNavSuite();
  modal();
  document.getElementsByTagName("body")[0].setAttribute("modules","");
  document.getElementsByTagName("body")[0].setAttribute("premium",authentic.user.premium);
  loopCheck();
  
  
	var autoload=document.getElementsByTagName("body")[0].getAttribute("autoload");

      setTimeout(function(){
        document.getElementsByTagName("body")[0].setAttribute("openlogin","0");
         //document.getElementsByTagName("body")[0].setAttribute("ad","1");
        
         loginSetStep1(authentic);

         setTimeout(function () {
                   rE(got(document,"login"));
                   rE(got(document,"pages"));
           
                    //document.getElementsByTagName("body")[0].setAttribute("ad","0");
           
                    //document.getElementsByTagName("body")[0].setAttribute("openlogin","0");
           
                }, 5000);
  
          }, 1000);
  
}

function debugIphone(array){
  
  if(array.userinfo.codigo=='10001'){
  
    alert(JSON.stringify(array));
    
  }
  
}

function mountLogin(){


var config      = JSON.parse(localStorage.config); 

var logo        = config.urllogo;
  
var btclose     = createObject('{"tag":"btclose","innerhtml":"x","onclick":"document.body.setAttribute(\'openlogin\',\'0\');"}');  
var h1          = createObject('{"tag":"h1","innerhtml":"'+config.login+'","style":"background-image:url('+logo+');"}');  
var plogin      = createObject('{"tag":"p","innerhtml":"Login","class":"plogin"}');
var pinsert     = createObject('{"tag":"p","innerhtml":"Criar conta","class":"pinsert"}');
var pinsertm    = createObject('{"tag":"p","innerhtml":"Cadastro de Médico","class":"pinsertm"}');
var precovery   = createObject('{"tag":"p","innerhtml":"Recuperar senha","class":"precovery"}');  
var login 	    = createObject('{"tag":"login","class":"login","name":"login"}');
var formLogin   = createObject('{"tag":"form","onsubmit":"login();return false;"}');


  
// Inicio Input  
  
var inputName        = createObject('{"tag":"input","id":"label","placeholder":"Nome completo"}');
var pattern          = encodeURI("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");  
var inputEmail       = createObject('{"tag":"input","id":"email","placeholder":"seu@email.com","pattern":"'+pattern+'"}');
var inputPass        = createObject('{"tag":"input","id":"password","type":"password","placeholder":"Senha"}');
var pattern          = encodeURI("\\d{11}");
var inputCPF         = createObject('{"tag":"input","id":"cpf","placeholder":"CPF","type":"number","title":"'+message("620")+'","pattern":"'+pattern+'"}');
var inputRG          = createObject('{"tag":"input","id":"identidade","placeholder":"RG Identidade"}');  
var inputTelefone    = createObject('{"tag":"input","id":"telefone","placeholder":"Telefone","type":"number"}');
var inputCEP         = createObject('{"tag":"input","id":"cep","placeholder":"CEP"}');    
var inputEndereco    = createObject('{"tag":"input","id":"endereco","placeholder":"Rua, número"}');  
var inputBairro      = createObject('{"tag":"input","id":"bairro","placeholder":"Bairro"}'); 
var inputCidade      = createObject('{"tag":"input","id":"cidade","placeholder":"Cidade"}'); 
var inputEstado      = createObject('{"tag":"input","id":"estado","placeholder":"Estado"}'); 
var inputCRM         = createObject('{"tag":"input","id":"crm","placeholder":"Registro profissional","type":"text","onkeydown":"return inputTypeNumber(event);"}');
var inputSuite       = createObject('{"tag":"input","id":"suite","type":"hidden","value":"'+config.id+'"}');  
// Fim input
  
//var text = 'Ao clicar em Cadastrar, você concorda com <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>nossos termos</a>, Política de Dados e Política de Cookies.';  
var text = 'Ao clicar em cadastrar, você concorda com a <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>política de privacidade</a>, <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/edit target=_blank>termos de uso</a> e <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>acordo do usuário</a> e <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/edit?usp=sharing target=_blank>política de cookies</a>.'; 
var pTermos = createObject('{"tag":"p","innerhtml":"'+text+'","class":"ptermos"}');
  

  
var inputAreas  = createObject('{"tag":"input","id":"areas","type":"hidden"}');
  
var div         = createObject('{"tag":"div","id":"status","class":"status"}');
  
//var button      = createObject('{"tag":"button","id":"status","innerhtml":""}');
  
var btEntrar           = createObject('{"tag":"button","id":"btEntrar","innerhtml":"Entrar"}'); 
var btCadastrar        = createObject('{"tag":"button","id":"btCadastrar","innerhtml":"Cadastrar"}');  
var btRecuperar        = createObject('{"tag":"button","id":"btRecuperar","innerhtml":"Recuperar"}'); 
  
var bLogin             = createObject('{"tag":"button","id":"btLogin","type":"button","textnode":"Fazer login"}');
var bInsert            = createObject('{"tag":"button","id":"btInsert","type":"button","textnode":"Criar conta"}');
  
var bInsertPaciente    = createObject('{"tag":"button","id":"btInsertPaciente","type":"button","textnode":"Sou paciente"}');
var bInsertMedico      = createObject('{"tag":"button","id":"btInsertMedico","type":"button","textnode":"Sou profissional da saúde"}');
  
var bRecovery          = createObject('{"tag":"button","id":"btRecovery","type":"button","textnode":"Esqueci minha senha"}');
  
//var menu        = createObject('{"tag":"options"}');
  
bLogin.onclick=(function(){

  sA(login,'class','login');
  setRequired('email,password')
  sA(formLogin,'onsubmit','login();return false;');
  
})

bInsert.onclick=(function(){

  setRequired('label,email,password,cpf,identidade,telefone,cep,endereco,bairro,cidade,estado');
  sA(login,'class','insert');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})
  
bInsertPaciente.onclick=(function(){
  
  setRequired('label,email,password,cpf');
  
  sA(login,'class','insertpaciente');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="100";
  
})  
  
bInsertMedico.onclick=(function(){
  
  setRequired('label,email,password,cpf,identidade,telefone,cep,endereco,bairro,cidade,estado,crm');
  
  sA(login,'class','insertmedico');
  sA(goi('name'),'required','required');
  sA(formLogin,'onsubmit','insert();return false;');
  goi('areas').value="50";
  
})  
  
bRecovery.onclick=(function(){
  
  setRequired('email');
  
  sA(login,'class','recovery');

  sA(formLogin,'onsubmit','recovery();return false;');

})

formLogin.append(btclose,h1,plogin,pinsert,pinsertm,precovery,inputName,inputEmail,inputPass,inputCPF,inputRG,inputTelefone,inputCEP,inputEndereco,inputBairro,inputCidade,inputEstado,inputSuite);
  
formLogin.appendChild(bInsertPaciente);
formLogin.appendChild(bInsertMedico);

formLogin.append(inputCRM,inputAreas,pTermos,btEntrar,btCadastrar,btRecuperar,div);

if(config.newusers==1){

    formLogin.appendChild(bInsert);

}

formLogin.append(bLogin,bRecovery);
  
login.append(formLogin);
  
return login;
  
  	/*
  	login.appendChild(adsense());
	(adsbygoogle = window.adsbygoogle || []).push({});
*/
	
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




function insert(){
		
// 	var name 	     = goi('label');
// 	var email 	   = goi('email');
// 	var cpf 	     = goi('cpf');
// 	var crm 	     = goi('crm');
  
// 	var identidade = goi('identidade');
// 	var telefone 	 = goi('telefone');
// 	var cep 	     = goi('cep');
// 	var endereco 	 = goi('endereco'); 
  
// 	var password   = goi('password');
// 	var userstipos = goi('userstipos');
// 	var status     = goi('status');
  
// 	var cidade   = goi('cidade');
// 	var estado = goi('estado');
// 	var bairro     = goi('bairro');		
  
// 	name.setAttribute('class','');
// 	email.setAttribute('class','');
// 	password.setAttribute('class','');
// 	cpf.setAttribute('class','');
	
	status.innerHTML="";
	status.innerHTML="<p>Verificando...</p>";
  
  var form = got(document,"form");
	
	var input    = got(form[0],"input");
  
	var data = new FormData();
	
	for (var x = 0; x < input.length;x++){
    
    input[x].setAttribute('class','');
    
		var n = input[x].getAttribute("id");
		var v = input[x].value;
		v = (v!==null)?v:"";

    data.append(n,v);
    
  }
  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

	    var authentic=JSON.parse(xmlhttp.responseText);

      switch (authentic.status) {
          
      case '1':loginInsertSuccess(authentic);break;
      case '602':goi("label").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;
      case '603':goi("password").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;
      case '605':goi("cpf").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;   
      case '606':goi("cpf").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;  
      case '607':goi("email").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break; 

      default:goi("email").setAttribute('class','error');goi("status").innerHTML=message("999");      
      }  
		}
    
	};

	setTimeout(function () {
    
    var url = localStorage.getItem("url")+'/admin/json/jsonLoginInsert.php';
//    var params = "";
    
//     params+="userstipos="+userstipos.value+"&";
//     params+="crm="+crm.value+"&";    
//     params+="cpf="+cpf.value+"&";
//     params+="email="+email.value+"&";
//     params+="password="+password.value+"&";
//     params+="label="+name.value+"&";
//     params+="identidade="+identidade.value+"&";
//     params+="telefone="+telefone.value+"&";
//     params+="cep="+cep.value+"&";
//     params+="endereco="+endereco.value+"&";
  
    xmlhttp.open("POST", url, true);
    //xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(data);    
    
	}, 1000);
	
	
	
}

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
 /* 
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
  
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=JSON.parse(xmlhttp.responseText);

			if(authentic.status==="1"){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 500);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 2000);
				
			}
		}
	}; */

	setTimeout(function () {

/*      var url    =  getLocalStorage("config","login");
    
    var data 	= new FormData();
        data.append('email', email.value);
        data.append('password', password.value);
        data.append('suite', suite.value);

    xmlhttp.open("POST", url, true);

    xmlhttp.send(data); */


  (async () => {
    const rawResponse = await fetch(getLocalStorage("config","login"), {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({email: email.value, password: password.value, suite: suite.value})
    });

    const authentic = await rawResponse.json();


			if(authentic.status==1){
				
				//success

				status.innerHTML=message("501");	
				sA(status,"class","sucess");
				setTimeout(function () {loadLogged(authentic);}, 100);
			
			}else{
				
				sA(status,"class","error");
				
        status.innerHTML=message(authentic.status);
        
        switch (authentic.status) {

          case '502':sA(password,"class","error");break;  
          case '504':sA(email,"class","error");break; 
          case '505':sA(password,"class","error");break;
          case '508':sA(email,"class","error");break;            
  
        }  
  
				setTimeout(function () {status.innerHTML="";sA(status,"class","");}, 100);
				
			}

  })();
		
	}, 100);

	
}

function loginSetStep1(authentic){
  
  document.body.setAttribute('logged',authentic.status);
  document.body.setAttribute('areas',authentic.areas);
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
  
        item.setAttribute('me',array.me);
        item.setAttribute("a",array.a);
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
  
  loadItemOptions(item,array);
  itemDetail(item,array);
  loadMedicos(item,array.jsonmedicos);
  //loadPacientesFull(item,array);
  loadItemUpdateTime(item,array);
  loadShare(footer,array);
  
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

          onclick="window.open('"+config.jsonanexos+data.anexos+"','_blank');"
          figure.setAttribute("onclick",onclick);

        break;

      case "pdf": 

        onclick = "window.open('"+config.pdf+filename+".pdf','_blank');"
        

        let label = createObject('{"tag":"label","innerhtml":"pdf"}');

            figure.setAttribute("onclick",onclick);
            figure.append(label);

        break;
      }        

			figure.style.backgroundImage="url("+config.imgp+filename+".jpg?key="+data.key;
		
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

/*     if(!tabela){

      

    } */

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
  
  let data        = new Date(array.update);
  let createddata = new Date(array.created_at);
  
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  let update = data.toLocaleDateString('pt-BR', options);
  
  let created = createddata.toLocaleDateString('pt-BR', options);
  
  let updatetext = "Editado "+update;
     
  
  let createdtext = "Criado "+created;

      elementoupdated.append(document.createTextNode(updatetext));
      elementocreated.append(document.createTextNode(createdtext));
  
  
      elementodata.appendChild(elementocreated);
  
  if(array.created_at!==array.update){
      elementodata.appendChild(elementoupdated); 
  }
  
  elements.appendChild(elementodata);
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
  
  let pacientes = createObject('{"tag":"pacientes"}');
  let div       = createObject('{"tag":"div"}');
  let label     = createObject('{"tag":"label","innerhtml":"'+array.pacienteslabel+'"}');

      div.append(label);
      pacientes.append(div);

      element.append(pacientes);
  
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

  if (array.share !== null) {

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


function modulesOpen(url){
	
	var body    = got(document,'body')[0];

	var modules = getModulesByUrl(url);

	//e.appendChild(boxLoad());

	race(got(document,"view")[0]);

	//changeTitle(modules);
  
	var menu    = cE("menu");

	var view    = got(document,'view')[0];
  
    menu.appendChild(btNew());
    menu.appendChild(btFilter());
    view.appendChild(menu); 
  
 if(modules.url=="prontuarios" || modules.url=="prontuariosmedicos" || modules.url=="pacientes"){

    window.onscroll=lazyload;    
   
 }else{
   
    window.onscroll=null;
    
 }

  sA(body,'modules',modules.url);
	tabelaLoad(modules);
 
}


function loadPacientes(element,array){

   if(array){

      var paciente   = createObject('{"tag":"pacientes"}');
      var div        = createObject('{"tag":"div"}');
      var icon       = createObject('{"tag":"icon","class":"icon-user"}');
      
   //   div.append(createObject('{"tag":"label","innerhtml":"Paciente: "}'));
      div.append(createObject('{"tag":"label","innerhtml":"'+array.label+'"}'));

      paciente.appendChild(div);
      element.appendChild(paciente);
     
   }

}

function tabelaLoad(json){

  var config        = JSON.parse(localStorage.config);
  var user          = JSON.parse(localStorage.user);
  let view          = got(document,'view')[0];

  let modules       = (json)?json.url:gA();
  let match = {};

  match["uuid"]=user.session;

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({match:match, modules: modules})

    });

    const data = await rawResponse.json();

    /* rE(got(document,"box")); */

    boxFilter();

    document.body.setAttribute("loading","0");

    const tabela = modulesLoad(data);

    view.append(tabela); 
    
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
      body: JSON.stringify({modules: modules, match: match})

    });

    const data = await rawResponse.json();

    document.body.setAttribute("loading","0");
    view.append(modulesLoad(data)); 
    
  })();

}

