users = JSON.parse(localStorage.getItem("users"))
function renderlist(index){
    contacttbody.innerHTML = users
    .map((value)=>{
        return `<tr>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.phone}</td>
                <td>${value.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" id = "btn-edit" onclick="editlist(${index})">Sửa</button>
                    <button class="btn-delete" id = "btn-delete" onclick = "deletelist(${index})">Xóa</button>
                  </div>
                </td>
              </tr>`
    })
}
renderlist();
function editlist(index){
  JSON.parse(localStorage.getItem("users"))
  // changebutton();
    let btnedit = document.getElementById("btn-add")
    btnedit.innerText = ` Sửa`
    let editname = document.getElementById("contact-name")
    let editphone = document.getElementById("contact-phone")
    let editemail = document.getElementById("contact-email")
    let result = {
      id : users.id,
      name : editname.value,
      phone : editphone.value,
      email : editemail.value,
    }
    users[index].name = result[index].name;
    users[index].phone = result[index].phone;
    users[index].email = result[index].email;
    editname.value = "";
    editphone.value = "";
    editemail.value = "";
    localStorage.setItem("users",JSON.stringify(users))
    renderlist();
}
function deletelist(index){
    users.splice(index,1);
    renderlist();
    localStorage.setItem("users",JSON.stringify(users))
}