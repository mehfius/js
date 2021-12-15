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