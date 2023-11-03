var fileName = document.getElementById("txtHeader");
var fileContent = document.getElementById("txtContent");

fileName.value="";
fileContent.value="";
function addCard() {
    var cardTitle = document.getElementById("txtHeader").value;
    var cardContent = document.getElementById("txtContent").value;

    if (cardTitle && cardContent) {
        var cardContainer = document.querySelector(".card-container");

        var newCard = document.createElement("div");
        newCard.className = "task-card";
        newCard.innerHTML = `
            <h2>${cardTitle}</h2>
            <p>${cardContent}</p>
            <button onclick="editCard(this)">Edit</button>
            <button onclick="deleteCard(this)">Delete</button>
        `;

        cardContainer.appendChild(newCard);

        // Clear the input fields
        document.getElementById("txtHeader").value = "";
        document.getElementById("txtContent").value = "";
    } else {
        window.alert("Please enter both title and content.");
    }
}

function editCard(button) {
    var card = button.parentElement;
    var title = card.querySelector("h2").textContent;
    var content = card.querySelector("p").textContent;

    document.getElementById("txtHeader").value = title;
    document.getElementById("txtContent").value = content;

    // Remove the card
    card.parentElement.removeChild(card);
}

function deleteCard(button) {
    var card = button.parentElement;
    card.parentElement.removeChild(card);
}
  
function changeStyle(propertyName)
{
switch(propertyName)
{
case "b":
if(fileContent.style.fontWeight === "bold")
fileContent.style.fontWeight = "normal";
else
fileContent.style.fontWeight = "bold";
break;
case "i":
if(fileContent.style.fontStyle === "italic")
fileContent.style.fontStyle = "normal";
else
fileContent.style.fontStyle = "italic";
break;
case "n":
fileContent.style.fontWeight = "normal";
fileContent.style.fontStyle = "normal";
fileContent.style.textDecoration = "none";
break;
case "u":
if(fileContent.style.textDecoration === "underline")
fileContent.style.textDecoration = "none";
else
fileContent.style.textDecoration = "underline"
break;

}
}