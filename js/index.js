
// // @param {string[]} arr - List of operations
// // @return {number} - Sum of scores after performing all operations


// var calPoints = function(arr) {
//   var result = null;
//   let firstLetter = "";
//   tempArr = [];

//   for(i=0; i<arr.length;i++) {

//     for(j=0; j<arr.length;j++) {
//       firstLetter += arr[j][i];
//     }
//     tempArr.push(firstLetter);
//     firstLetter=''

//   }

//   const obj1 = {},
//         obj2 = {};

//   for (const i of arr) {
//     obj1[i] = obj1[i];
//   }
//   for (const i of tempArr) {
//     obj2[i] = obj2[i];
//   }

//   for (const key in obj1) {
//     if(!(key in obj2)) return false;
//   }

//   return true;
// };

// // i  0 - j 0
// // i  1 area 
// var arr = ['abcd','bnrt','crmy','dtye'];

// //          b       a     l      l
// //         a        r     e      a
// //         l        e     a      d
// //         l        a     d      y

// console.log(calPoints(arr));




const navBtn = document.querySelector('.navbar__brand--burger');
const navMenu = document.querySelector('.navbar__menu');

navBtn.addEventListener('click', function (e) {
  navBtn.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
  console.log(this);
})
// navBtn.addEventListener('click', (e) => {
//   console.log(this);
// })

