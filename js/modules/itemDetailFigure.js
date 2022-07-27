function itemDetailFigure(data) {


  var config = JSON.parse(localStorage.config);

  let figure = createObject('{"tag":"figure"}');

  let split = data.filename.split(".");

  let extensao = split[1];
  let filename = split[0];

  let onclick = "";

  switch (extensao) {

    case "jpg":

      var url = config.img + filename + ".jpg?key=" + data.key;

      onclick = "window.open('" + url + "','_blank');"
      figure.setAttribute("onclick", onclick);
      figure.style.backgroundImage = "url(" + config.imgp + filename + ".jpg?key=" + data.key + ")";
      break;

    case "pdf":

      onclick = "window.open('" + config.pdf + filename + ".pdf','_blank');"


      var label = createObject('{"tag":"label","innerhtml":"pdf"}');

      figure.setAttribute("onclick", onclick);
      figure.append(label);
      figure.style.backgroundImage = "url(" + config.imgp + filename + ".jpg?key=" + data.key + ")";
      break;

    case "mp4":

      onclick = "window.open('" + config.mp4 + filename + ".mp4','_blank');"

      var video = createObject('{"tag":"video"}');
      var source = createObject('{"tag":"source","src":"' + config.mp4 + filename + '.mp4","type":"video/mp4"}');

      figure.setAttribute("onclick", onclick);
      video.append(source);
      figure.append(video);
      figure.style.backgroundImage = "url(" + config.imgp + filename + ".jpg?key=" + data.key + ")";

      /* 
      <video onclick="window.open('https://suite8.com.br/uploads/mp4/6561f49aa701e78efbd80978f967096b.mp4','_blank');"><source src="https://suite8.com.br/uploads/mp4/6561f49aa701e78efbd80978f967096b.mp4" type="video/mp4"></video>
             */

      break;
  }



  return figure;
}