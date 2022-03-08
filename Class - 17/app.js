// function timer(){
//     console.log("running..")
// }
// setInterval(timer, 1000)


let count =0;
let interval;
function timer(){
    count++
    document.write(count + "<br>")
} 
 interval= setInterval(timer, 1000)
 setTimeout(function(){
  clearInterval(interval)
 },5000) 

// function timeOut(){
//     console.log("running")
// }
// setTimeout(timeOut, 3000)