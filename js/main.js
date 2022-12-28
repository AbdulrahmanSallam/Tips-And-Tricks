// Scrool To Top
let btnScrol = document.querySelector(".up");

btnScrol.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

window.addEventListener("scroll", () => {
  this.scrollY >= 600
    ? btnScrol.classList.add("show")
    : btnScrol.classList.remove("show");
});

// Open And Close Sidebar
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let btnSid = document.querySelector(".toggle");

btnSid.onclick = function () {
  sidebar.classList.toggle("close");
  content.classList.toggle("ml-250");
  document.querySelectorAll(".sidebar li .icon").forEach((ele) => {
    ele.classList.toggle("w-44");
  });
};

// Light Mode
let btnDark = document.querySelector(".head i");

if (localStorage.getItem("dark")) {
  document.body.classList.add("dark-theme");
  btnDark.classList.add("uil-sun");
} else {
  document.body.classList.remove("dark-theme");
  btnDark.classList.remove("uil-sun");
}

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btnDark.classList.toggle("uil-sun");
  document.body.classList.contains("dark-theme")
    ? localStorage.setItem("dark", true)
    : localStorage.removeItem("dark");
});

// Random Border Color
let character = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let mainH2 = document.querySelectorAll(".main-page h2");
let boxNumbers = document.querySelectorAll(".meta-html .box span");

setInterval(() => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += character[Math.floor(Math.random() * character.length)];
  }
  mainH2.forEach((ele) => {
    ele.style.borderColor = `${color} transparent`;
  });

  boxNumbers.forEach((ele) => {
    ele.style.color = color;
  });
}, 1000);

class CommonDatatypes {
  check(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      typeof arr[i] in obj
        ? (obj[typeof arr[i]] += 1)
        : (obj[typeof arr[i]] = 1);
    }
    let max = obj[Object.keys(obj)[0]];
    let maxProp = Object.keys(obj)[0];
    for (const prop in obj) {
      if (obj[prop] > max) {
        max = obj[prop];
        maxProp = prop;
      }
    }
    return maxProp;
  }
}
let commonDatatypes = new CommonDatatypes();
console.log(commonDatatypes.check(["1", "2", 2]));
