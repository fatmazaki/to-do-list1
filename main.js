let inputbox = document.getElementById("input");
let list = document.getElementById("list-container");
let add = document.getElementById("add")

let todoarray = []
 
function addtodoitem(){
    const inputbox =document.getElementById("input")
    todoarray.push(inputbox.value)
    inputbox.value="";
    displaylist()
}

function displaylist(){
    document.getElementById("list-container").innerHTML=""
    todoarray.forEach((item,index)=>{
        const list = document.getElementById("list-container")
        const todoitem = document.createElement("li")
        todoitem.innerHTML = item;
        list.appendChild(todoitem)
    })

}

