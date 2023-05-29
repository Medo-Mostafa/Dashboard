// ------------------------------------ Global Animate Content Function ------------------------------------
let cssStyle = `
transition: 1.5s ease-in-out;
-webkit-transition: 1.5s ease-in-out;
-moz-transition: 1.5s ease-in-out;
opacity:1;  transform:translate(0,0) scale(1);
-webkit-transform:translate(0,0) scale(1);
-moz-transform:translate(0,0) scale(1);`;
function animateContent(parent, ...children) {
  window.addEventListener("scroll", function () {
    // Check If Scroll Value Is More Than Element Start Or Not
    if (window.scrollY >= parent.offsetTop - 400) {
      children.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = cssStyle;
        } else {
          arr.forEach((element) => {
            element.style.cssText = cssStyle;
          });
        }
      });
    }
  });

}

// -------------------------------------------- Yearly Targets Widget --------------------------------------------
let yearlyTargetsWidget = document.querySelector(".targets");
let progressesSpans = document.querySelectorAll(".prog span");

if (window.innerWidth >= 1400) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      progressesSpans.forEach((span) => {
        span.style.width = `${span.dataset.width}`;
      });
    }, 500);
  });
} else {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= yearlyTargetsWidget.offsetTop - 200) {
      progressesSpans.forEach((span) => {
        span.style.width = `${span.dataset.width}`;
      });
    }
  });
}

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= skillsSection.offsetTop - 400) {
//     skillsProgressSpan.forEach((span) => {
//       let goal = span.dataset.width;
//       span.style.cssText = `width:${goal};`;
//     });
//   }
// // });

// let countDown = setInterval(() => {
//   let date = new Date(`2022-12-31T11:59:59Z`);

//   let nowDate = new Date().getTime();

//   let difference = date - nowDate;
//   // -------------------- Days --------------------
//   let remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
//   // -------------------- Hours --------------------
//   let remainingHours = Math.floor(
//     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   // -------------------- Minutes --------------------
//   let remainingMinutes = Math.floor(
//     (difference % (1000 * 60 * 60)) / (1000 * 60)
//   );
//   // -------------------- Minutes --------------------
//   let remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

//   days.textContent = remainingDays;
//   hours.textContent = remainingHours;
//   minutes.textContent = remainingMinutes;
//   seconds.textContent = remainingSeconds;
// }, 1000);

// let interval = 50;
// let counter;
// window.addEventListener("scroll", () => {
//   if (window.scrollY > statsSection.offsetTop - 300) {
//     statsSpans.forEach((ele) => {
//       const updateCount = () => {
//         let goal = +ele.dataset.goal;
//         let currentNum = parseInt(ele.innerText);
//         let inc = goal / interval;
//         if (currentNum < goal) {
//           ele.innerText = Math.floor(currentNum + inc);
//           counter = setTimeout(updateCount, 1);
//         } else {
//           ele.innerText = goal.toLocaleString();
//           clearInterval(counter);
//         }
//       };
//       updateCount();
//     });
//   }
// });
