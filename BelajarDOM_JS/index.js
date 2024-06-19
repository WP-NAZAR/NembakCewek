// let jumlahKlik = 0;

// function ubahWarna() {
//     let container = document.getElementById("container");
//     jumlahKlik++;

//     if (jumlahKlik == 1) {
//         container.style.backgroundColor = "gray";
//     } else if (jumlahKlik == 2) {
//         container.style.backgroundColor = "black";
//     } else {
//         container.style.backgroundColor = "pink";
//         jumlahKlik = 0; // Reset jumlah klik setelah siklus selesai
//     }
// }

// let jumlahKlikBtnText = 0;
// function ubahText(){
//     let text = document.getElementById("text");
//     jumlahKlikBtnText++;

//     if(jumlahKlikBtnText == 1){
//         text.innerText = "Ini Adalah Text Ke Dua";
//     }
//     else if(jumlahKlikBtnText == 2){
//         text.innerText = "Ini Adalah Text Ke Tiga";
//     }
//     else{
//         text.innerText = "Ini Adalah Text Awal";
//         jumlahKlikBtnText = 0;
//     }
// }

// function tambahItem(){
//     let daftar = document.getElementById("daftar");
//     let tambahItem = document.createElement("li");
//     tambahItem.textContent = "Item 3";
//     daftar.appendChild(tambahItem);
// }


// let jumlahKlikGambar = 0;
// function ubahGambar(){
//     let img = document.getElementById("img");

//     jumlahKlikGambar++;
//     if(jumlahKlikGambar == 1){
//         img.src = "Img/webDesign.png";
//         img.style.width = "400px";
//     }
//     else if(jumlahKlikGambar == 2){
//         img.src = "Img/SoftwareInstalling.png";
//         img.style.width = "400px";
//     }
//     else{
//         img.src = "Img/5C06EAF2-AB28-44C4-8D1E-82FB10B516E4-removebg-preview.png";
//         img.style.width = "400px";
//         jumlahKlikGambar = 0;
//     }
// }

// function input(){
//     let nama = document.getElementById("inputNama").value;
//     let umur = document.getElementById("inputUmur").value;

//     if (nama && umur) {
//         let container = document.getElementById('divInput');
//         container.innerHTML = `<p>Nama: ${nama}</p><p>Umur: ${umur}</p>`;
//     } else {
//         alert("Harap isi nama dan umur.");
//     }
// }

// let jumlahKlik = 0;
// function btnUbah(){
//     let img = document.getElementById("img");
//     jumlahKlik++;

//     if(jumlahKlik == 1){
//         img.src = "Img/SoftwareInstalling.png";
//         img.style.width = "400px";
//     }
//     else if(jumlahKlik == 2){
//         img.src = "Img/WebDevelopment.png";
//         img.style.width = "400px";
//     }
//     else if(jumlahKlik == 3){
//         img.src = "Img/webDesign.png";
//         img.style.width = "400px";
//     }
// }

// let jumlahKlikTeks = 0;
// function btnGombal(){
//     let TeksGombal = document.getElementById("TeksGombal");
//     let containerisi = document.getElementById("containerisi");
//     jumlahKlikTeks++;
//     if(jumlahKlikTeks == 1){
//         let btnKlikTeks = document.getElementById("btnKlikTeks");
//         btnKlikTeks.innerText = "Klik Lagi Dong😂";
//         TeksGombal.style.color = "white";
//         TeksGombal.innerText = "I Love You Sayang❤❤";
//     }
//     else if(jumlahKlikTeks == 2){
//         let btnKlikTeks = document.getElementById("btnKlikTeks");
//         btnKlikTeks.innerText = "Masih Mau Klik Gak Nih😂";
//         TeksGombal.style.color = "white";
//         TeksGombal.innerText = "Ciee Masih Di Klik Dong, Love You Lagi Sayangkuu❤😂";
//     }
//     else if(jumlahKlikTeks == 3){
//         let btnKlikTeks = document.getElementById("btnKlikTeks");
//         btnKlikTeks.innerText = "Masih Mau Klik Gak Nih😂";
//         TeksGombal.style.color = "white";
//         TeksGombal.innerText = "Jadi Pacar Aku Yah🤞❤";
//     }
//     else{
//         let btnKlikTeks = document.getElementById("btnKlikTeks");
//         TeksGombal.style.color = "white";
//         TeksGombal.innerText = "I Love You Sayang❤❤";
//         jumlahKlikTeks = 0;
//     }

    function yes(){
        let textPertanyaan = document.getElementById("textPertanyaan");
        textPertanyaan.innerText = "Jadi Sekarang Kita Pacaran Yah Sayang❤❤";
    }
    function No(){
        let alasan = prompt("Alasan Kamu Apa Nolak Aku ? ");
        let textPertanyaan = document.getElementById("textPertanyaan");
        alasan = textPertanyaan.innerText = "Aku Sedih Tauu😥😥";
    }