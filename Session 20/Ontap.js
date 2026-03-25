let listmusic =  [];
    let edit = -1;

function handleSubmit(){
    let newmusic = document.getElementById("title");
    let newmusicartist = document.getElementById("artist");
    let newmusiclist = {};
    if(edit === -1){
        newmusiclist={
        id : listmusic.length+1,
        song : newmusic.value,
        artist : newmusicartist.value,
    }
        listmusic.push(newmusiclist);
    }else{
        listmusic[edit].song = newmusic.value;
        listmusic[edit].artist = newmusicartist.value;
        edit = -1;
    }
    newmusic.value = "";
    newmusicartist.value = "";
    renderlist();
    localStorage.setItem("musics",JSON.stringify(listmusic));
}
function renderlist(index){
    songTable.innerHTML = listmusic
    .map((value,index)=>{
        return `
                <tr id="list">
                <th>${value.id}</th>
                <th>${value.song}</th>
                <th>${value.artist}</th>
                <th><button onclick="editsong(${index})">Sửa</button> <button onclick="deletesong(${index})">Xóa</button></th>
            </tr>`
    }).join("");
}
function deletesong(index){
    listmusic.forEach((value)=>{
       return listmusic.splice(value,1);
    })
    localStorage.setItem("musics",JSON.stringify(listmusic));
    renderlist();
}
function editsong(index){
    let editmusic = JSON.parse(localStorage.getItem("musics"));
    let editnamesong = document.getElementById("title");
    let editartistsong = document.getElementById("artist");
    editnamesong.focus();
    editartistsong.focus();
    editnamesong.value=editmusic[index].song;
    editartistsong.value=editmusic[index].artist;
    edit = index;
}
function searchSong(){
    let search  = document.getElementById("search").value.toLowerCase();
    let found = listmusic.filter((item)=>{
        return item.song.toLowerCase().includes(search)
    });
    renderlist(found);
}