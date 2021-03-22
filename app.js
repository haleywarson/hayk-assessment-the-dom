// * Changes the contents of the `h1` to "HACKED!"
document.getElementById("pageTitle").textContent = "HACKED!" 

// * Change the href of all the links to `https://thebadguys.com`
const links = document.querySelectorAll('a')
function changeLinks() {
    for (let link in links) {
        links[link].href = "https://thebadguys.com"
    }
}
changeLinks()
    
// * Adds this image to the beginning of the body: `https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png`
const image = document.createElement('img')
image.src = 'https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png'
document.getElementById("topHead").append(image)

// * Deletes the paragraph tags that are direct children of `<main>`
// const mainP = document.querySelectorAll("main > p")

// function removeMainChildren() {
//     mainP.remove();
// }

// mainP.forEach(removeMainChildren());


// * Adds a paragraph tag to the end of the document that says "Your account has been compromised."
const newP = document.createElement('p')
newP.textContent = "Your account has been compromised."
document.querySelector('div').append(newP)

// // * Reset the days counter to `0`
document.querySelector('span').textContent = "0"