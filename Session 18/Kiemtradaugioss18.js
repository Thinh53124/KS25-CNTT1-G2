const students = [];
function addstudent(){
    let newstudentname = document.getElementById("contact-name")
    let newstudentphone = document.getElementById("contact-phone")
    let newstudentemail = document.getElementById("contact-email")
    if(newstudentname.value == ""){
        alert(` Không được để tên trống`);
        return;
    }
    if(newstudentname.value.length < 2){
        alert(` Không được ít hơn 2 ký tự`)
        return;
    }
    // if(newstudentphone.value == 0-9){
    //     alert(` Không được nhập chữ`)
    //     return;
    // }
    if(newstudentphone.value < 10){
        alert(` Số điện thoại phải bằng 10`)
        return;
    }
    if(newstudentemail.value == ""){
        alert(` Không được để rỗng`)
        return;
    }
    students.map((value)=>{
        if(newstudentemail.value == value.email){
            alert(`Email đã tồn tại`)
            return newstudentemail = " Nhập lại email mới(email cũ đã tồn)";
        }
    })
    let newstudents={
        id : students.length + 1,
        name: newstudentname.value,
        phone : newstudentphone.value,
        email:newstudentemail.value,
    }
    students.push(newstudents)
    newstudentname.value = "";
    newstudentemail.value = "";
    newstudentphone.value = "";
    renderstudent();
}
function renderstudent(index){
    contacttbody.innerHTML = students
    .map((value)=>{
        return ` <tr>
                            <td>${value.id}</td>
                            <td>${value.name}</td>
                            <td>${value.phone}</td>
                            <td>${value.email}</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="btn-edit">Sửa</button>
                                    <button class="btn-delete" onclick="deletestudent(${index})">Xóa</button>
                                </div>
                            </td>
                        </tr>`
    })
}
function deletestudent(index){
    students.splice(index,1)
    renderstudent();
}