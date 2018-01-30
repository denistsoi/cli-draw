#!/usr/bin/env node

/**
 * Drawing Program
 */

const inquirer = require('inquirer');

const commands = require('./lib/commands');

const {
  Canvas,
  bucket,
  line, 
  quit,
  rectangle } = commands;

const questions = [
  {
    type: 'input',
    name: 'prompt',
    message: 'enter command:',
  }
]

function ask(canvas) {
  if (!canvas) {
    let canvas;
  }

  inquirer.prompt(questions).then((answers) => {
    let prompt = answers.prompt.split(' ');

    let command = prompt.shift();

    let x1 = parseInt(prompt[0])
    let y1 = parseInt(prompt[1])

    let x2 = typeof parseInt(prompt[2]) == 'number' ? parseInt(prompt[2]) : null;
    let y2 = parseInt(prompt[3])
    
    switch (command) {
      case 'C':
        canvas = new Canvas(x1, y1);
        console.log(canvas.printCanvas())
        break;
      case 'L':
        line(canvas, { x1, y1, x2, y2 });
        console.log(canvas.printCanvas())
        break;
      case 'R':
        rectangle(canvas, { x1, y1, x2, y2 });
        console.log(canvas.printCanvas())
        break;
      case 'B':
        // console.log(x1, y1, prompt[2], prompt)
        bucket(canvas, {x: x1, y: y1}, prompt[2])
        console.log(canvas.printCanvas())
        break;
      case 'Q':
        quit();
        break;
      default: 
        console.log('unknown command');
    }
    ask(canvas)
  })
}

ask()
