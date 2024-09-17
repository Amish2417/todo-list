let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");


function addTask(){
  if(inputBox.value === ""){
    alert("You must Write Something!!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    console.log(span);
    li.appendChild(span);
    console.log(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click",(event) => {
  // console.log(event);
  if(event.target.tagName === "LI"){
    // console.log("list clicked");
    event.target.classList.toggle("checked");
    saveData();
  }else if(event.target.tagName == "SPAN"){
    // console.log("span clicked")
    event.target.parentElement.remove();
    saveData();
  }
})

function saveData(){
  localStorage.setItem("data",(listContainer.innerHTML));

}
function showTask(){
let taskLists = localStorage.getItem("data");
// console.log(taskLists);
listContainer.innerHTML = taskLists;
}
showTask();