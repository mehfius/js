function insert(){

	const config = JSON.parse(localStorage.config);

  const status = goi("status");

  
        status.innerHTML = "Verificando...";

    var formfields    = document.querySelectorAll("form input");
    var data          = {};
    let error         = '';

    Object.entries(formfields).forEach(([key, value]) => {

      let id          = value.getAttribute('id');
      let required    = value.parentElement.getAttribute('required');
      let title       = value.getAttribute('title');
      let valueid     = value.value;
      
        data[id]=valueid;

        if(required=="required"){

          error+= (valueid)?"":"Campo "+title+" está vazio \n";

        }

    });

    const send = async function(data) {

      const rawResponse = await fetch(config.logininsert, {

        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({data:data})

      });

      const post = await rawResponse.json();

      switch (post.status) {
          
        case '1':loginInsertSuccess(post);break;

        case '301':goi("password").setAttribute('class','error');status.innerHTML=message(post.status);break; 

        case '602':goi("label").setAttribute('class','error');status.innerHTML=message(post.status);break;
        case '603':goi("password").setAttribute('class','error');status.innerHTML=message(post.status);break;
        case '605':goi("cpf").setAttribute('class','error');status.innerHTML=message(post.status);break;   
        case '606':goi("cpf").setAttribute('class','error');status.innerHTML=message(post.status);break;  
        case '607':goi("email").setAttribute('class','error');status.innerHTML=message(post.status);break; 

        default:goi("email").setAttribute('class','error');status.innerHTML=message("999");    

      }  

    }

    send(data);

}