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