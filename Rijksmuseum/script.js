// 1. The variables [the endpoint] = Data
const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=100';
const searchField = document.getElementById('searchField');
const searchForm = document.querySelector('form');
const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=GnjcnmeH&ps=10&imgonly=true&q=';
let theData;
// 2. The user story [user krijgt kunst] Deze functie wordt aangeroepen in punt 3. 

// 3.Functies [Data ophalen en loggen, kunst genereren in HTML] 

// DATA API
// Function requesting data from API & response;
fetch (endpoint)
.then(function(response){
    return response.json()
})

// Function logging the response of requested data 
.then(function(Data) {
    theData = Data;
    console.log(Data);
   
// Function rendering objects in HTML 
    for (let i = 0; i <Data.artObjects.length; i++) {
        const  kunstImg = Data.artObjects[i].webImage.url
        const  kunstTitel = Data.artObjects[i].longTitle
        const  titleShort = Data.artObjects[i].title
        document.querySelector('ol').insertAdjacentHTML(`beforeend` ,`<li>
            <h3 class="titleClass">${kunstTitel}</h3>
            <h2 class="titleShort">${titleShort}</h2>
            <img src="${kunstImg}">
            </li>`
        )  
        console.log(Data.artObjects[i]);              
    }                
})
     
// Function requesting data from searchAPI link & return response; 
fetch (searchAPI)
.then(function(response){
    return response.json()
})


// keyAdvent searchBar
searchField.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); // toLowerCase >> to search case sensitive objects

    let newData = theData.artObjects.filter(element => {
        let searchableStrings = `${element.title} ${element.principalOrFirstMaker}`

        if(searchableStrings.toLowerCase().indexOf(searchString) !== -1) {
            return true;
        } else {
            return false;
        }
    })

    let parent = document.querySelector('ol');

    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for (let i = 0; i <newData.length; i++) {
        const  kunstImg = newData[i].webImage.url
        const  kunstTitel = newData[i].longTitle
        const  titleShort = newData[i].title
        document.querySelector('ol').insertAdjacentHTML(`beforeend` ,`<li>
            <h3 class="titleClass">${kunstTitel}</h3>
            <h2 class="titleShort">${titleShort}</h2>
            <img src="${kunstImg}">
            </li>`
        )  
    }   

    console.log(newData)
});

// for reloading the browser >> //     e.preventDefault();





