const jsonformlogin = `[
  {
    "tag": "btclose",
    "innerhtml": "x",
    "onclick": "closeFormLogin()"
  },
  {
    "tag": "p",
    "innerhtml": "Login",
    "class": "plogin"
  },
  {
    "tag": "p",
    "innerhtml": "Criar conta",
    "class": "pinsert"
  },
  {
    "tag": "p",
    "innerhtml": "Cadastro de Médico",
    "class": "pinsertm"
  },
  {
    "tag": "p",
    "innerhtml": "Recuperar senha",
    "class": "precovery"
  },
  {
    "tag": "login",
    "class": "login",
    "name": "login"
  },
  {
    "tag": "input",
    "id": "label",
    "placeholder": "Nome completo"
  },
  {
    "tag": "input",
    "id": "email",
    "placeholder": "seu@email.com",
    "type":"email"

  },
  {
    "tag": "input",
    "id": "password",
    "type": "password",
    "placeholder": "Crie uma senha"
  },
  {
    "tag": "input",
    "id": "cpf",
    "title": "Exemplo: 98776543220",
    "placeholder": "CPF (ex: 98776543220)",
    "type": "text",
    "pattern": "[0-9]{11}",
    "onkeypress": "filterInput(this)",
    "allow": "/[0-9]/"
  },
  {
    "tag": "input",
    "id": "whatsapp",
    "title": "Exemplo: 5531987654321",
    "placeholder": "Whatsapp (ex: 5531987654321)",
    "type": "text",
    "pattern": "[0-9]{13}",
    "onkeypress": "filterInput(this)",
    "allow": "/[0-9]/"
  },
  {
    "tag": "input",
    "id": "cep",
    "title": "Exemplo: 31222300"
  },
  {
    "tag": "input",
    "id": "rua",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "numero",
    "type": "text",
    "placeholder": "Número"
  },
  {
    "tag": "input",
    "id": "complemento",
    "type": "text",
    "placeholder": "Complemento"
  },
  {
    "tag": "input",
    "id": "bairro",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "cidade",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "input",
    "id": "estado",
    "type": "text",
    "readonly": "true"
  },
  {
    "tag": "button",
    "id": "btInsertPaciente",
    "type": "button",
    "textnode": "Sou paciente",
    "onclick": "clickBtInsertPaciente()"
  },
  {
    "tag": "button",
    "id": "btInsertMedico",
    "type": "button",
    "textnode": "Sou profissional da saúde",
    "onclick": "clickBtInsertMedico()"
  },
  {
    "tag": "input",
    "id": "crm",
    "placeholder": "Registro profissional",
    "type": "text",
    "onkeydown": "return inputTypeNumber(event);"
  },
  {
    "tag": "p",
    "innerhtml": "Ao clicar em cadastrar, você concorda com a <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/ target=_blank>política de privacidade</a>, <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>termos de uso</a> e <a href=https://docs.google.com/document/d/1EsgYKoX4mG40kd0oXfwbuID1t9Oi1oFvEGlxfZ9SAsw/ target=_blank>acordo do usuário</a> e <a href=https://docs.google.com/document/d/1i_-hQXcuPfCH48fUNvC-GN60zZas8eqSjrzoHPZtnPc/ target=_blank>política de cookies</a>.",
    "class": "ptermos"
  },
  {
    "tag": "input",
    "id": "areas",
    "type": "hidden"
  },
  {
    "tag": "div",
    "id": "status",
    "class": "status"
  },
  {
    "tag": "button",
    "id": "btEntrar",
    "innerhtml": "Entrar"
  },
  {
    "tag": "button",
    "id": "btCadastrar",
    "innerhtml": "Cadastrar"
  },
  {
    "tag": "button",
    "id": "btRecuperar",
    "innerhtml": "Recuperar"
  },
  {
    "tag": "button",
    "id": "btLogin",
    "type": "button",
    "textnode": "Fazer login",
    "onclick": "clickBtLogin()"
  },
  {
    "tag": "button",
    "id": "btInsert",
    "type": "button",
    "textnode": "Criar conta",
    "onclick": "clickBtInsert()"
  },
  {
    "tag": "button",
    "id": "btRecovery",
    "type": "button",
    "textnode": "Esqueci minha senha",
    "onclick": "clickBtRecovery()"
  }
]`;