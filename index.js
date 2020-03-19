let numDrums = document.querySelectorAll(".drum").length;

//Detecting Button Press

for (let i = 0; i < numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
        case "s":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;   
        case "d":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "f":
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            const kick = new Audio('sounds/kick.mp3');
            kick.play();
            break; 
        case "k":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case "l":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;                      
        default: console.log(buttonInnerHTML);
    };
}