var ticketnumber = 0


function takeANumber (currentLine) {
  ticketnumber += 1;
  
  currentLine.push(ticketnumber);
  return `Welcome, your ticket number is ${ticketnumber}`

  }

function nowServing (KatzDeliLine) {
  if (KatzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${KatzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length === 0 ) {
    return "The line is currently empty."
  } else {
   
    const nameAndNumber = [];
    
    for (var i=0; i<line.length; i++) {
      nameAndNumber.push(`${i+1}. ${line[i]}`)
    }
    
    return `The line is currently: ${nameAndNumber.join(`, `)}`

  }
}