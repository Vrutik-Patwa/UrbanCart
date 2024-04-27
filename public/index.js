const imgs = document.querySelectorAll("#imgs ul img");

console.log(imgs);

const prev_btn = document.getElementById("prev_btn");
const next_btn = document.getElementById("next_btn");
console.log(prev_btn);
let n = 0;
function changeslide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeslide();

prev_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }

  console.log(n);
  changeslide();
});

next_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n > imgs.length - 2) {
    n = 0;
  } else {
    n++;
  }

  console.log(n);
  changeslide();
});

console.log(n);
