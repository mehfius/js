


function mountOrder(){
  
  var order = cE("order");
  
  var lbOrder = cE('label');
  
  lbOrder.appendChild(cT('Ordenar por :'));
  lbOrder.setAttribute("class","order");
  
  var btOrderLabel=cB("nome");
  btOrderLabel.setAttribute("class","order");
  
  btOrderLabel.onclick=(function(){
    
		localStorage.order=1;
		viewLoad(gA());
			
	});
  
  var btOrderData=cB("data");
  
  btOrderData.setAttribute("class","order"); 
  
  btOrderData.onclick=(function(){
    
		localStorage.order=0;
		viewLoad(gA());
			
	});
  
  if(localStorage.order==1){
    btOrderLabel.setAttribute("selected","1");
  }else{
    btOrderData.setAttribute("selected","1");
  }
  
  order.appendChild(lbOrder);
  order.appendChild(btOrderLabel);
	order.appendChild(btOrderData);
  
  return order;
  
}

