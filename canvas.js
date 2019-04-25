// Variables 

// Canvas Variables
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Instruction Text Variables
const instruction = document.getElementsByClassName('hide')
instr = Array.from(instruction)




// Cursor mapping Variables
const cursor = {
    x: undefined,
    y: undefined
}


// Settings

// Hide Mouse Default Cursor
document.body.style.cursor = 'none';


// Event Listeners

// Get Mouse Coordonates
addEventListener('mousemove', event => {
    cursor.x = event.clientX
    cursor.y = event.clientY
})

// Resize Canvas on Page Resize
window.onload = function () {
    responsive()
    window.addEventListener('resize', responsive, false)
}

// Fade In Sub Text on Page Load
window.addEventListener('load', () => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove("hide")
    instr[i].classList.add("fadein")
    }
})

// Add Touch Coordonates
addEventListener('touchmove', (event) => {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    cursor.x = touch.pageX;
    cursor.y = touch.pageY;
  }
}, false);


// Utils

// Distance Measuring 
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}


// Create Responsive Canvas 

function responsive() {
    c.canvas.width = window.innerWidth 
    c.canvas.height = window.innerHeight / 1.18
    init()
}


// Objects

function Circle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = 0;
    this.velocity = {
        x: 10,
        y: 10
    }

    // Draw Function
    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    // Update Function
    this.update = function() {
        this.draw()  
    } 
}


// Implementation
let circle1; 
let circle2;
function init() {
    circle1 = new Circle(canvas.width / 2, canvas.height/2, canvas.width/900, 'pink');
    circle2 = new Circle(canvas.width / 1.5, canvas.height / 3, canvas.height/19, 'white'); 
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    circle1.update();
    circle2.update();
    circle2.x = cursor.x;
    circle2.y = cursor.y;

    // Create CONSCIOUSNESS - PUSH IT OUT Cursor Tag
    c.fillStyle = 'black'
    c.font = `normal ${circle2.radius/2.5}px Arimo, monospace`
    c.textAlign = 'center'
    c.fillText("Push It", circle2.x, circle2.y - circle2.radius/14 )
    c.fillText("Out", circle2.x, circle2.y + circle2.radius/2 )
    c.textAlign = 'start'

    // Sub Text Fade out
    if (circle1.radius > 30) {
        for (let i = 0; i < instr.length; i++) {
        instr[i].classList.remove('fadein')
        instr[i].classList.add('fadeoutslow')
        }
    }  

    if (circle1.radius > 60) {

        // Create Canvas FOCUS ON IT Text
        // let grd1 = c.createLinearGradient(0, 0, 100, 400);
        
        // grd1.addColorStop(0, "rgb(0,155,255)");
        // grd1.addColorStop(1, "rgb(0,151,169)");
     
        // c.font = `normal 110px Arimo, monospace`
        // c.fillStyle = grd1;
        // c.fillText("F   O   C   U   S      O   N     I   T", 0, canvas.height - 10, canvas.width)
    }

    if (circle1.radius > 70) {

        // Highlight Canvas FOCUS ON IT Text
        // c.font = 'normal 110px Arimo, monospace'
        // c.strokeStyle = 'cyan';
        // c.strokeText("F   O   C   U   S      O   N     I   T", 0, canvas.height - 10, canvas.width)
    }

    if (circle1.radius > 73) {

        // Create CLEAR YOUR MIND Cursor Tag 
        // c.font = `normal ${circle2.radius/2}px Arimo, monospace`
        // c.fillStyle = 'aliceblue'
        // c.fillText("CLEAR YOUR MIND", circle2.x - circle2.radius - 239, circle2.y - circle2.radius)
    }

    if (circle1.radius > 76) {

        // Create PUSH IT OUT Cursor Tag
        // c.font = `normal ${circle2.radius/2}px Arimo, monospace`
        // c.fillStyle = 'aliceblue'
        // c.fillText("PUSH IT OUT", circle2.x - circle2.radius - 24, circle2.y + circle2.radius + 30)
    }

    if (circle1.radius > 77) {

        // Create Indication Arrow 1
        c.strokeStyle = 'lightskyblue'
        c.beginPath()
        c.moveTo(circle1.x - 20, canvas.height - 60)
        c.lineTo(circle1.x + 1, canvas.height - 65)
        c.lineTo(circle1.x + 21, canvas.height - 60)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 78) {

        // Create Indication Arrow 2
        c.strokeStyle = 'lightskyblue'
        c.beginPath()
        c.moveTo(circle1.x - 30, canvas.height - 80)
        c.lineTo(circle1.x + 1, canvas.height - 87)
        c.lineTo(circle1.x + 31, canvas.height - 80)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 79) {

        // Create Indication Arrow 3
        c.strokeStyle = 'lightskyblue'
        c.beginPath()
        c.moveTo(circle1.x - 40, canvas.height - 100)
        c.lineTo(circle1.x + 1, canvas.height - 110)
        c.lineTo(circle1.x + 41, canvas.height - 100)
        c.stroke()
        c.closePath()
    }


     
    if (circle1.radius < 50) {  

        // Thought Circle Increase
        circle1.radius += 0.30 

    } else { 

        // Create YOUR THOUGHT Circle Cursor Tag
        c.fillStyle = 'black'
        c.textAlign = 'center'
        c.font = `normal ${circle1.radius/4}px Arimo, monospace`
        c.fillText("Your Thought", circle1.x, circle1.y + 2)
        c.textAlign = 'start'

        // Thought Circle Increase
        circle1.radius += 0.065;
    }
    
    // If the circles touch 
    if (distance(circle1.x,circle1.y,circle2.x,circle2.y) < 
        circle1.radius + circle2.radius) {

            // Hide Highlighting on Canvas FOCUS ON IT Text
            // c.font = 'normal 110px Arimo, monospace'
            // c.strokeStyle = 'darkcyan';
            // c.strokeText("F   O   C   U   S      O   N     I   T", 0, canvas.height - 10, canvas.width)

            // Sub Text Fade Out
            for (let i = 0; i < instr.length; i++) {
            instr[i].classList.remove('fadein')
            instr[i].classList.add('fadeoutfast') 
            }

            // Thought Circle Moves Upward
            circle1.y -= circle1.velocity.y

            // Thought Circle Decrease  
            circle1.radius -= 1

            // Consciousness Circle Increase
            circle2.radius += 1.2       
    } 

    // If the Thought Circle is pushed out of the window
    if (circle1.y + circle1.radius <= 0) {

            // Reset Thought Circle Radius
            circle1.radius = 0;

            
                if (circle2.radius > 50) {
                    circle2.radius -= 0.4
                }   

            // Sub Text Fade In
            for (let i = 0; i < instr.length; i++) {
            instr[i].classList.remove('fadeoutfast')
            instr[i].classList.add('fadein')
            }
            // Update Sub Text
            
            instr[0].innerHTML = "Click/Touch"
            instr[1].innerHTML ="to invite your next thought."
            
            
            // Listen for User Click Action
            addEventListener('click', () => {

                // Materialize Thought
                init()  
                circle1.radius = 25

                // Sub text Fade Out
                for (let i = 0; i < instr.length; i++) {
                instr[i].classList.remove('fadein')
                instr[i].classList.add('fadeoutfast')  
                }
            })
    }
}


// Set Delay for Initial Thought 
setTimeout(() => {   
    init()
    animate()  
}, 22000);


// Start Instruction Sub Text

// Fade Out Sub Text
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein')
    instr[i].classList.add('fadeoutslow') 
    }
 }, 4000);

// Fade In
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
    instr[0].innerHTML = ''
    instr[1].innerHTML = 'Ask yourself...'
}, 8000);

// Fade Out
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein') 
    instr[i].classList.add('fadeoutslow')
    }
    //instr.id = 'fadeoutslow' 
 }, 10000);

 // Fade In
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
     //instr.id = 'fadein' 
     instr[0].innerHTML = ''
     instr[1].innerHTML = '"What is my next thought?"'
 }, 12000);
 
 // Fade Out
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein') 
    instr[i].classList.add('fadeoutslow')
    }
    //instr.id = 'fadeoutslow' 
 }, 15500);
 
 // Fade In
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
     //instr.id = 'fadein' 
     instr[0].innerHTML = ''
     instr[1].innerHTML = 'Picture it.'
 }, 18000); 

 


