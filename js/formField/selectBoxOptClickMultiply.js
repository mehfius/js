function selectBoxOptClickMultiply(e,data,modules){

    let input   =  document.getElementById(modules);
    let valueid =  input.getAttribute("valueid");
    let cards   = input.parentElement.querySelector("cards");
   
        json = (valueid)?JSON.parse(valueid):[];

        json.push(data.id);

    input.setAttribute('valueid',JSON.stringify(json));

    selectAjaxListCards([data]);

    rE(document.querySelector('selectbox'));

}