#  Interactive Linear Regression using Tensorflow.js
This project demonstrates interactive linear regression using TensorFlow.js and p5.js. The project creates a canvas and allows the user to add data points interactively. The program then uses these data points to train a linear regression model that predicts the output variable (y) from the input variable (x). The program also visualizes the loss function in real-time using a line chart.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![Mockup of the site](./images/mockup.jpg)

# Getting Started 
To run this project, you can either clone the repository or download the files as a ZIP archive.

## Prerequisites
You need a web browser with JavaScript support to run this project.

## Installing
No installation is required. Simply open the index.html file in a web browser to run the project.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Tensorflow.js, p5.js, Chart.js

The program uses TensorFlow.js to train a linear regression model that predicts the output variable (y) from the input variable (x). The model is trained using stochastic gradient descent (SGD) optimization to minimize the mean squared error loss function. The program also uses p5.js to create a canvas and to visualize the data points and the linear regression model.

The program initializes the model by setting the slope and y-intercept of the linear function randomly. As the user adds more data points, the program trains the model to improve its predictions. Chart.js is used to create a line chart that displays the loss function values during the interactive linear regression. The loss function measures how well the predicted values of the model match the actual values in the dataset, thanks to that, the program visualizes the loss function (how the loss function changes as the model trains) in real-time. 

## Lessons Learned:

Visualization is a powerful tool for understanding data and models. In this project, visualization was used to display the accuracy and loss values of the model during training, as well as the predictions of the model on test images.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Locatobia - Guide for busy turists:** https://github.com/Frosenow/Locatobia

**Image Processing in Python using CUDA with Numba:** https://github.com/Frosenow/Numba-GPU-Image-Processing

**Red Planet Scout - Images from Mars:** https://github.com/Frosenow/RedPlanetScout---Mars-Photos-Gallery
