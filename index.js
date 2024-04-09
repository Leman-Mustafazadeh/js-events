const companyName = document.querySelector(".company-name");
const contactName = document.querySelector(".contact-name");
const contactTitle = document.querySelector(".contact-title");
const companyId = document.querySelector(".company-id");
const span = document.querySelectorAll(".span");
const button = document.querySelector(".form-button");
const fullName = document.querySelectorAll(".fullName");
const form = document.querySelector(".head");
const tbody = document.querySelector("#tbody");
const sortByNameSelect =document.querySelector("#sort-by-name")
class fullitemName {
    isCompleted;
    static id = 1;
  constructor(companyName, contactName, contactTitle) {
    this.id = fullitemName.id++;
    this.companyName = companyName;
    this.isCompleted = false;
    this.contactName = contactName;
    this.contactTitle = contactTitle;
  }
}
let todos = []
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("salam");
//   if (
//     companyId.value == "" ||
//     companyName.value == "" ||
//     contactName.value == "" ||
//     contactTitle.value == ""
//   ) {
//   } else {
//     tbody.innerHTML += `
//         <tr class="allDel">
//         <td>${companyId.value}</td>
//         <td>${companyName.value}</td>
//         <td>${contactName.value}</td>
//         <td>${contactTitle.value}</td>
       
//        <td> <button class="del">Delete</button>
//        <button>Update</button></td>
//     </tr>
//     `;
//   }
//   const del = document.querySelectorAll(".del");
//   del.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       btn.closest(".allDel").remove();
//     });
//   });
// });

form.addEventListener("submit",function(e){
    e.preventDefault();
// const check =  checkValudation(e.target.value)
addTodo(companyName, contactName, contactTitle)
})
sortByNameSelect.addEventListener('change',function(){
    sortByName(this.value);
  })
function checkValudation(value) {
    if(value.trim().length===0){
       return window.alert("wornd")
    }
    return true;
}
function addTodo(companyName, contactName, contactTitle) {
    if(!checkValudation(companyName.value)){
        // span.classList.replace( "d-none","d-block");
return;
}
    if(!checkValudation(contactName.value)){
        // span.classList.replace( "d-none","d-block");
return;
}
    if(!checkValudation(contactTitle.value)){
        span.classList.replace( "d-none","d-block");
return;}
    const newCompany = new fullitemName(companyName.value, contactName.value, contactTitle.value)
    todos.push(newCompany)
    resetForm() 
    renderName(todos)
    // deleteBtn()
}

function resetForm() {
    companyName.value=""
    contactName.value=""
    contactTitle.value=""
}

function renderName(arr) {
    console.log(arr);
    tbody.innerHTML=""
    arr.forEach(item => {
        tbody.innerHTML += `
        <tr class="allDel">
        <td>${item.id}</td>
        <td>${item.companyName}</td>
        <td>${item.contactName}</td>
        <td>${item.contactTitle}</td>
       <td> <button data-id="${item.id}" class="del">Delete</button>
       <button>Update</button></td>
    </tr>
    `;
    });

    const deleteBtns = document.querySelectorAll(".del")
    deleteBtns.forEach(delbtn => {
        delbtn.addEventListener("click",()=>{
            const id = delbtn.getAttribute("data-id")
            deleteBtn(id)
        })
    });
}

function deleteBtn(id) {
    const idx = todos.findIndex((x) => x.id == id);
    todos.splice(idx, 1);
    renderName(todos);
}

function sortByName(value){
    if(value == "a-z"){
        let temp = [...todos]
        temp = temp.sort((x,y)=>x.companyName.localeCompare(y.companyName))
        renderName(temp) 
    }else if(value == "z-a"){
        let temp = [...todos];
        temp = temp.sort((x,y)=>y.companyName.localeCompare(x.companyName))
        renderName(temp) 
    }
}