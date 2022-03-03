// 1. The variables [the endpoint] = Data
const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=100'; 


// 2. The user story [user krijgt kunst] Deze functie wordt aangeroepen in punt 3. 


// 3.Functies [Data ophalen en loggen, kunst genereren in HTML] 

    

   // Function requesting data from API & response;
   fetch (endpoint)
    .then(function(response){
        return response.json()
    })
   

    // Function logging the response of requested data 
        .then(function(Data) {
        console.log(Data);
        // console.log(Data.artObjects[0].webImage.url)
        
    // Function rendering objects in HTML 
                 for (let i = 0; i <Data.artObjects.length; i++) {
                                    const  kunstImg = Data.artObjects[i].webImage.url
                                    const  kunstTitel = Data.artObjects[i].longTitle
                                    const  titleShort = Data.artObjects[i].title
                                    document.querySelector('ol').insertAdjacentHTML(`beforeend` ,
                                    `<li>
                                    <h3 class="titleClass">${kunstTitel}</h3>
                                    <h2 class="titleShort">${titleShort}</h2>
                                    <img src="${kunstImg}">
                                    </li>`
                                    )  
                                    console.log(Data.artObjects[i]);              
                    }                
                })
                
    // Function refference to gallery, popup, kunstimg
    const gallery = document.getElementById('gallery');
    const popup = document.getElementById('popup');
    const selectedImage = document.getElementById('selectedImage');
    const selectedIndex = null;

    window.addEventListener('scroll', function() {
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })
   
    // Function popup

    // var kunstImg = document.querySelector('Data.artObjects[i].webImage.url')
    // console.log(kunstImg)

    // gallery.appendChild(kunstImg);

    // image.addEventListener('click', function() {
    //     popup.style.transform = 'translateY(0)'
    //     selectedImage.src = kunstImg;
    // })
  
   



