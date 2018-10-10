// tools to use and logic. Function accepts two parameters(number in line, and name).
//should return welcome message with name and number.
//
function takeANumber(line,name){
     line.push(name);
  
return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }
  
  
  let final = []
  
  for(let i=0; i < line.length ; i++) {
    // number. person's name
    // number is always 1 greater than index
    
    final.push(`${i + 1}. ${line[i]}`)
  }
  
 return `The line is currently: ${final.join(", ")}`;
}


console.log(currentLine(["Josh", "Daniel"]))
console.log(currentLine(["Albert", "Louana", "Rachel", "Thomas"]))
console.log(currentLine(["eclaire", "wadddums", "montgomery"]))