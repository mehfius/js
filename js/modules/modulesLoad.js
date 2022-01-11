function modulesLoad(array) {

    let tabela   = createObject('{"tag":"tabela"}');


    var modules = document.body.getAttribute("modules");

    Object.entries(array).forEach(([key, value]) => {

      let item   = createObject('{"tag":"item","c":"'+value.id+'"}');

        if (modules == "medicos" || modules == "pacientes" || modules == "formcovid") {

            loadItemView(item, value);

        } else {

            loadItem(item, value);

        }

        tabela.append(item);

    });
    
    return tabela;

}