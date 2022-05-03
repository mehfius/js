const social_item = (item,value) =>{

  if(value.label!==""){

    let eP = '{"tag":"p","innerhtml":"'+value.label+'"}';
      
    item.append(createObject(eP));
  
  }

  if(value.posologia!==""){
  
    let P = '{"tag":"p","innerhtml":"'+value.posologia+'"}';
      
    item.append(createObject(P));
    
  }

  loadItemOptions(item,value)

  
}