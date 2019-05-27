// Variables 

// Canvas Variables
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Instruction Text Variables
const instruction = document.getElementsByClassName('hide')
instr = Array.from(instruction)

// Sub Text Div Variables
const subtextdiv = document.getElementById('subtextdiv')

// Sub Text Line Two 
const stextOne = document.getElementById('stextone')


// Learn More Button
const learnbtn = document.getElementById('btnhide')


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

    setTimeout(() => {
        for (let i = 0; i < instr.length; i++) {
            instr[i].classList.remove("hide")
            instr[i].classList.add("fadein")
        }
    }, 3000);
    
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
    circle2 = new Circle(cursor.x, cursor.y, canvas.height/400, 'white'); 
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

    if (circle1.radius > 77) {

        // Create Indication Arrow 1
        c.strokeStyle = 'rgb(139,0,0)'
        c.beginPath()
        c.moveTo(circle1.x - 10, circle1.y + 70)
        c.lineTo(circle1.x + 1, circle1.y + 67.8)
        c.lineTo(circle1.x + 11, circle1.y + 70)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 77.5) {

        // Create Indication Arrow 2
        c.strokeStyle = 'rgb(139,0,0)'
        c.beginPath()
        c.moveTo(circle1.x - 15, circle1.y + 60)
        c.lineTo(circle1.x + 1, circle1.y + 57)
        c.lineTo(circle1.x + 16, circle1.y + 60)
        c.stroke()
        c.closePath()
    }

    if (circle1.radius > 78) {

        // Create Indication Arrow 3
        c.strokeStyle = 'rgb(139,0,0)'
        c.beginPath()
        c.moveTo(circle1.x - 20, circle1.y + 50)
        c.lineTo(circle1.x + 1, circle1.y + 46)
        c.lineTo(circle1.x + 21, circle1.y + 50)
        c.stroke()
        c.closePath()
    }

    if (circle2.radius < 30) {
        circle2.radius += 0.7
    } else {
        circle2.radius -= 0.001
    }

     
    if (circle1.radius < 70) {  

        // Thought Circle Increase
        circle1.radius += 0.8 

    } else { 

        // Create YOUR THOUGHT Circle Cursor Tag
        c.fillStyle = 'black'
        c.textAlign = 'center'
        c.font = `normal ${circle1.radius/4}px Arimo, monospace`
        c.fillText("My Thought", circle1.x, circle1.y + 4)
        c.textAlign = 'start'

        // Thought Circle Increase
        circle1.radius += 0.04;
    }
    
    // If the circles touch 
    if (distance(circle1.x,circle1.y,circle2.x,circle2.y) < 
        circle1.radius + circle2.radius) {

            // Sub Text Fade Out
            for (let i = 0; i < instr.length; i++) {
            instr[i].classList.remove('fadein')
            instr[i].classList.add('fadeoutfast') 
            }

            // Thought Circle Moves Upward
            circle1.y -= circle1.velocity.y

            // Thought Circle Decrease  
            circle1.radius -= 0.8

            // Consciousness Circle Increase
            circle2.radius += 1.2       
    } 

    // If the Thought Circle is pushed out of the window
    if (circle1.y + circle1.radius <= 0) {

            // Reset Thought Circle Radius
            circle1.radius = 0;

            
                if (circle2.radius > 40) {
                    circle2.radius -= 0.4
                }   

            // Sub Text Fade In
            for (let i = 0; i < instr.length; i++) {
            instr[i].classList.remove('fadeoutfast')
            instr[i].classList.add('fadein')
            }

            // Update Sub Text
            instr[0].innerHTML = "Click for the next thought"
            instr[1].innerHTML = ""

            // Sub Text Div Border Show
            stextOne.id = 'stextanim'

            // Show Learn Button
            learnbtn.id = 'btnshow'
            
            // Mouse Enter Sub Text Div
            subtextdiv.addEventListener('mouseover',() => {
                subtextdiv.style.cursor = 'pointer';
            })

            // Listen for User Click Action
            subtextdiv.addEventListener('touchstart', () => {

                // Materialize Thought
                init()  
                circle1.radius = 25
                stextOne.id = 'stextone'

                // Sub text Fade Out
                for (let i = 0; i < instr.length; i++) {
                instr[i].classList.remove('fadein')
                instr[i].classList.add('fadeoutfast')  
                }
            })


            // Listen for User Click Action
           subtextdiv.addEventListener('click', () => {

                // Materialize Thought
                init()  
                circle1.radius = 25
                stextOne.id = 'stextone'

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
}, 27000);


// Start Instruction Sub Text

// Fade Out Sub Text
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein')
    instr[i].classList.add('fadeoutslow') 
    }
 }, 9000);

// Fade In
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
    instr[0].innerHTML = ''
    instr[1].innerHTML = 'Ask yourself...'
}, 13000);

// Fade Out
setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein') 
    instr[i].classList.add('fadeoutslow')
    }
    //instr.id = 'fadeoutslow' 
 }, 15000);

 // Fade In
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
     //instr.id = 'fadein' 
     instr[0].innerHTML = ''
     instr[1].innerHTML = '"What is my next thought?"'
 }, 17000);
 
 // Fade Out
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadein') 
    instr[i].classList.add('fadeoutslow')
    }
    //instr.id = 'fadeoutslow' 
 }, 20500);
 
 // Fade In
 setTimeout(() => {
    for (let i = 0; i < instr.length; i++) {
    instr[i].classList.remove('fadeoutslow')
    instr[i].classList.add('fadein') 
    }
     //instr.id = 'fadein' 
     instr[0].innerHTML = ''
     instr[1].innerHTML = 'Picture it.'
 }, 23000); 

 


