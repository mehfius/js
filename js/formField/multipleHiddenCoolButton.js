
function coolbutton(list){
    
  var suitesinfo = JSON.parse(localStorage.suitesinfo); 
  var div     = cE("div");
  var label   = cE("label");
  label.setAttribute('style','background-color:'+suitesinfo.color1+';');
  var figure  = cE("figure");
  var close   = cE("icon"); 
   close.setAttribute('style','background-color:'+suitesinfo.color1+';');
      close.setAttribute("class","icon-cross");
  
  var text = cT(list.label);
  
  	close.onclick=(function(){
      
				if(confirm("Tem certeza que deseja remover ?")){
          
          var multiplehidden=got(this.parentElement.parentElement.parentElement,"multiplehidden")[0];

          var input = got(multiplehidden,"input")[1];

          var valor = ","+this.parentElement.getAttribute("c")+",";
          var text = input.value;
          var x = text.replace(valor,","); 

              input.value=x;
              rE(this.parentElement);

        }
			
        
    });
      
      label.appendChild(text);
      div.appendChild(figure);
      div.appendChild(label);
      div.appendChild(close);
  
      div.setAttribute('c',list.codigo);
  
  return div;
  
}