function mountFilterOpt(json,select){

  for(var x=0;x<json.length;x++){

   /*    var input   = select.querySelector("[type='hidden']");
 */
      var codigo  = json[x].id;
      var alabel  = json[x].label;
    
      var count   = createObject('{"tag":"count","innerhtml":"'+json[x].count+'"}'); 
      var ecodigo = createObject('{"tag":"codigo","innerhtml":"'+json[x].id+'"}');

      var bt 			= cE("opt");

      var optlabel		= cE("label");

          optlabel.appendChild(cT(alabel));
    
      var optfigure 	= cE("figure");

      if(json[x].filename!==null){

          optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json[x].filename+"?key="+json[x].key+");");

      }

      bt.appendChild(optfigure);
      bt.append(ecodigo)
      bt.appendChild(optlabel);
      bt.append(count);
      bt.setAttribute("value",codigo);

      bt.onclick=(function(){

        let select = this.parentElement.parentElement;

        select.setAttribute("id",this.getAttribute("value"));

        let label       = select.querySelector("input");
        let labelfigure = select.querySelector("labelfigure");
        
        label.value=this.querySelector("label").innerHTML;

        label.setAttribute("placeholder",got(this,"label")[0].innerHTML);

        var style=got(this,"figure")[0].getAttribute("style");

        labelfigure.setAttribute("style",style);

        var selectsearch=this.parentElement;

        var opt = got(selectsearch,"opt");

        for (var x=0;x<opt.length;x++){

          opt[x].setAttribute("selected",false);
          opt[x].style.display="none";
          
        }

        this.setAttribute('selected',true);

        localStorage.filtropacientes=this.getAttribute("value");



   
        tabelaLoadByFilter();
      
    
        
      });

    select.appendChild(bt);

  } 

}