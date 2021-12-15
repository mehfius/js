function actionButton(element,fields,table,array){
  
  var value     = element.getAttribute("value");

  var xmlhttp;
  
  element.onclick=(function(){

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      
      var item = gibc(array.codigo);
      var json = JSON.parse(xmlhttp.responseText);
      

      for (const [key, value] of Object.entries(json[0])) {
             
        item.setAttribute(key,value)
   
        
      }
      
    }}


    var data = new FormData();

        data.append('w', 'codigo|'+array.codigo);
        data.append('f', fields+'|'+value);
        data.append('t', table);

    var url 	= localStorage.getItem("url")+'/admin/json/jsonUpdateFields.php';

    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);  
  
  });
  
}