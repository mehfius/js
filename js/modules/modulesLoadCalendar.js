function modulesLoadCalendar(){
  
  let calendar    = createObject('{"tag":"calendar"}');
  let div         = createObject('{"tag":"div","id":"myCalendar","class":"vanilla-calendar"}');
  let events      = createObject('{"tag":"events"}');
  let newevent    = createObject('{"tag":"button","type":"button","innerhtml":"Agendar consulta"}');
  let list        = createObject('{"tag":"list"}');
  let consulta    = createObject('{"tag":"div"}');
  
  consulta.innerHTML="15/10/2020 - Cláudia Solmucci - Oncologia";

  list.append(consulta);
  events.append(newevent,list);
  calendar.append(div,events);

  document.body.append(calendar);
  
  let myCalendar = new VanillaCalendar({
    
      selector: "#myCalendar",
      onSelect: (data, elem) => {

          var data  = new Date(data.date);
        
          var dia = data.getDate().toString().padStart(2, '0');
          var mes = (data.getMonth()+1).toString().padStart(2, '0');
          var ano = data.getFullYear();

          console.log(ano+"-"+mes+"-"+dia);

      }
    
  });
  
}


function newevent(){
  
  
}