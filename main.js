let cont = document.querySelector(".cont"),
  boxes = document.querySelectorAll(".cont input:not(.final-result)"),
  flag = 1,
  again = document.getElementById("again"),
  reset = document.getElementById("reset"),
  b1 = document.querySelector(".cont .b1"),
  b2 = document.querySelector(".cont .b2"),
  b3 = document.querySelector(".cont .b3"),
  b4 = document.querySelector(".cont .b4"),
  b5 = document.querySelector(".cont .b5"),
  b6 = document.querySelector(".cont .b6"),
  b7 = document.querySelector(".cont .b7"),
  b8 = document.querySelector(".cont .b8"),
  b9 = document.querySelector(".cont .b9"),
  playerXres = document.getElementById("playerXres"),
  playerOres = document.getElementById("playerOres"),
  playerXstyle = `
  background-color: blue;
  color: white;`,
  playerOstyle = `
  background-color: red;
  color: white;
  `;

boxes.forEach((box) => {
  box.addEventListener("click", function myFunc() {
    if (flag == 1) {
      box.value = "X";
      box.style.color = "blue";
      flag = 0;
    } else if (flag == 0) {
      box.value = "O";
      box.style.color = "red";
      flag = 1;
    }
    box.disabled = true;
    if (/x/gi.test(b1.value) && /x/gi.test(b2.value) && /x/gi.test(b3.value)) {
      b1.style.cssText = playerXstyle;
      b2.style.cssText = playerXstyle;
      b3.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b4.value) &&
      /x/gi.test(b5.value) &&
      /x/gi.test(b6.value)
    ) {
      b4.style.cssText = playerXstyle;
      b5.style.cssText = playerXstyle;
      b6.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b7.value) &&
      /x/gi.test(b8.value) &&
      /x/gi.test(b9.value)
    ) {
      b7.style.cssText = playerXstyle;
      b8.style.cssText = playerXstyle;
      b9.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b1.value) &&
      /x/gi.test(b4.value) &&
      /x/gi.test(b7.value)
    ) {
      b1.style.cssText = playerXstyle;
      b4.style.cssText = playerXstyle;
      b7.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b2.value) &&
      /x/gi.test(b5.value) &&
      /x/gi.test(b8.value)
    ) {
      b2.style.cssText = playerXstyle;
      b5.style.cssText = playerXstyle;
      b8.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b3.value) &&
      /x/gi.test(b6.value) &&
      /x/gi.test(b9.value)
    ) {
      b3.style.cssText = playerXstyle;
      b6.style.cssText = playerXstyle;
      b9.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b1.value) &&
      /x/gi.test(b5.value) &&
      /x/gi.test(b9.value)
    ) {
      b1.style.cssText = playerXstyle;
      b5.style.cssText = playerXstyle;
      b9.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /x/gi.test(b3.value) &&
      /x/gi.test(b5.value) &&
      /x/gi.test(b7.value)
    ) {
      b3.style.cssText = playerXstyle;
      b5.style.cssText = playerXstyle;
      b7.style.cssText = playerXstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerXres.textContent++;
    } else if (
      /o/gi.test(b1.value) &&
      /o/gi.test(b2.value) &&
      /o/gi.test(b3.value)
    ) {
      b1.style.cssText = playerOstyle;
      b2.style.cssText = playerOstyle;
      b3.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
    } else if (
      /o/gi.test(b4.value) &&
      /o/gi.test(b5.value) &&
      /o/gi.test(b6.value)
    ) {
      b4.style.cssText = playerOstyle;
      b5.style.cssText = playerOstyle;
      b6.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b7.value) &&
      /o/gi.test(b8.value) &&
      /o/gi.test(b9.value)
    ) {
      b7.style.cssText = playerOstyle;
      b8.style.cssText = playerOstyle;
      b9.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b1.value) &&
      /o/gi.test(b4.value) &&
      /o/gi.test(b7.value)
    ) {
      b1.style.cssText = playerOstyle;
      b4.style.cssText = playerOstyle;
      b7.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b2.value) &&
      /o/gi.test(b5.value) &&
      /o/gi.test(b8.value)
    ) {
      b2.style.cssText = playerOstyle;
      b5.style.cssText = playerOstyle;
      b8.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b3.value) &&
      /o/gi.test(b6.value) &&
      /o/gi.test(b9.value)
    ) {
      b3.style.cssText = playerOstyle;
      b6.style.cssText = playerOstyle;
      b9.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b1.value) &&
      /o/gi.test(b5.value) &&
      /o/gi.test(b9.value)
    ) {
      b1.style.cssText = playerOstyle;
      b5.style.cssText = playerOstyle;
      b9.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    } else if (
      /o/gi.test(b3.value) &&
      /o/gi.test(b5.value) &&
      /o/gi.test(b7.value)
    ) {
      b3.style.cssText = playerOstyle;
      b5.style.cssText = playerOstyle;
      b7.style.cssText = playerOstyle;
      boxes.forEach((box) => {
        box.disabled = true;
      });
      playerOres.textContent++;
    }
  });
});

again.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.value = "";
    box.disabled = false;
    box.style.backgroundColor = "unset";
    // box.style.borderColor = "unset";
    flag = 1;
  });
});

reset.addEventListener("click", () => {
  playerXres.textContent = 0;
  playerOres.textContent = 0;
});

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });
