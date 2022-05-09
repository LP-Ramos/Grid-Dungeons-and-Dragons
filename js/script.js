var grid = document.getElementById("grid");
var active = document.getElementById("i01");

var char = ["Bethânia", 4, "mage", "human", 10, 15, 14, 18, 15, 13];

function place(tile, char){
    tile.innerHTML = "";

    var img = document.createElement("img");
    img.src = "./img/" + char[0] + ".png";
    img.classList.add("char-img");

    tile.appendChild(img);
}

grid.addEventListener("click", function(event) {
    var tile = event.target;
    if(!tile.classList.contains("char-img")) {
        place(tile, char);
    } else {
        console.log("Já está ocupado");
    }
});