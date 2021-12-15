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