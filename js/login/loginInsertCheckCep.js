
function loginInsertCepFillFields(data){

  let login = document.querySelector("login")

  let cidade = login.querySelector("#cidade");
  let estado = login.querySelector("#estado");

  cidade.value = "";
  estado.value = "";
  //let bairro = login.querySelector("bairro");

if(!("erro" in data)){
  cidade.value = data.localidade;
  estado.value = data.uf;
}else{
  alert("CEP não encontrado");
}

  //bairro.value = data.bairro;

}



function loginInsetCheckCep(cep) {

  var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=loginInsertCepFillFields';

  document.body.appendChild(script);

}