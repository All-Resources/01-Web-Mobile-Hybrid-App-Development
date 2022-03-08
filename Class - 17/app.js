// function timer(){
//     console.log("running..")
// }
// setInterval(timer, 1000)

// let count = 0;
// let interval;
// function timer() {
//   count++;
//   document.write(count + "<br>");
// }
// interval = setInterval(timer, 1000);
// setTimeout(function () {
//   clearInterval(interval);
// }, 5000);

// function timeOut(){
//     console.log("running")
// }
// setTimeout(timeOut, 3000)




let min = 0;
let sec = 0;
let msec = 0;

let minHeading = document.getElementById('min');
let secHeading = document.getElementById('sec');
let msecHeading = document.getElementById('msec');
let interval;

        function timer(){
        msec++
        msecHeading.innerHTML=msec;
}
        setInterval(timer, 100)
