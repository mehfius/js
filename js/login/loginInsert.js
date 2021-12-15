function insert(){
		
// 	var name 	     = goi('label');
// 	var email 	   = goi('email');
// 	var cpf 	     = goi('cpf');
// 	var crm 	     = goi('crm');
  
// 	var identidade = goi('identidade');
// 	var telefone 	 = goi('telefone');
// 	var cep 	     = goi('cep');
// 	var endereco 	 = goi('endereco'); 
  
// 	var password   = goi('password');
// 	var userstipos = goi('userstipos');
// 	var status     = goi('status');
  
// 	var cidade   = goi('cidade');
// 	var estado = goi('estado');
// 	var bairro     = goi('bairro');		
  
// 	name.setAttribute('class','');
// 	email.setAttribute('class','');
// 	password.setAttribute('class','');
// 	cpf.setAttribute('class','');
	
	status.innerHTML="";
	status.innerHTML="<p>Verificando...</p>";
  
  var form = got(document,"form");
	
	var input    = got(form[0],"input");
  
	var data = new FormData();
	
	for (var x = 0; x < input.length;x++){
    
    input[x].setAttribute('class','');
    
		var n = input[x].getAttribute("id");
		var v = input[x].value;
		v = (v!==null)?v:"";

    data.append(n,v);
    
  }
  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

	    var authentic=JSON.parse(xmlhttp.responseText);

      switch (authentic.status) {
          
      case '1':loginInsertSuccess(authentic);break;
      case '602':goi("label").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;
      case '603':goi("password").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;
      case '605':goi("cpf").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;   
      case '606':goi("cpf").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break;  
      case '607':goi("email").setAttribute('class','error');goi("status").innerHTML=message(authentic.status);break; 

      default:goi("email").setAttribute('class','error');goi("status").innerHTML=message("999");      
      }  
		}
    
	};

	setTimeout(function () {
    
    var url = localStorage.getItem("url")+'/admin/json/jsonLoginInsert.php';
//    var params = "";
    
//     params+="userstipos="+userstipos.value+"&";
//     params+="crm="+crm.value+"&";    
//     params+="cpf="+cpf.value+"&";
//     params+="email="+email.value+"&";
//     params+="password="+password.value+"&";
//     params+="label="+name.value+"&";
//     params+="identidade="+identidade.value+"&";
//     params+="telefone="+telefone.value+"&";
//     params+="cep="+cep.value+"&";
//     params+="endereco="+endereco.value+"&";
  
    xmlhttp.open("POST", url, true);
    //xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(data);    
    
	}, 1000);
	
	
	
}