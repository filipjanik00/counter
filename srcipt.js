const count = document.querySelector(".count");
const buttons = document.querySelectorAll("button");

let currentValue = 0;

// Event Listener
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const btnId = e.currentTarget.id;
//     if (btnId === "increase-btn") {
//       if (currentValue >= 0) {
//         count.style.color = "green";
//         currentValue++;
//         count.textContent = currentValue;
//       } else {
//         currentValue++;
//         count.textContent = currentValue;
//       }
//     } else if (btnId === "reset-btn") {
//       count.style.color = "black";
//       currentValue = 0;
//       count.textContent = 0;
//     } else if (btnId === "decrease-btn") {
//       if (currentValue <= 0) {
//         count.style.color = "red";
//         currentValue--;
//         count.textContent = currentValue;
//       } else {
//         currentValue--;
//         count.textContent = currentValue;
//       }
//     }
//   });
// });

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease-btn")) {
      currentValue--;
    } else if (styles.contains("increase-btn")) {
      currentValue++;
    } else {
      currentValue = 0;
    }

    if (currentValue > 0) {
      count.style.color = "green";
    }
    if (currentValue < 0) {
      count.style.color = "red";
    }
    if (currentValue === 0) {
      count.style.color = "black";
    }

    count.textContent = currentValue;
  });
});
