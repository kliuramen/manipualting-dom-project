let paragraphDiv = document.getElementById("p-div");
let imageDiv = document.getElementById("img-div");

let paragraphBtn = document.getElementById("p-button");
paragraphBtn.addEventListener("click", () => {
    paragraphDiv.style.display = "block";
    imageDiv.style.display = "none";
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "chicken butt";
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.color = "blue";
    paragraphDiv.appendChild(newParagraph);

})

let imageBtn = document.getElementById("img-button");
imageBtn.addEventListener("click",() => {
    paragraphDiv.style.display = "none";
    imageDiv.style.display = "block";
    const newImage = document.createElement("img");
    newImage.src = "ramen.png";
    newImage.style.width = "250px";
    newImage.style.height = "250px";
    imageDiv.appendChild(newImage);
})
