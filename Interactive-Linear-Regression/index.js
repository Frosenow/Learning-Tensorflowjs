// y = ax + b <- Linear function  
let a, b 

let x_cords = []; 
let y_cords = []; 

const learningRate = 0.5; 
const optimizer = tf.train.sgd(learningRate)

function setup(){
    createCanvas(500, 500); 
    background(0)
    // Setting function in random place at first
    a = tf.scalar(random(1)).variable()
    b = tf.scalar(random(1)).variable()
}

function mousePressed(){
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);

    x_cords.push(x); 
    y_cords.push(y)
    console.log(x_cords, y_cords)
}

function draw(){
    stroke(255)
    strokeWeight(8)

    for(let i = 0; i < x_cords.length; i++){
        let px = map(x_cords[i], 0, 1, 0, width)
        let py = map(y_cords[i], 0, 1, height, 0)
        point(px, py)
    }
}