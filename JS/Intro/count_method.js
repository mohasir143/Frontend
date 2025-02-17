// js async - settimeout

// sync
// console.log("step1");
// console.log("step2");
// console.log("step3");

// async

// console.log("hello1");
// let timeout = setTimeout(() => console.log("welcome to ocean"), 1000);
// console.log("step1");
// console.log("step2");
// console.log("step3");
// console.log("step1");
// console.log("step2");
// console.log("step3");
// console.log("step1");
// console.log("step2");
// console.log("step3");

// function time() {
//     console.log("welcome ");
//     // }

//     console.log("hello1");
//     let timeout = setTimeout(time, 1000);
//     console.log("step1");
//     console.log("step2");
//     console.log("step3");
//     console.log("step1");
// console.log("step2");
//     console.log("step3");
//     console.log("step1");
//     console.log("step2");
//     console.log("step3");
// }

// let count = 0;
// function time() {
//   console.log("welcome ");
//   count++;
//   if (count > 5) {
//     clearInterval(timeinterval);
//     console.log("time interval cleared");
//   }
// }

// let timeinterval = setInterval(time, 1000);
const time = setInterval(() => {
  console.log("Runs every 3 seconds");
}, 3000);
