// Interactive Linear Regression using Tensorflow.js and p5.js 

// y = ax + b <- Linear function  
let a, b 

let x_cords = []; 
let y_cords = []; 

const learningRate = 0.5; 
const optimizer = tf.train.sgd(learningRate)


function setup(){
    createCanvas(500, 500); 
    // Setting function parameters in random place at first
    // Define slope of y = ax + b
    a = tf.scalar(Math.random()).variable()
    // Define y-intercept of y = ax + b 
    b = tf.scalar(Math.random()).variable()
}

// Predicts y values to measure the mean square error 
function predict(x_cords){
    const x_tensors = tf.tensor1d(x_cords); 
    // y = ax + b 
    const y_cords = x_tensors.mul(a).add(b);
    return y_cords 
}

function loss(pred, labels){
    // Calculating loss function using square mean error 
    return pred.sub(labels).square().mean();
}

// Creating dataset interactively 
function mousePressed(){
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);

    x_cords.push(x); 
    y_cords.push(y)
}

function draw(){
    
    y_tensor = tf.tensor1d(y_cords);
    optimizer.minimize(() => loss(predict(x_cords), y_tensor))

    background(0)
    stroke(255)
    strokeWeight(10)

    for(let i = 0; i < x_cords.length; i++){
        let px = map(x_cords[i], 0, 1, 0, width)
        let py = map(y_cords[i], 0, 1, height, 0)
        point(px, py)
    }
}