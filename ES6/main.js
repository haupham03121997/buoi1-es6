// 1. Khai báo biến
// Thay vả bằng let , cơnst

// var cho phép khai báo lại 1 biến đã khai báo

var a = 1;

function fn() {
  console.log(a);
}

var a = "Hello";
fn();

// let , const không cho phép khai báo lại 1 biến đã khai báo
// let cho phép gán lai giá trị mới
// const không cho gán lại giá trị

let b = 1;
b = "Cybersoft";
console.log(b);

const URL_CONFIG = "https://login.cybersoft.edu.vn";

//  Cơ chế Hoisting

console.log(c); // undefined
var c = 10;
console.log(c); // 10

// console.log(d); // error
let d = 20; // 20

// Scope - Tầm vực hoạt động của biến
// Global : các biến toàn cục được khai báo ở ngoài cùng ở file
// Function(var): các biến được khai báo ở trong hàm
// Block (let ,const): các biến được khai báo bên trong {}: if() , for()

function demoScope() {
  let msg = "Hello";
  let times = 4;
  if (times > 3) {
    let msg = "Hello Cybersoft!!!";
  }
  console.log(msg);
}

demoScope();

/**--------------------------------- 2. Arrow function-----------------------------------*/

// function declaration
// - Hỗ trợ cơ chế hoisting
// - Có con trỏ this
// => Dùng cho hầu hết mọi trường hợp: khai báo các function toàn cục và các phương thức của object
function fn1() {}
// let student = {
//   sayHi: function () {
//     console.log(this);
//   },
// };
// student.sayHi();

// function arrow
// - Cú pháp ngắn gọn
// - Không có con trỏ this mà sẽ dùng cho trỏ this của thèn cha bao bọc nó
// => Sử dụng để khai báo callback
// a(()=>{})
let ages = [12, 23, 45, 23];
// let findAgeBigger = ages.find(function (item) {
//   if (item > 20) {
//     return true;
//   }
//   return false;
// });
let findAgeBigger = ages.find(item => item > 20);
console.log("findAgeBigger", findAgeBigger);
const fn2 = () => {};
window.fullName = "12312";
const student = {
  fullName: "Alice",
  className: "Bootcamp",
  sayHi: function () {
    let _this = this;
    setTimeout(function () {
      console.log(this.fullName, _this.className);
    }, 2000);
  },
};

student.sayHi();

// function expression
const fn3 = function () {};

/**-----------------------------------------For với var , let , const------------------------ */
let buttons = document.querySelectorAll("button");

for (let index = 0; index < buttons.length; index++) {
  buttons[index].onclick = function () {
    alert("Button thứ " + index);
  };
}

/**------------------------------------------Thực hành--------------------------------------- */
/**
 * Cho 1 array màu sắc: colors = ["red" , "green" , "yellow" , "blue"  , "grey"]
 * Dùng vòng lặp để render ra button có cùng màu sắc tương ứng
 * Click vào button thì đổi màu sắc div#home với màu tương ứng
 */

let colors = ["red", "green", "yellow", "blue", "grey"];
const renderColor = () => {
  for (let index = 0; index < colors.length; index++) {
    let color = colors[index];
    let btn = document.createElement("button");
    btn.innerHTML = color;
    btn.className = "btn text-light text-capitalize me-3";
    btn.style.backgroundColor = color;
    btn.onclick = function () {
      document.getElementById("home").style.color = color;
    };
    document.getElementById("colors").appendChild(btn);
  }
};

renderColor();
