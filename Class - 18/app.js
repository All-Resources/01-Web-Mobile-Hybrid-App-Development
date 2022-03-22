// function disablebtn(){

//     let btn =document.getElementById("disable");

//     btn.disabled = true ;
// }


// function getElements(){
//     // var p = document.getElementsByTagName('p');
//     // console.log(p);
//     console.log(document.childNodes[0])

// }



function addmessage(){
    var val =document.getElementById("val");
    var p =document.createElement("p")
    var text = document.createTextNode(val.value)
    p.appendChild(text)
    var messages =document.getElementById("messages") 
    messages.appendChild(p)

}