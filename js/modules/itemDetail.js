function itemDetail(item,data){

  if(data.files){

    var detalhes = cE("detalhes");

    Object.entries(data.files).forEach(([key, value]) => {
          
      detalhes.appendChild(itemDetailFigure(value));	

    });

    item.appendChild(detalhes);

  }

}