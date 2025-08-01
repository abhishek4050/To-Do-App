let addbtn = document.querySelector("#Addbtn");
addbtn.addEventListener("click", addTask);

function addTask(){

 let input = document.querySelector("#task");
let task = input.value.toUpperCase();
if(task ==="") return ;

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
//    let input = document.querySelector("#task")
//   let task = input.value.trim();
//   if(task === "") return;

//   let taskList = document.querySelector(".taskList");

//   let contentBox = document.createElement("div");
//   contentBox.classList.add("todo");

//   let content = document.createElement("span");
//   content.textContent = task;

//   // delete button
//   let crossBtn = document.createElement("button");
//   crossBtn.textContent = "❌"
//   crossBtn.classList.add("cross");
  
//   //remove task
// crossBtn.addEventListener("click", ()=>{
//     contentBox.remove();
// });
// contentBox.appendChild(content);
// contentBox.appendChild(crossBtn);

// taskList.appendChild(contentBox);

// input.value = "";
