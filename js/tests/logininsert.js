const testinsert = function(){

  let label    = MD5(rnd(20)).slice(0, 12);
  let email    = MD5(rnd(20)).slice(0, 6)+"@testeinsert.com";
  let password = MD5(rnd(20)).slice(0, 6);
  let cep      = "31170660";
  let whatsapp = "5531998765432";
  let cpf      = "90070060050";

  document.querySelector("bt1").click();
  document.querySelector("#btinsert").click();

  document.querySelector("#label").value    = label;
  document.querySelector("#email").value    = email;
  document.querySelector("#password").value = password;
  document.querySelector("#cep").value      = cep;
  document.querySelector("#whatsapp").value = whatsapp;
  document.querySelector("#cpf").value      = cpf;

}

const rnd = (() => {

    const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));

    const sets = {
        num: gen(48,57),
        alphaLower: gen(97,122),
        alphaUpper: gen(65,90),
        special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`]
    };

    function* iter(len, set) {

        if (set.length < 1) set = Object.values(sets).flat(); 
        for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]

    }

    return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);

})();