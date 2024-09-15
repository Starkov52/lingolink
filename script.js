// доступ к экранам
const mainMenu = document.querySelector(".mainMenu");
const childMenu = document.querySelector(".childMenu");
const choiseLetters = document.querySelector(".choiseLetters");
const repeatLetters = document.querySelector(".repeatLetters");
const setting = document.querySelector(".setting");
const gameMenu = document.querySelector(".gameMenu");
const error = document.querySelector(".error");
const gameWord = document.querySelector(".gameWord");
const gameWin = document.querySelector(".gameWin");
const subject = document.querySelector(".subject");
const teatcher = document.querySelector(".teatcher");
const parent = document.querySelector(".parent");
const setting2 = document.querySelector(".setting2");
const gameWord0 = document.querySelector(".gameWord0");
const choiseWord = document.querySelector(".choiseWord");
const textDisplay = document.getElementById("textDisplay");
const gameNotification = document.querySelector(".setting__notificationGame");
const searchMenu = document.querySelector(".mainMenu__searchWindow-active");
const container = document.querySelector(".mainMenu__inner");
const elements = [
  mainMenu,
  childMenu,
  choiseLetters,
  repeatLetters,
  gameMenu,
  gameWord,
  gameWord0,
  gameWin,
  teatcher,
  parent,
];
//ВСЕ АКТИВНЫЕ КНОПКИ
const settingParentBtn = document.querySelector(".parent__item1 img");
const settingTeatcherBtn = document.querySelector(".teatcher__item2");
const mainBtn0 = document.querySelector(".mainMenu__childBtn");
const mainBtn1 = document.querySelector(".mainMenu__teatcherBtn");
const mainBtn2 = document.querySelector(".mainMenu__parentBtn");
const soundBtn = document.querySelector(".childMenu__soundBtn");
const lettersBackBtn = document.querySelector(".choiseLetters__item7");
const gameMenuBtn = document.querySelector(".childMenu__gameBtn");
const startGameBtn = document.querySelector(".gameMenu__icon");
const answerBtn0 = document.querySelector(".gameWord0__inner");
const answerBtn1 = document.querySelector(".gameWord1__inner");
const answerBtn2 = document.querySelector(".gameWord2__inner");
const answerBtn3 = document.querySelector(".gameWord3__inner");
const winBack = document.querySelector(".gameWin__btn");
const errorAgain = document.querySelector(".error__btn");
const gameMenuBack = document.querySelector(".gameMenu__btn");
const accMenuBtn = document.querySelector(".childMenu__accountBtn img");
const settingBtn0 = document.getElementById("btn01");
const settingBtn1 = document.getElementById("btn02");
const settingBtn2 = document.getElementById("btn03");
const settingBtn3 = document.getElementById("btn04");
const subjectBack = document.querySelector(".subject__btn3");
const sayRbtn = document.querySelector(".choiseLetters__item1");
const repeatBackBtn = document.querySelector(".repeatLetters__btn");
const teatcherBtn = document.querySelector(".mainMenu__teatcherBtn");
const parentBtn = document.querySelector(".mainMenu__parentBtn");
const colorBtn0 = document.querySelector(".subject__btn0");
const colorBtn1 = document.querySelector(".subject__btn1");
const colorBtn2 = document.querySelector(".subject__btn2");
const parentNotification = document.querySelector(".setting__notification");
const notification = document.getElementById("spantext");
const choiseWordBackBtn = document.querySelector(".choiseWord__btn1");
const choiseWordSendBtn = document.querySelector(".choiseWord__btn");
const choiseWordBtn = document.querySelector(".img__link");
const sendNotificationTextContent = document.getElementById("activeWord");
const sendNotification = document.querySelector(
  ".choiseWord__notificationGame"
);
const search = document.querySelector(".mainMenu__searchtBtn");
const closeSearchBtn = document.querySelector(".btnSearch");
const buttons = [
  settingParentBtn,
  settingTeatcherBtn,
  mainBtn0,
  mainBtn1,
  mainBtn2,
  soundBtn,
  lettersBackBtn,
  gameMenuBtn,
  startGameBtn,
  answerBtn0,
  answerBtn1,
  answerBtn2,
  answerBtn3,
  winBack,
  errorAgain,
  gameMenuBack,
  accMenuBtn,
  settingBtn0,
  settingBtn1,
  settingBtn2,
  settingBtn3,
  subjectBack,
  sayRbtn,
  repeatBackBtn,
  teatcherBtn,
  parentBtn,
  colorBtn0,
  colorBtn1,
  colorBtn2,
  parentNotification,
  notification,
];
//ИНТЕРАКТИВ
mainBtn0.addEventListener("click", function (event) {
  mainMenu.style.display = "none";
  childMenu.style.display = "block";
});
soundBtn.addEventListener("click", function (event) {
  childMenu.style.display = "none";
  choiseLetters.style.display = "block";
});
lettersBackBtn.addEventListener("click", function (event) {
  choiseLetters.style.display = "none";
  childMenu.style.display = "block";
});
gameMenuBtn.addEventListener("click", function (event) {
  childMenu.style.display = "none";
  gameMenu.style.display = "block";
});
startGameBtn.addEventListener("click", function (event) {
  if (data.textValue === "") {
    gameNotification.style.opacity = 1;
    gameNotification.style.transform = "translateY(0%)";
    setTimeout(() => {
      gameNotification.style.opacity = 0;
      gameNotification.style.transform = "translateY(-100%)";
    }, 3000);
  } else {
    gameMenu.style.display = "none";
    gameWord0.style.display = "block";
    createCubes();
  }
});
choiseWordBackBtn.addEventListener("click", function (event) {
  choiseWord.style.display = "none";
  teatcher.style.display = "block";
});
choiseWordBtn.addEventListener("click", function (event) {
  choiseWord.style.display = "block";
  teatcher.style.display = "none";
});

winBack.addEventListener("click", function (event) {
  gameWin.style.display = "none";
  gameMenu.style.display = "block";
});
errorAgain.addEventListener("click", function (event) {
  error.style.display = "none";
  gameMenu.style.display = "block";
});
gameMenuBack.addEventListener("click", function (event) {
  gameMenu.style.display = "none";
  childMenu.style.display = "block";
});
accMenuBtn.addEventListener("click", function (event) {
  childMenu.style.display = "none";
  setting.style.display = "block";
});
settingBtn0.addEventListener("click", function () {
  setting.style.display = "none";
  subject.style.display = "block";
});
settingBtn1.addEventListener("click", function () {});
settingBtn2.addEventListener("click", function () {
  setting.style.display = "none";
  mainMenu.style.display = "block";
});

settingBtn3.addEventListener("click", function () {
  setting.style.display = "none";
  childMenu.style.display = "block";
});
subjectBack.addEventListener("click", function (event) {
  subject.style.display = "none";
  setting.style.display = "block";
});
sayRbtn.addEventListener("click", function (event) {
  choiseLetters.style.display = "none";
  repeatLetters.style.display = "block";
});
repeatBackBtn.addEventListener("click", function (event) {
  repeatLetters.style.display = "none";
  choiseLetters.style.display = "block";
});
teatcherBtn.addEventListener("click", function (event) {
  mainMenu.style.display = "none";
  teatcher.style.display = "block";
});
parentBtn.addEventListener("click", function (event) {
  mainMenu.style.display = "none";
  parent.style.display = "block";
});
settingParentBtn.addEventListener("click", function (event) {
  parent.style.display = "none";
  setting.style.display = "block";
});
settingTeatcherBtn.addEventListener("click", function (event) {
  teatcher.style.display = "none";
  setting.style.display = "block";
  const btnAcc = document.getElementById("btn02");
  btnAcc.style.display = "none";
  settingBtn2.style.marginTop = "30px";
  settingBtn2.style.marginBottom = "60px";
});
//градиент
const blueGradient = "linear-gradient(to right, #6495ED, #4169E1)";
const pinkGradient = "linear-gradient(45deg, #e70f5e,#b35ac3,#148ae3)";
const yellowGradient = "linear-gradient(to top,orangered, gold)";
//
colorBtn0.addEventListener("click", function (event) {
  elements.forEach((el) => {
    el.style.background = blueGradient;
    parentNotification.style.opacity = 1;
    parentNotification.style.transform = "translateY(0)";
    notification.textContent = colorBtn0.textContent;
    notification.style.color = "#00bfff";
    setTimeout(function () {
      parentNotification.style.opacity = 0;
      parentNotification.style.transform = "translateY(-100%)";
    }, 2000);
  });
});
colorBtn1.addEventListener("click", function (event) {
  elements.forEach((el) => {
    el.style.background = pinkGradient;
    parentNotification.style.opacity = 1;
    parentNotification.style.transform = "translateY(0)";
    notification.textContent = colorBtn1.textContent;
    notification.style.color = "#FFC0CB";
    setTimeout(function () {
      parentNotification.style.opacity = 0;
      parentNotification.style.transform = "translateY(-100%)";
    }, 2000);
  });
});
colorBtn2.addEventListener("click", function (event) {
  elements.forEach((el) => {
    el.style.background = yellowGradient;
    parentNotification.style.opacity = 1;
    parentNotification.style.transform = "translateY(0)";
    notification.textContent = colorBtn2.textContent;
    notification.style.color = "orange";
    setTimeout(function () {
      parentNotification.style.opacity = 0;
      parentNotification.style.transform = "translateY(-100%)";
    }, 2000);
  });
});
//конструктор игры//
let finish = "";
let result = "";
const textArea = document.getElementById("textarea0");
let data = {
  textValue: "",
};
let copy = "";
textArea.addEventListener("input", (event) => {
  data.textValue = event.target.value;
  copy = data.textValue.slice();
});
console.log(copy);
const alphabet = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];
const cube1 = document.querySelector(".gameWord0__0");
const cube2 = document.querySelector(".gameWord0__1");
const cube3 = document.querySelector(".gameWord0__2");
const cube4 = document.querySelector(".gameWord0__3");
const cube5 = document.querySelector(".gameWord0__4");
const cube6 = document.querySelector(".gameWord0__5");

const cube7 = document.querySelector(".gameWord0__6");

const cube8 = document.querySelector(".gameWord0__7");

const cubes = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8];
function randomValues(max) {
  return Math.floor(Math.random() * max);
}

function createCubes() {
  cubes.forEach((cube) => {
    cube.textContent = "";
    cube.style.left = `${randomValues(300)}px`;
    cube.style.top = `${randomValues(600)}px`;
  });

  let i = 0;
  while (i < copy.length) {
    let left, top;
    let isCorrectCube = i === 0;

    left = randomValues(300);
    top = randomValues(600);

    const currentCube = cubes[i];
    currentCube.classList.add(`gameWord0__${i}-active`);
    currentCube.style.left = `${left}px`;
    currentCube.style.top = `${top}px`;

    if (isCorrectCube) {
      currentCube.textContent = data.textValue[i];
    } else {
      currentCube.textContent = alphabet[randomValues(32)];
    }

    i++;
  }
}
gameWord0.addEventListener("click", function (event) {
  const target = event.target.closest("span");
  let result = target.textContent;
  if (!target) return;

  if (result === data.textValue[0]) {
    data.textValue = data.textValue.slice(1);
    finish += result[0];
    createCubes();

    if (data.textValue === "") {
      gameWord0.style.display = "none";
      textDisplay.textContent = finish;
      textDisplay.style.color = "red";
      gameWin.style.display = "block";
    }
  } else {
    gameWord0.style.display = "none";
    error.style.display = "block";
  }
});
choiseWordSendBtn.addEventListener("click", function (event) {
  sendNotification.style.opacity = 1;
  sendNotificationTextContent.style.color = "red";
  sendNotificationTextContent.textContent = data.textValue;
  sendNotification.style.transform = "translateY(0%)";
  setTimeout(() => {
    sendNotification.style.opacity = 0;
    sendNotification.style.transform = "translateY(-100%)";
  }, 3000);
});
// Поисковое меню
search.addEventListener("click", function (event) {
  searchMenu.style.transform = "translateY(-190%)";
  container.style.filter = "blur(2px)";
});
closeSearchBtn.addEventListener("click", function (event) {
  container.style.filter = "blur(0px)";
  searchMenu.style.transform = "translateY(0%)";
});
const searchTextArea = document.getElementById("searchTxt");
const info = [
  { id: 1, name: "Собери слово", url: "" },
  { id: 2, name: "Аккаунт логопеда", url: "" },
  { id: 3, name: "Аккаунт родителя", url: "" },
  { id: 4, name: "Аккаунт ребенка", url: "" },
  { id: 5, name: "Настройки", url: "" },
  { id: 6, name: "Тема", url: "" },
  { id: 7, name: "Конструктор заданий", url: "" },
];
const searchUl = document.querySelector(".search__answer");
searchTextArea.addEventListener("keyup", function (event) {
  let dataSearch = searchTextArea.value.toLowerCase();
  searchUl.innerHTML = "";
  if (dataSearch === "") {
    return;
  }

  info.forEach((el) => {
    if (el.name.toLowerCase().includes(dataSearch)) {
      searchUl.insertAdjacentHTML(
        "beforeend",
        `<li class="search__list" id="${el.id}"><p class="search__text" >${el.name}</p></li>`
      );
    }
  });
});

searchMenu.addEventListener("click", function (event) {
  let target = event.target.closest("li");
  if (!target) {
    return;
  }
  const identificator = target.getAttribute("id");
  const height = searchUl.clientHeight;

  switch (identificator) {
    case "1":
      mainMenu.style.display = "none";
      gameMenu.style.display = "block";
      break;
    case "2":
      mainMenu.style.display = "none";
      teatcher.style.display = "block";
      break;
    case "3":
      mainMenu.style.display = "none";
      parent.style.display = "block";
      break;
    case "4":
      mainMenu.style.display = "none";
      childMenu.style.display = "block";
      break;
    case "5":
      mainMenu.style.display = "none";
      setting.style.display = "block";
      break;
    case "6":
      mainMenu.style.display = "none";
      subject.style.display = "block";
      break;
    case "7":
      mainMenu.style.display = "none";
      choiseWord.style.display = "block";
  }
});
async function j() {
  let api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await api.json();

  console.log(json.title);
}
j();

