// Variables 

// Canvas Variables
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Instruction Text Variables
const instr = document.getElementById('hide')

// Mouse mapping Variables
const mouse = {
    x: undefined,
    y: undefined
}


// Settings

// Hide Mouse Default Cursor
document.body.style.cursor = 'none';


// Event Listeners

// Get Mouse Coordonates
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

// Resize Canvas on Page Resize
window.onload = function () {
    responsive()
    window.addEventListener('resize', responsive, false)
}

// Fade In Sub Text on Page Load
window.addEventListener('load', () => {
    instr.id = 'fadein'
})


addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    mouse.x = touch.pageX;
    mouse.y = touch.pageY;
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
    c.canvas.width = window.innerWidth - 10
    c.canvas.height = window.innerHeight / 1.15
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
    circle2 = new Circle(mouse.x, mouse.y, canvas.width/13, 'white'); 
}


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    circle1.update();
    circle2.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;

    // Create CONSCIOUSNESS - PUSH IT OUT Cursor Tag
    c.fillStyle = 'black'
    c.font = `normal ${circle2.radius/2.6}px Arimo, monospace`
    c.textAlign = 'center'
    c.fillText("PUSH IT", circle2.x, circle2.y - circle2.radius/10 )
    c.fillText("OUT", circle2.x, circle2.y + circle2.radius/1.7 )
    c.textAlign = 'start'

    // Sub Text Fade out
    if (circle1.radius > 30) {
       instr.id ='fadeoutslow'
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
        c.moveTo(circle1.x - 20, canvas.height - 160)
        c.lineTo(circle1.x + 1, canvas.height - 165)
        c.lineTo(circle1.x + 21, canvas.height - 160)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 78) {

        // Create Indication Arrow 2
        c.strokeStyle = 'lightskyblue'
        c.beginPath()
        c.moveTo(circle1.x - 30, canvas.height - 180)
        c.lineTo(circle1.x + 1, canvas.height - 187)
        c.lineTo(circle1.x + 31, canvas.height - 180)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 79) {

        // Create Indication Arrow 3
        c.strokeStyle = 'lightskyblue'
        c.beginPath()
        c.moveTo(circle1.x - 40, canvas.height - 200)
        c.lineTo(circle1.x + 1, canvas.height - 210)
        c.lineTo(circle1.x + 41, canvas.height - 200)
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
        c.font = `normal ${circle1.radius/4.5}px Arimo, monospace`
        c.fillText("YOUR THOUGHT", circle1.x, circle1.y + 6)
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
            instr.id = 'fadeoutfast' 

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

            // Update Sub Text
            instr.innerHTML = "Click to invite your next thought."
                if (circle2.radius > 50) {
                    circle2.radius -= 0.4
                }   

            // Sub Text Fade In
            instr.id = 'fadein'
            
            // Listen for User Click Action
            addEventListener('click', () => {

                // Materialize Thought
                init()  
                circle1.radius = 25

                // Sub text Fade Out
                instr.id = 'fadeoutfast'  
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
    instr.id = 'fadeoutslow' 
 }, 4000);

// Fade In
setTimeout(() => {
    instr.id = 'fadein' 
    instr.innerText = 'Ask yourself'
}, 8000);

// Fade Out
setTimeout(() => {
    instr.id = 'fadeoutslow' 
 }, 10000);

 // Fade In
 setTimeout(() => {
     instr.id = 'fadein' 
     instr.innerText = '"What is my next thought?"'
 }, 12000);
 
 // Fade Out
 setTimeout(() => {
    instr.id = 'fadeoutslow' 
 }, 15500);
 
 // Fade In
 setTimeout(() => {
     instr.id = 'fadein' 
     instr.innerText = 'Picture it'
 }, 18000); 

 


