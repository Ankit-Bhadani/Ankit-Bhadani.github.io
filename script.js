const btn = document.getElementById("changeColor");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f7fa"; // light cyan
});
let userName = "Ankit";
let age = 20;
let isStudent = true;
let hobbies = ["Reading", "Coding", "Sports"];
let person = { name: "Ankit", age: 20, city: "Delhi" };

console.log(userName);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(person);

const addbtn = document.getElementById("addtodo")
const addinput = document.getElementById("todoinput")
const todolist = document.getElementById("todoList")

let todos = JSON.parse(localStorage.getItem("todos"))||[];

function renderTodo(){
      todolist.innerHTML="";
    todos.forEach((t,index) =>{
      const li = document.createElement("li");
      li.textContent = t;
      const delbtn = document.createElement("button");
      delbtn.textContent="❌";
      delbtn.style.marginLeft = "10px";
      delbtn.addEventListener("click",() => {
        todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todos));
        renderTodo();
      });
      li.appendChild(delbtn);
      todolist.appendChild(li);
    });
}
renderTodo();
addbtn.addEventListener("click",() => {
  const task = addinput.value;
  if(task!==""){
    todos.push(task);
    localStorage.setItem("todos",JSON.stringify(todos));
    renderTodo();
    addinput.value="";
  } else {
    alert("Please enter a task!");
  }
});

const toggle = document.getElementById("toggle")
const selection = document.getElementById("hobbies")

toggle.addEventListener("click",()=>{
  if(selection.style.display==="none"){
    selection.style.display="block";
  }
  else{
    selection.style.display="none";
  }
})