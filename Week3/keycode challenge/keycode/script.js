// const input = document.getElementsByTagName('input');


const welcome = document.getElementById('welcome');
const generator = document.getElementById('generator');
const head = document.getElementById('keycode');

function keycode(event) {
var key = event.key;
var location = event.location;
var which = event.which;
var code = event.code;
head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventCode").innerHTML= code;
document.getElementById("eventWhich").innerHTML= which;
generator.classList.remove("show");
welcome.remove()
}


// document.body.addEventListener ('onkeydown', (event) => {
//     if (event.which === null) {
//         generator.style.display = 'block'
//         welcome.style.display = 'none'
        
//     } else {
//         generator.style.display = 'none'
//         welcome.style.display = 'block'
        

// })

// generator.classList.toggle("show");