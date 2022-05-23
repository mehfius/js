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