let input = document.querySelector("#task");
input.addEventListener("keypress", (e)=>{
 if(e.key==="Enter"){
   addTask();
 }
});
let addbtn = document.querySelector("#Addbtn");
addbtn.addEventListener("click", addTask);


function addTask(){


let task = input.value.toUpperCase();
if(task ==="") return ;

let existingTask = document.querySelectorAll(".todo");
for(let tasks of existingTask){
  if(tasks.textContent.includes(task)) {
    alert("Task already exists");
    return;
  }
}

let taskList = document.querySelector(".taskList");

let contentBox = document.createElement("div");
contentBox.classList.add("todo");
contentBox.textContent = task;

taskList.appendChild(contentBox);
input.value = "";

//delete button
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.classList.add("cross")
//delete
deleteBtn.addEventListener("click",()=>{
  contentBox.remove();
})
contentBox.appendChild(deleteBtn);
};
