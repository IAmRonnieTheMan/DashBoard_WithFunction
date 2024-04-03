<template>
    <div class="topbar">
                <div class="toggle">
                    <ion-icon name="grid-outline"></ion-icon>
                </div>
    
                <div class="search">
                    <label>
                        <input type="text" placeholder="Search Here">
                        <ion-icon name="search-circle-outline"></ion-icon>
                    </label>
                </div>
    
                <div class="user">
                    <img src="@/assets/imgs/customer01.jpeg" alt="">
                </div>
    </div>
    </template>
    
    <script>
    // 選取所有的導航列表項目
let list = document.querySelectorAll(".navigation li");
let login = document.querySelectorAll(".loginmenu li");
// 函式用於當鼠標懸停在列表項目時設置活動狀態
function activeLink() {
    list.forEach(item => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");

    login.forEach(item => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}


// 監聽鼠標懸停事件，當懸停在列表項目時調用 activeLink 函式
list.forEach(item => item.addEventListener("mouseover", activeLink));
login.forEach(item => item.addEventListener("mouseover", activeLink));
// =======================Menu Toggle======================
document.addEventListener("DOMContentLoaded", function() {
    // 等待文檔解析完成後執行 JavaScript 內容
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    toggle.onclick = function() {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    }

    let user = document.querySelector(".user");
    let loginmenu = document.querySelector(".loginmenu");

    user.onclick = function() {
        loginmenu.classList.toggle("active");
    }
});

    


















    // 函式用於當鼠標懸停在列表項目時設置活動狀態
    // function activeLink() {
    //     list.forEach(item => {
    //         item.classList.remove("hovered");
    //     })
    //     this.classList.add("hovered");
    // }
    
    // // 監聽鼠標懸停事件，當懸停在列表項目時調用 activeLink 函式
    // list.forEach(item => item.addEventListener("mouseover", activeLink));
    </script>
    