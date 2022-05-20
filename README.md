# 🖼️ArtLibrary:
ArtLibrary is a single page web app. The user can enjoy National art and info of the Rijksmuseum collection.
![2022-03-03 (63)](https://user-images.githubusercontent.com/97689634/156567932-6ce91251-a36a-4835-add8-34f2b412be20.png)

# 📝Course Description
This course is a intro how to build a web application without frameworks or unnecesarry libraries, but with vanilla HTML, CSS & JavaScript. The course will give a better understanding of how API's, frameworks and libraries work.

# 🔗API
The data is retrieved from Rijksdata by the Rijksmuseum;https://data.rijksmuseum.nl/object-metadata/api/ . 
The API gives acces to the collection with information about each object up to a total of 10,000. 

# WireFlow
![image](https://user-images.githubusercontent.com/97689634/157854336-597c5dca-b040-4230-a40e-32f6b4ebda92.png)

# Activity diagram
<img width="1341" alt="activity diagram" src="https://user-images.githubusercontent.com/97689634/157856219-378c1cca-6889-423a-bc69-c5cbd4273917.png">

# Fetch & render data
```
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
```
# To do list
- [x] Get data from API
- [x] Render data in HTML
- [] Render the next page with more data from API
- [] Loading, Error and Empty states 
- [] Modules
- [x] Working searchbar
- [x] Filter on name
- [] Filter on year
- [] Filter on title
- [] Detail page
- [x] Styling page
- [] Good looking page
- [] Documentation > Progress pages in Wiki
- [] How to install this project?
- [] Activity diagram
- [x] WireFlow
- [] License

# 💡Features

# 📚Sources
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element (Remove child from element)
https://medium.com/nerd-for-tech/skeleton-screens-in-plain-javascript-88bce254b0ab
[Best Practices for JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md)
