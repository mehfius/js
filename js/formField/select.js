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


