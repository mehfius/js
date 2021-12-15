const filterSearch = (modules,placeholder) => {
  
    let div           = createObject('{"tag":"filtersearch","class":"'+modules+'"}');
    let label         = createObject('{"tag":"input","name":"finder","id":"filterlabel'+modules+'","placeholder":"'+placeholder+'","class":"default","autocomplete":"off"}');
    let labelfigure   = createObject('{"tag":"labelfigure"}');
    let icon          = createObject('{"tag":"icon","class":"icon-cross"}');
    let input         = createObject('{"tag":"input","filternamemodules":"'+modules+'","filters":"1","type":"hidden","id":"filtercodigo'+modules+'"}');
    let select        = createObject('{"tag":"div"}');

        div.append(labelfigure,label,icon);

        label.onkeyup = function() {labelkeyup(this);}

        select.onmouseover = function(){this.parentElement.setAttribute("mouse","1");}
        
        select.onmouseout = function(){this.parentElement.setAttribute("mouse","0");}
        
        label.onblur = function() {};
        
        label.onclick = function() {
            
            this.parentElement.setAttribute("mouse","1");
            
        };
    
        icon.onclick=(function(){
        
            var selectsearch=this.parentElement;

                div.innerHTML = '';
                document.getElementById("filterlabel"+modules).setAttribute("placeholder",placeholder);
                document.getElementById("filterlabel"+modules).value="";
                document.getElementById("filtercodigo"+modules).value="";
                
                selectsearch.getElementsByTagName("labelfigure")[0].style="";
                
                tabelaLoad("",function(tabela){
                
                    rE(got(document,'tabela'));
                    document.getElementsByTagName("view")[0].appendChild(tabela);
                
                });
        
        });
    
        label.onfocus = function() {
            

            
        };

        const optclick = (el) =>{

            input.value=el.codigo;
            label.value=el.label;
            label.setAttribute("placeholder",el.label);

            tabelaLoad(gA(),function(tabela){

                rE(got(document,'tabela'));
                document.getElementsByTagName("view")[0].appendChild(tabela);

            });
            
            div.parentElement.setAttribute("mouse","0");

        }

        const labelkeyup = (e) => {

            select = e.parentElement;
            div    = select.querySelector("div");

            if(e.value.length>3){

                select = e.parentElement;
                div    = select.querySelector("div")
                
                    let xmlhttp;

                    xmlhttp = new XMLHttpRequest();

                    xmlhttp.onreadystatechange = function() {

                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                            div.innerHTML = '';

                            let json = JSON.parse(xmlhttp.responseText);

                            for (var [key, el] of Object.entries(json)) {
 
                                let div         = select.querySelector("div")
                                let input       = select.querySelector("input[type='hidden']")

                                let opt         = createObject('{"tag":"opt"}'); 
                                let optlabel    = createObject('{"tag":"label","innerhtml":"'+el.label+'"}');
                                let optfigure   = createObject('{"tag":"figure"}');
                                let optcount    = createObject('{"tag":"count","innerhtml":"'+el.contador+'"}'); 
                                let optcodigo   = createObject('{"tag":"codigo","innerhtml":"'+el.codigo+'"}');
                                let optemail   = createObject('{"tag":"email","innerhtml":"'+el.email+'"}');

                                    opt.append(optfigure,optcodigo,optemail,optlabel,optcount);
        
                                    div.append(opt);

                                    if(el.filename!==null){

                                        optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+el.filename+"?key="+el.key+");");

                                    }

                                    opt.onclick=(function(){

                                        optclick(el);

                                    });

                            }

                        
                        }

                    }

                    let data = new FormData();
                    let url  = localStorage.getItem("url")+'/admin/json/jsonSelect.php';

                        data.append('modules', modules);
                        data.append('session', localStorage.session);
                        data.append('string', e.value);

                    xmlhttp.open("POST", url, true);
                    xmlhttp.send(data);

            }

    }

    
	div.append(select,input);


  return div;
  
}