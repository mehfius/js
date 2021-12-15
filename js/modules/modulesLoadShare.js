function loadShare(element, array) {

  if (array.share !== null) {

  let share      = createObject('{"tag":"share"}');


Object.entries(array.share).forEach(([key, value]) => {

  let div      = createObject('{"tag":"div"}');
  let figure   = createObject('{"tag":"figure"}');
  let label   = createObject('{"tag":"label","innerhtml":"'+value.label+'"}');

    div.append(figure,label);  

    share.append(div);

});


    element.appendChild(share);

  }


}
