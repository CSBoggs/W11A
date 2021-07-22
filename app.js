// Mouseover and function to change div background color

// function changeBackgroundColor(color) {
//     document.getElementById("container").style.backgroundColor = color;
// }

// var container = document.getElementById("container");
//     container.addEventListener("click", changeBackgroundColor('red'));
    

var container = document.getElementById("container");
container.addEventListener("mouseover", function() {
    container.style.backgroundColor = "red";
});


// Mouseclick and function to reset div background color

var container = document.getElementById("container");
container.addEventListener("click", function() {
    container.style.backgroundColor = "white";
});

// User presses space and div hides

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        var container = document.getElementById("container");
        container.style.display = "none";
    }
})