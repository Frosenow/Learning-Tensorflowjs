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
    background(0)
    stroke(255)
    strokeWeight(10)

    // Maping values of pixels to draw it in scale 
    for(let i = 0; i < x_cords.length; i++){
        let px = map(x_cords[i], 0, 1, 0, width)
        let py = map(y_cords[i], 0, 1, height, 0)
        point(px, py)
    }

    // Clear all unused tensors
    tf.tidy(() => {
        // No trainable list provided so it optimise all trainable variable (a and b)
        // Optimizing loss function to get as small error as possible 
        if(x_cords.length > 0){
            y_tensor = tf.tensor1d(y_cords);
            const lossValue = optimizer.minimize(() => loss(predict(x_cords), y_tensor))
            console.log(lossValue)
        }
    });
    
    // Get y values of x's in: (0, y) and (1, y)
    const lineX = [0, 1]
    
    // Clear all unused tensors
    const ys = tf.tidy(() => predict(lineX))

    // Remaping x cordinates to draw linear function 
    let x1 = map(lineX[0], 0, 1, 0, width)
    let x2 = map(lineX[1], 0, 1, 0, width)

    // Getting scalar values back, because they are tensors
    lineY = ys.dataSync()

    // Clean unused tensor 
    ys.dispose()

    // Remaping y cordinates to draw linear function 
    let y1 = map(lineY[0], 0, 1, height, 0)
    let y2 = map(lineY[1], 0, 1, height, 0)
    
    // Drawing linear function
    strokeWeight(2)
    line(x1, y1, x2, y2)

    console.log(tf.memory().numTensors)
}