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