
function selectAjaxListCards(data){

  if(document.querySelector("cards")){

    var cards = document.querySelector("cards");

  }else{

    var cards = createObject('{"tag":"cards"}');

  }

  Object.entries(data).forEach(([key, value]) => {



    var card    = createObject('{"tag":"card","id":"'+value.id+'"}');
    var label   = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');
    var btclose = createObject('{"tag":"btclose","class":"icon-cancel-circle"}');

      selectFigure(card,value);
      card.append(label,btclose);
      cards.append(card);

      btclose.onclick=(function(){

        swal("Tem certeza que deseja remover este compartilhamento?", {
          buttons: {
                   defeat: "Sim",
            cancel: "Cancelar",
          },
        })
        .then((value) => {
          switch (value) {
    
            case "defeat":
               selectAjaxRemoveCard(this);
              break;

          }
        });

      });

  });

  return cards

}
