function itemDetailFigure(data){


      var config = JSON.parse(localStorage.config);

      let figure = createObject('{"tag":"figure"}');

			let split  =data.filename.split(".");

      let extensao = split[1];
      let filename = split[0];

      let onclick = "";

      switch(extensao) {

      case "jpg": 

          let url = config.img+filename+".jpg?key="+data.key;

          onclick="window.open('"+url+"','_blank');"
          figure.setAttribute("onclick",onclick);

        break;

      case "pdf": 

        onclick = "window.open('"+config.pdf+filename+".pdf','_blank');"
        

        let label = createObject('{"tag":"label","innerhtml":"pdf"}');

            figure.setAttribute("onclick",onclick);
            figure.append(label);

        break;
      }        

			figure.style.backgroundImage="url("+config.imgp+filename+".jpg?key="+data.key+")";
		
return figure;
}