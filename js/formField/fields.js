function fields(data,header,pagedata){

  const e = (function(){
    
    switch(data.type) {

    case "textarea":    return textarea(data);
    case "selectajax":  return selectAjax(data,header);
    case "date":        return date(data);
    case "fileupload":  return fileupload(data,header,pagedata);
    case "checkbox":    return checkbox(data);
    case "radio":       return radio(data);
/*  case "multiplehidden":return multipleHidden(data); */
/*  case "share":return share(data);header.append(btOptionsBtShare()); */
 
    default:return text(data);
      
    } 

  }())

  if(data.attributes){

/*     if(data.attributes.title){

      let input = e.querySelector("input");

      input.setAttribute('title',data.attributes.title);
      
    } */

    Object.entries(data.attributes).forEach(([key, value]) => {



      let input = e.querySelector("input");

      input.setAttribute(key,value); 


/* 
      let input = e.querySelector("input");

      input.setAttribute('title',data.attributes.title); */

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