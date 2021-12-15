
function loadPacientesInfo(element,array){
  
     element.mouseover(function(){
            

      var xmlhttp;

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);
          
          let today = new Date().getFullYear();
          
          
          if(json[0].nascimento!==null){
            
            var nasc  = new Date(json[0].nascimento).getFullYear();
            var age   = Math.abs(today - nasc);
            
          }else{
            
            var age="Nao informado";
            
          }
          
          
          
          let texto=json[0].label;
              texto+="\n Telefone: "+json[0].telefone;
              texto+="\n Email: "+json[0].email;          
              texto+="\n CPF: "+json[0].cpf;          
              texto+="\n Endereço: "+json[0].endereco;          
              texto+="\n Idade: "+age;          
       
          element.setAttribute('title',texto);
             // tooltipmenu(label2,texto);
          
        }

      };
       
      var data = new FormData();
       
          data.append('p','users|label|email|telefone|cpf|endereco|nascimento'); 
          data.append('w','codigo|'+array.pacientescodigo);
       
      var url = localStorage.getItem("url")+'/admin/json/jsonGetTableView.php';

      xmlhttp.open("post", url, true);
      xmlhttp.send(data);  
       
       
    });

   }