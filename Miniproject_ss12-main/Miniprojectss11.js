let students = [
    { id: "SV01", name: "An", age: 18, gpa: 8.2, status: "active" },
    { id: "SV02", name: "Bình", age: 19, gpa: 7.5, status: "inactive" },
    { id: "SV03", name: "Cường", age: 20, gpa: 9.0, status: "active" },
    { id: "SV04", name: "Dũng", age: 18, gpa: 6.8, status: "inactive" },
    { id: "SV05", name: "Hà", age: 21, gpa: 8.7, status: "active" },
    { id: "SV06", name: "Hùng", age: 19, gpa: 7.9, status: "active" },
    { id: "SV07", name: "Khánh", age: 20, gpa: 5.5, status: "inactive" },
    { id: "SV08", name: "Lan", age: 18, gpa: 8.9, status: "active" },
    { id: "SV09", name: "Linh", age: 19, gpa: 7.2, status: "inactive" },
    { id: "SV010", name: "Minh", age: 22, gpa: 9.3, status: "active" },
    { id: "SV011", name: "Nam", age: 20, gpa: 6.9, status: "inactive" },
    { id: "SV012", name: "Ngọc", age: 21, gpa: 8.4, status: "active" },
    { id: "SV013", name: "Phúc", age: 19, gpa: 7.7, status: "active" },
    { id: "SV014", name: "Quân", age: 18, gpa: 5.9, status: "inactive" },
    { id: "SV015", name: "Trang", age: 20, gpa: 8.1, status: "active" },
    { id: "SV016", name: "Tuấn", age: 22, gpa: 6.5, status: "inactive" },
    { id: "SV017", name: "Vy", age: 19, gpa: 9.1, status: "active" },
    { id: "SV018", name: "Yến", age: 21, gpa: 7.0, status: "inactive" },
    { id: "SV019", name: "Đạt", age: 20, gpa: 8.6, status: "active" },
    { id: "SV020", name: "Hoàng", age: 18, gpa: 6.3, status: "inactive" }
];
let choose;
function createstudent(){
    let checkid;
    let newstudentname;
    let newstudentage;
    let newstudentgpa;
    let newstudentid;
    let newstudentstatus;
    do {
    newstudentid = prompt(`Nhập ID của học sinh mới:`).toUpperCase();
    checkid = students.some(value => value.id === newstudentid)
        if(checkid){
            alert(`vui lòng nhập lại,ID ${newstudentid} đã tồn tại`)
        }
    } while (checkid);
    do {
     newstudentname = prompt(`Nhập tên của học sinh mới`).trim();
     if(newstudentname === ""){
        alert(` tên không được để trống!`);
     }
    } while (newstudentname === "");
    do {
    newstudentage = +prompt(` Nhập tuổi của học sinh mới(16 < tuổi < 60):`);
    if(newstudentage < 16 || newstudentage >60){
        alert(` Tuổi không hợp lệ`)
    }
    } while (newstudentage < 16 || newstudentage > 60);
    do {
    newstudentgpa = +prompt(` Nhập điểm GPA của học sinh mới(1-10):`);
    if(newstudentgpa < 1 || newstudentgpa >10){
        alert(`Điểm gpa không hợp lệ`)
    }
    } while (newstudentgpa < 1 || newstudentgpa >10);
    do {
    newstudentstatus = prompt(` Nhập trạng thái của học sinh mới(active/inactive):`).toLowerCase();
        if(newstudentstatus !== "active" && newstudentstatus !== "inactive"){
            alert(` Trạng thái không hợp lệ`)
        }
    } while (newstudentstatus !== "active" && newstudentstatus !== "inactive");
    let newstudent = {
        id:newstudentid,
        name: newstudentname,
        age: newstudentage,
        gpa:newstudentgpa,
        status:newstudentstatus,
    }
    let CreateAt = new Date();
    students.push(newstudent);
    alert(`Đã thêm học sinh ${newstudentname} với id ${newstudentid} vào danh sách`)
}
function updatestudent(){
    let findId = prompt(` Nhập Id học sinh bạn muốn tìm:`).toUpperCase();
    let found = students.find(value => value.id === findId);
    if(found){
        let newname = prompt(` nhập tên mới của học sinh (tên cũ:${found.name})`);
        if(newname && newname !== ""){
            found.name = newname
        }
        let newage = +prompt(` Nhập tuổi mới của học sinh(tuổi cũ:${found.age})`);
        if(newage && newage !== ""){
            found.age = newage;
        }
        let newgpa = +prompt(` Nhập điểm GPA mới(điểm GPA cũ ${found.gpa})`)
        if(newgpa && newgpa !== ""){
            found.gpa = newgpa;
        }
        let newstatus = prompt(` Nhập trạng thái mới của học sinh (Trạng thái cũ ${found.status})`);
        if(newstatus && newstatus !== ""){
            found.status = newstatus;
        }
    }else {
        alert(` Không tìm thấy sinh viên`)
        return;
    }
        let UpdateAt = new Date();
    alert(`${found.name}\n${found.age}\n${found.gpa}\n${found.status}\n ${UpdateAt}`)
}
function softdelete(){
     let findId = prompt(` Nhập Id học sinh bạn muốn tìm:`).toUpperCase();
    let found = students.find(value => value.id === findId);
    if(found){
        if(found.status === "inactive"){
            alert(` Học sinh đã bị xóa từ trước`);
            return;
        }
        if(confirm(`Bạn có chắc xóa học sinh này khỏi danh sách không`)){
        let deletestatus = "inactive"
        found.status = deletestatus;
        alert(`Đã xóa học sinh thành công`);
        let DeleteAt = new Date();
    }else{
        alert(` đã hủy xóa học sinh`);
    }
    }else{
        alert(` Không tìm thấy học sinh`);
    }
   
}
function restorestudent(){
     let findId = prompt(` Nhập Id học sinh bạn muốn tìm:`).toUpperCase();
    let found = students.find(value => value.id === findId);
    if(found){
        if(found.status === "inactive" && deleteAt != null){
            let restorestatus = "active";
            found.status = restorestatus;
            deleteAt = null;
            UpdateAt = new Date();
            alert(` Phục hồi sinh viên thành công`)
        }else {
            alert(`Sinh viên này đã phục hồi sẵn`)
        }
    }else{
        alert(` Không tìm thấy sinh viên`);
    }
}
function viewstudent(){
    let findname = prompt(` Nhập tên học sinh muốn tìm:`).toLowerCase();
    let result = [];
    students.forEach((value,index)=>{
        if(value.name.toLowerCase().includes(findname)){
        result.push(`id:${value.id}-${value}-tuổi:${value.age}-gpa:${value.gpa}-status:${value.status}`)
        }
    });
    console.log(`${result.length > 0 ? result.join(""):"Không tìm thấy"}`);
    let findstatus = prompt(` Tìm kiếm theo trạng thái (active/inactive)`).toLowerCase();
    let found = students.filter(value => value.status === findstatus )
    if (found.length > 0){
        found.forEach((value,index)=>{
            console.log(` ID:${value.id}| NAME: ${value.name}| AGE: ${value.age}| GPA:${value.gpa} | STATUS: ${value.status}`);
        });
    }else {
        alert(` Trạng thái không hợp lệ`)
    }
    let sortgpa = prompt(` Nhập thứ tự sắp xếp (asc: tăng dần/ desc: giảm dần)(nếu để rỗng sẽ mặc định là asc):`);
    if(sortgpa === "asc" || sortgpa === ""){
        students.sort((a,b)=> a.gpa - b.gpa);
    }
    if(sortgpa === "desc"){
        students.sort((a,b)=>b.gpa-a.gpa)
    }
}
function analytics(){
    console.log(`Tổng số học sinh ${students.length}`);
    
}
do {
    choose = +prompt(`  
     ==== STUDENT MANAGER ADVANCED ====
    1.Create Student
    2.Update Student
    3.Soft Delete Student
    4.Restore Student
    5.View Students
    6.Analytics Dashboard
    0.Exit
`)
        switch (choose) {
            case 1:
                createstudent();
                break;
            case 2:
                updatestudent();
                break;
            case 3:
                softdelete();
                break;
            case 4:
                restorestudent();
                break;
            case 5:
                viewstudent();
                break;
            case 6:
                analytics();
                break;
            default:
                break;
        }
} while (choose != 0);