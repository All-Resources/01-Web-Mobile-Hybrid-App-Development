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




var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var interval;

        function timer(){
        msec++
        msecHeading.innerHTML = msec;
        if(msec >= 100){
            sec++
            secHeading.innerHTML = sec
            msec = 0;
        }else if(sec>=60){
            min++
            sec=0
            minHeading.innerHTML=min
        }
    }

        interval = setInterval(timer , 10)