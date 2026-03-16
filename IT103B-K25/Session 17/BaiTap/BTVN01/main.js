const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];
let listItem = document.querySelector(".toDoList");
localStorage.setItem("toDoList", JSON.stringify(todos));

let renderAllTask = () => {
  let line = "";
  JSON.parse(localStorage.getItem("toDoList")).forEach((c) => {
    line += `
             <div class="contener">
                <div class="badage">
                    <img src="./rauMa.jpg" alt="">
                    <h3>${c.task}</h3>
                </div>
                
                <span>${c.done ? "Đã làm" : "Chưa làm"}</span>
            </div>
        `;
  });
  listItem.innerHTML = line;
};
renderAllTask();
