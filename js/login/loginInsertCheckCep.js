
function loginInsertCepFillFields(data){

  let login = document.querySelector("login")

  let cep = login.querySelector("#cep");
  let cidade = login.querySelector("#cidade");
  let estado = login.querySelector("#estado");

  cidade.value = "";
  estado.value = "";
  //let bairro = login.querySelector("bairro");

if(!("errors" in data)){

  cidade.value = data.city;
  estado.value = data.state;

}else{

  alert("CEP não encontrado");
  
  cep.value = "";

}

  //bairro.value = data.bairro;

}


/* 
function loginInsetCheckCep(cep) {

  var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=loginInsertCepFillFields';

  document.body.appendChild(script);

} */