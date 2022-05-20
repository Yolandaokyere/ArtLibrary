import { fetchData } from "./fetchData.js";

 fetchData({query: 'vegan', destination: '.media-group1 ul'}) // Fetch Vegan data 
 fetchData({query: 'eiwitten', destination: '.media-group2 ul'}) // Fetch Protein data 
 fetchData({query: 'intermittent fasting', destination: '.media-group3 ul'}) // Fetch Fasting data 

// Hashtags linkjes
window.addEventListener('hashchange', ()=> {
  let hash = window.location.hash; // je krijgt de linkjes met #
  const hashtagRemoved = hash.replaceAll('#','');
  console.log("window.location.hash : " + hashtagRemoved);
  return hashtagRemoved // met return kan ik de functie in het hele bestand gebruiken
})

