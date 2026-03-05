let pokemonList = [
    { id: 1, name: "Pikachu", type: "Electric", level: 100, hp: 45 },
    { id: 2, name: "Charmander", type: "Fire", level: 46, hp: 24 },
    { id: 3, name: "Rat", type: "Normal", level: 82, hp: 100 },
    { id: 4, name: "Pigeon", type: "Psychic", level: 1, hp: 86 },
];

let choose;

do {
    choose = +prompt(`---Pokemon Team Manager---
1. Create pokemon
2. Add Pokemon
3. Delete Pokemon
4. Show List
5. Update team
6. Find Pokemon
7. Sort by element
8. Calculate Power
9. Sort by level
10. Type Coverage Check
0. Exit`);

    switch (choose) {
        case 0:
            alert(`Kết thúc chương trình`);
        case 1:
            console.log("Danh sách Pokemon ban đầu")
            showList();
            break;
        case 2:
            addPokemon();
            break;
        case 3:
            deletePokemon();
            break;
        case 4:
            showList();
            break;
        case 5:
            updatePokemon();
            break;
        case 6:
            searchPokemon();
            break;
        case 7:
            break;
        case 8:
            calculatePower();
            break;
        case 9:
            sortByLevel();
            break;
        case 10:
            break;
        default:
            alert(`Vui lòng chọn lại lựa chọn (1-9)`);
    }
} while (choose != 0);

function addPokemon() {
    let isAvailable = 1
    let id;
    let name;
    let level;
    let hp;
    do {
        id = +prompt("Nhập ID");
        name = prompt("Nhập tên Pokémon");
        level = +prompt("Nhập cấp độ");
        if (level > 100 && level < 1) {
            alert(`Level phải là từ 1 đến 100`);
        }
        hp = +prompt("Nhập HP");
        type = prompt("Nhập hệ của Pokémon");
    } while (isAvailable = 0);
    let addList = {
        id: id,
        name: name,
        type: type,
        level: level,
        hp: hp
    }
    pokemonList.push(addList);
    alert(`Đã thêm thành công vào đội hình`);
}

function deletePokemon() {
    let nameDelete = prompt("Nhập tên Pokemon cần xóa");
    let index = pokemonList.findIndex(p => p.name === nameDelete);
    if (index !== -1) {
        let ques = window.confirm("Bạn có muốn xóa không ?");
        if (ques) {
            pokemonList.splice(nameDelete, 1);
            alert(`Đã xóa thành công`);
        } else {
            alert(`Đã hủy thao tác xóa`);
        }
    } else {
        alert(`Không tìm thấy Pokemon`)
    }

}


function showList() {
    console.log("---Team List---");
    console.table(pokemonList);
}

function updatePokemon() {
    let nameUpdate = prompt("Nhập tên Pokemon muốn cập nhật");
    let checkUpdate = pokemonList.findIndex(n => n.name == nameUpdate)
    if (checkUpdate !== -1) {
        let newLevel = prompt("Vui lòng nhập cấp độ mới");


        alert(`Đã cập nhật thành công`);
    } else {
        alert(`Pokemon không có trong đội`)
    }
}


function searchPokemon() {
    do {
        choice = +prompt(`Lựa chọn cách sắp xếp
1. Tìm theo tên
2. Tìm theo hệ
0. Thoát`);
        switch (choice) {
            case 0:
                alert(`Thoát chương trình`);
            case 1:
                searchByName();
                break;
            case 2:
                searchByType();
                break;
            default:
                alert(`Vui lòng chọn lại`);
        }
    } while (choice != 0);
}



function searchByName() {
    let searchName = prompt("Nhập tên Pokemon để tìm kiếm");
    let result = pokemonList.findIndex(s => s.name === searchName);
    if (result !== -1) {
        console.log(`Pokemon tìm thấy ${searchName} | Hệ: ${pokemonList[result].type} | Cấp: ${pokemonList[result].level} | HP: ${pokemonList[result].hp}`)
    } else {
        console.log(`Không tìm thấy Pokemon nào tên ${searchName}`)
    }
}

function searchByType() {
    let searchType = prompt("Nhập hệ Pokemon để tìm kiếm");
    let result = pokemonList.findIndex(s => s.type === searchType);
    if (result !== -1) {
        console.log(`Pokemon tìm thấy ${searchType} | Hệ: ${pokemonList[result].type} | Cấp: ${pokemonList[result].level} | HP: ${pokemonList[result].hp}`)
    } else {
        console.log(`Không tìm thấy Pokemon nào tên ${searchType}`)
    }
}



function calculatePower() {
    let totalLevel = Number();
    let totalHp = Number();
    for (let i = 0; i < pokemonList.length; i++) {
        totalLevel += pokemonList[i].level;
        totalHp += pokemonList[i].hp;
    }
    console.log("Tổng level của tất cả Pokemon", totalLevel);
    console.log("Tổng tất cả HP của Pokemon", totalHp);


}


function sortByLevel() {
    do {
        choice = +prompt(`Lựa chọn cách sắp xếp
1. Tăng dần
2. Giảm dần
0. Thoát`);
        switch (choice) {
            case 0:
                alert("Thoát chương trình")
            case 1:
                levelUp();
                break;
            case 2:
                levelDown();
                break;
            default:
                alert(`Vui lòng chọn lại`)
        }
    } while (choice != 0);
}


function levelUp() {
    console.log("Danh sách tăng dần");
    console.log([...pokemonList].sort((a, b) => a.level - b.level));
}

function levelDown() {
    console.log("Danh sách giảm dần");
    console.log([...pokemonList].sort((a, b) => b.level - a.level));
}