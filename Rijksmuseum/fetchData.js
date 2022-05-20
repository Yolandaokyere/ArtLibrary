import { renderData } from "./renderData.js";
//Data
const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=10';
const searchField = document.getElementById('searchField');
const enter = document.getElementById('enter');
const searchForm = document.querySelector('form');
const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=GnjcnmeH&ps=10&imgonly=true&q=';
let theData;
const username = document.querySelector("username");
const overlay = document.querySelector("overlay");
const titleClass = document.querySelector("titleClass");
const titleShort = document.querySelector("titleShort");
const kunstImg = document.querySelector("kunstImg");

// Function requesting data from API & response;
fetch (endpoint)
.then(function(response){
    return response.json()
})

// Function logging the response of requested data 
.then(function(Data) {
    theData = Data;
    console.log(Data);

   
// Function rendering objects in HTML (displaying data on screen)
    for (let i = 0; i <Data.artObjects.length; i++) {
        const  kunstImg = Data.artObjects[i].webImage.url.slice(0, -3)+"=s1000"
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

export const fetchData = async ({ destination }) => {
    console.log(destination)
    const url = `${endpoint}`;
    
    // Try means "He, probeer dit..."
    try {
      const res = await fetch(url); // He wacht tot je een response krijgt van dit
      const json = await res.json() // Wacht dit omgezet is in JSON 
    
      renderData(json, destination) // Roep render functie
    
    } catch(e) { 
      // He, als er iets fout gaat, doe dan dit.
      console.log(e)
    }
    }