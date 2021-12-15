
function loadUser(elements,array){
  
  if(array.userslabel!==undefined){

    var div = cE("div");
    
    var user = cE('user');
    
    var icon = cE("icon");
        icon.setAttribute("class","icon-user");

    var label = cE("label");
        label.appendChild(cT("Criado por: "));
    div.appendChild(label);
    var label2 = cE("label");
        label2.appendChild(cT(array.userslabel));

    //div.appendChild(icon);
    div.appendChild(label);    
    div.appendChild(label2);
    
    user.appendChild(div);
    
    elements.appendChild(user);
    
  }
  
}
