// Uitleg lay-out
// 1. variabelen, 2. user story, 3. functies; 

// Eerst wordt er een variabele gemaakt van de API key van het rijksmuseum Dit wordt gedaan met 'const endpoint'
// const endpoint = API rijksmuseum link 

// Hierna wordt deze variabele gelogt met '.then functie response > return response'(een reactie (responstie) van de data en deze terugloggen) 
// en '.then functie rijksmuseumData > console.log' (data van de het respons wordt opgenomen dit is dan ook te zien).
// Denk aan meet & regeltechniek response en data 
// Deze functie zijn terug te lezen in sectie 3.

// .then(function(rijksmuseumData) hierbij geef ik aan dat mijn nieuwe functie de Rijksmuseum data is 
// krijg kunst = functie 
// eventloop = alle data gegevevns van top tot teen oftewel alld arrays.
// let en var zijn ongeveer hetzelfde alleen gaat var over de gehele functie en daarom wordt er gebruik gemaakt van 'let'
// 0=array 
// q=vermeer (om te typen = zoekveld )

 // Functie kunst generen in HTML
    // $('ul') = hetzelfde als document.querySelector. Alleen wordt het niet aangeraden om j.query te gebruiken. 
   // Hierbij geef ik specifiek aan dat deze in de body zit. ('body ul') de ul staat ook aangeveven in de HTML.
  // op de pagina wordt tot 20 opgeteld <20, daarna wordt er op de volgende pagina weer opgeteld tot 20 'kunst++
 // 'beforebegin' geeft aan waar deze in de unorder (ul) list komt. in dit geval dus in de HTML. met de js. functie; insertAdjacentHTML wordt de list in de HTML genereerd.
// list.insertAdjacentHTML('beforebegin', '<li><a href="#"></li>' = voor elk onderdeel wordt een list item gemaakt. 



// 1. De variabelen [the endpoint]
const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection/?key=GnjcnmeH'; 


// 2. The user story [user krijgt kunst] Deze functie wordt aangeroepen in punt 3. 


// 3.Functies [Data ophalen en loggen, kunst genereren in HTML] 

   // Function get data log;
   fetch (endpoint)
    .then(function(response){
        return response.json()
    })
       // Functie rijksmuseum data loggen + kunst renderen in HTML
       .then(function(rijksmuseumData) {
            console.log(rijksmuseumData);
            console.log(rijksmuseumData.artObjects[0].webImage.url)
                
            const artObjects = rijksmuseumData.artObjects
            
                for (let i = 0; i <745519; i++) {
                    const  kunstimg = rijksmuseumData.artObjects[i].webImage.url
                    document.querySelector('ul').insertAdjacentHTML(`beforeend` , `<li><img src="${kunstimg}"></li>` )   
                    document.body.style.backgroundColor = 'red';  
                        }
                 })























        
       




