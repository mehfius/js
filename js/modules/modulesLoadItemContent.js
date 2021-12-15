function modulesLoadItemContent(item,array){
  
  var p 	 = cE('p');

  p.appendChild(cT(array.label));

  item.appendChild(p);
  
}