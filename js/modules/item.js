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