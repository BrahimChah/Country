let myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

window.onload = function(){
    choices = document.querySelector("#country-datas");
    myChoice = document.querySelector("#country");
    form = document.querySelector("#myDiv");
    document.querySelector("#submit").addEventListener("click", function(){
        fetch(`https://restcountries.com/v3.1/name/${myChoice.value}?fullText=true` ,myInit)
        .then(function(response) {
            return response.json();
        })
        .then(function(myBlob) {
            if (!document.querySelector('#reponse')){
                rep = document.createElement('div');
                rep.setAttribute('id', 'reponse');
                rep.innerHTML = "<p>Nom : "+myBlob[0].name.common+"</p>"+
                                "<p>Capitale : "+myBlob[0].capital+"</p>"+
                                '<p>Drapeau : <img src="'+myBlob[0].flags.png+'"></p>';
                form.appendChild(rep);
            } else {
                document.querySelector('#reponse').remove()
                rep.setAttribute('id', 'reponse');
                rep.innerHTML = "<p>Nom :"+myBlob[0].name.common+"</p>"+
                                "<p>Capitale : "+myBlob[0].capital+"</p>"+
                                "<p>Drapeau : "+myBlob[0].flag+"</p>";
                form.appendChild(rep);
            };
            
        });    


    });
    fetch('https://restcountries.com/v3.1/all',myInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(myBlob) {
        let country=[];
        myBlob.forEach(element => {
            country.push(element.name.common);
        });
        for (i=0; i<country.length; i++){
            option = document.createElement('option');
            choices.appendChild(option);
            option.setAttribute('value', country[i]);
        }
    });  
};


