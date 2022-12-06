let breeds = [];

document.addEventListener("DOMContentLoaded", function (){
    loadImages();
    loadBreedOptions();
}); //when page loaded make these functions work

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
        results.message.forEach(image => addImage(image));
    });
}//fetch the data
// give respond as json
//add those fetched images to dom for each one of them

//we also need to show the images in the html file, for this function to be functional
function addImage(dogPicUrl){
    let container = document.querySelector("#dog-image-container");
    let newImageEl = document.createElement("img");
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
}//we give value to html tag because we are in js right now
//we need to create img for images because we are dealing with images
//img tag needs to have src and that is changable so we make it the attribute
//and lastly we are making the adoption part and container adopts the image...




// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the `<ul>` provided in `index.html`
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function loadBreedOptions(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        //what action will happen after fetch? add those here

        breeds = Object.keys(results.message);
        updateBreedList(breeds);//updates by the change
        addBreedSelectListener();//usable dropdown
    });
}//fetch the url
//make it give respond as json
//make the results be shown in ul tag inside html file



function updateBreedList(breeds){
    let ul = document.querySelector("#dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
} // create a js value for html tag
//clean it after every click and reshow it
//append to each one of breeds but how?
//you can do it with another function that answers how



//Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
//the user clicks on any one of the `<li>`s, the font color of that `<li>`
//changes. This can be a color of your choosing.
function addBreed(breed){
let ul = document.querySelector("#dog-breeds");
let li = document.createElement("li");
li.innerText = breed;
li.style.cursor = "pointer";
ul.appendChild(li);
li.addEventListener("click", updateColor);
}//ul needs a js value because we need to use it in js file
//we are also gonna need li because we are gonna list the breeds
//we give it a style it is  not obligatory
//then we need to say that this li belongs to this ul, so we are appending it
//also li needs a function that changes color. first argument is the action,  second argument is how the action will be done

function updateColor(e){
    e.target.style.color = "purple"
}//color changing click action how will be done



//Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
//so that the user can filter breeds that start with a particular letter using a
//[dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

//For example, if the user selects 'a' in the dropdown, only show the breeds with
//names that start with the letter a. For simplicity, the dropdown only includes
//the letters a-d. However, we can imagine expanding this to include the entire
//alphabet.

//in short we need a dropdown filter for a particular letter
//and we need to append this function to a thing to use it xd

function breedFilter (letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
}//basically makes the basic filter for letters


function addBreedSelectListener(){
    let breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", function (e){
        breedFilter(e.target.value)
    });
}//makes filter usable  in dropdown
//now we have to add it to the fetch function because this is how we want things to be done

//hmm the list doesnt shown

function removeChildren(element){
    let child = element.lastElementChild;
    while (child){
        element.removeChild(child);
        child = element.lastElementChild;
    }
}


