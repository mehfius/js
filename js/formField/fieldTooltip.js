function fieldTooltip(div,data){

  if(data){

    var tooltip   = createObject('{"tag":"tooltipv2","innerhtml":"'+data.title+'"}');

    var icon   = createObject('{"tag":"tooltipv2icon","class":"icon-question"}');

        icon.append(tooltip);

    div.appendChild(icon); 
  }
  
}

