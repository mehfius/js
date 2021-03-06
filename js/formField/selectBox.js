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