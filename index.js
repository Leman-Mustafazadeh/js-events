const companyName = document.querySelector(".company-name")
const contactName = document.querySelector(".contact-name")
const contactTitle = document.querySelector(".contact-title")
const companyId = document.querySelector(".company-id")
const span = document.querySelectorAll(".span")
const button = document.querySelector(".form-button")
const fullName = document.querySelectorAll(".fullName")
const form = document.querySelector(".head")
const tbody = document.querySelector("#tbody")

// class fullName{
//     constructor(id,companyName,contactName,contactTitle){
//         this.id = id
//         this.companyName = companyName
//         this.contactName = contactName
//         this.contactTitle = contactTitle
//     }
// }

button.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("salam");
  
      
   
    if (companyId.value == "" || companyName.value == "" || contactName.value=="" || contactTitle.value == '') {
        
    }
    else{
        

        tbody.innerHTML += `
        <tr class="allDel">
        <td>${companyId.value}</td>
        <td>${companyName.value}</td>
        <td>${contactName.value}</td>
        <td>${contactTitle.value}</td>
       
       <td> <button class="del">Delete</button>
       <button>Update</button></td>
    </tr>
    `

    }
    const del = document.querySelectorAll(".del")
    del.forEach(btn => {
        btn.addEventListener("click",()=>{
            btn.closest(".allDel").remove()
        })
    });

})
