function getAttValue(data,att){

  if (data.attributes){
    if(data.attributes[att]){
      return data.attributes[att];
    }else{
      return false;
    }

  }else{
    return false;
  }

}