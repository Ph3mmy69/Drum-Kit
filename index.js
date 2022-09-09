var length = document.querySelectorAll(".drum").length;


// Mouse func
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML)

        animation(this.innerHTML)
    });
}


// Keyress func
document.addEventListener("keypress", function(event) {
    makeSound(event.key)

    animation(event.key)
})



// MakeSound func
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break;

        case "l":
            var kickbass = new Audio('./sounds/kick-bass.mp3')
            kickbass.play()
            break;

        default:
            break;
    }
}


function animation(cKey) {

    var k = document.querySelector("." + cKey);

    k.classList.add("pressed");

    setTimeout(() => {
        k.classList.remove("pressed");
    }, 100);
}

































// function Bellboy (name, age, workPermit, language) {
//     this.name = name;
//     this.age = age;
//     this.workPermit = workPermit,
//     this.language = language;

//     clean: function () {
//         alert("Cleaning in progress");
//     }
// }

// var bellBoy1 = new Bellboy("john", 19, "Yes", ["English", "French"]);


// var bellBoy2 = new Bellboy("john", 39, "Yes", ["English", "Chinese"]);

// var bellBoy3 = new Bellboy("Johnathan", 29, "No", ["Japanese", "Swiss"]);

// console.log(bellBoy2.name);

// bellBoy3.clean






// var bellboy = {
//     name: "John",
//     age: 19,
//     workPermit: "No",
//     language: "Swahili",

//     clean: function () {
//         alert("Cleaning in progress");
//     }
// }


// bellboy.clean();
















// var $0 = document.querySelector("button");
// $0.addEventListener("click", clicker);

// function clicker() {
//  audio.play();
// }


// audio.play();