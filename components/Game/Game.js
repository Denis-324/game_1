// максимальное количетсов попыток
let maxNumberCount = 6;
// число, которое загалал компьютер
let randomNumberArrUniqueString = numberValue.join("");
//заголовок
let gameTitle = document.createElement("div");
gameTitle.classList.add("game__title");
gameTitle.textContent = "Игра быки и коровы";
GAME.append(gameTitle);
//правило игры
let gameDiscription = document.createElement("div");
gameDiscription.classList.add("game__discription");
gameDiscription.innerHTML = `Я загадал число, из <span>${randomNumberArrUniqueString.length}</span> уникальных цифр, попропробуй угадать
его, у тебя есть <span>${maxNumberCount}</span> попыток.`;
GAME.append(gameDiscription);
//разметка
let gameFlex = document.createElement("div");
gameFlex.classList.add("game__flex");

let gameForm = document.createElement("div");
gameForm.classList.add("game__form");

let gameInput = document.createElement("input");
gameInput.classList.add("game__input");
gameInput.setAttribute("type", "number");
gameInput.setAttribute("placeholder", "Вводи значение");

let gameButton = document.createElement("button");
gameButton.classList.add("game__button");
gameButton.textContent = "Играть!";
gameButton.setAttribute("disabled", "disabled");
gameButton.classList.add("game__button_disabled");

let gameTry = document.createElement("div");
gameTry.classList.add("game__try");
let gameDiscription2 = document.createElement("div");
gameDiscription2.classList.add("game__discription");
gameDiscription2.textContent = "Твои значения:";

let gameList = document.createElement("ol");
gameList.classList.add("game__list");

let gameAnswer = document.createElement("div");
gameAnswer.classList.add("game__answer");

let gameDiscription3 = document.createElement("div");
gameDiscription3.classList.add("game__discription_mt");

let gameDiscription4 = document.createElement("div");
gameDiscription4.classList.add("game__discription_mt");

let gameDiscription5 = document.createElement("div");
gameDiscription5.classList.add("game__discription_mt");

gameForm.append(gameInput);
gameForm.append(gameButton);
gameFlex.append(gameForm);

gameTry.append(gameDiscription2);
gameTry.append(gameList);
gameFlex.append(gameTry);

GAME.append(gameFlex);
GAME.append(gameAnswer);

// введеннное значение пользоватеем
let userAnswerValue = gameInput.value;

const getValue = () => {
  let gameListLi = document.createElement("li");
  gameList.append(gameListLi);
  let userAnswerValue = gameInput.value;
  gameListLi.innerHTML = userAnswerValue;

  console.log(userAnswerValue);
};
gameButton.addEventListener("click", getValue);

let update = document.createElement("div");
let i = 2;
//Основная функция (проверяет введенные цифры, показывает уведомления)
const getAnswer = () => {
  let userAnswerValue2 = gameInput.value;
  //массив с числами которые будут совпадать с загаданными числами
  let coincidenceNumber = [];
  let coincidenceNumberCount = 0;
  let coincidenceNumberString = "";
  //массив с числами которые будут найдены, но находится не на своих позициях
  let findeNumber = [];
  let findeNumberCount = 0;
  let findeNumberString = "";
  if (randomNumberArrUniqueString.toString() === gameInput.value.toString()) {
    update.innerHTML = `<button  class="game__button">Начать заного</button>`;
    gameForm.append(update);
    update.addEventListener("click", () => {
      window.location.reload();
    });
    gameInput.setAttribute("disabled", "disabled");
    gameButton.setAttribute("disabled", "disabled");
    gameButton.classList.add("game__button_disabled");
    gameDiscription3.textContent = "Ты выиграл!";
    gameAnswer.append(gameDiscription3);
    gameDiscription5.innerHTML = "";
    console.log("Ты выиграл");
  } else if (
    randomNumberArrUniqueString.toString() !== userAnswerValue2.toString()
  ) {
    // проходим циклом по значению и проверяем разные условия
    for (let i = 0; i < randomNumberArrUniqueString.length; i++) {
      if (
        randomNumberArrUniqueString.includes(userAnswerValue2[i]) &&
        randomNumberArrUniqueString[i] !== userAnswerValue2[i]
      ) {
        findeNumber.push([userAnswerValue2[i]]);
        findeNumberString = findeNumber.join(", ");
        findeNumberCount = findeNumber.length;
      } else if (randomNumberArrUniqueString[i] === userAnswerValue2[i]) {
        coincidenceNumber.push([userAnswerValue2[i]]);
        coincidenceNumberString = coincidenceNumber.join(", ");
        coincidenceNumberCount = coincidenceNumber.length;
      }
    }

    gameDiscription5.innerHTML = `Цифры стоящии на своих местах, которые ты угадал <span>${coincidenceNumberCount} шт.</span> <span>(${coincidenceNumberString})</span><br/>
    Цифры, которые ты угадал, но их позиции нужно поменять <span>${findeNumberCount} шт.</span> <span>(${findeNumberString})</span>`;
    gameAnswer.append(gameDiscription5);
  }
  if (i > maxNumberCount) {
    update.innerHTML = `<button  class="game__button">Начать заного</button>`;
    gameForm.append(update);
    update.addEventListener("click", () => {
      window.location.reload();
    });
    gameInput.setAttribute("disabled", "disabled");
    gameButton.setAttribute("disabled", "disabled");
    gameButton.classList.add("game__button_disabled");
    gameDiscription4.textContent = "Твои попытки закончились!";
    gameAnswer.append(gameDiscription4);
    gameDiscription5.innerHTML = "";
    console.log("Попытки закончились");
  }
  i++;
  console.log(gameInput.value.toString());
  console.log(randomNumberArrUniqueString.toString());

  gameInput.value = "";
};
gameButton.addEventListener("click", getAnswer);
//Валидация
gameInput.oninput = function () {
  let isRepeat = new Set(this.value).size != this.value.length;
  if (isRepeat) {
    this.value = this.value.replace(/\d$/, "");
  } else if (this.value.length === randomNumberArrUniqueString.length) {
    gameButton.removeAttribute("disabled", "disabled");
    gameButton.classList.remove("game__button_disabled");
  } else if (this.value.length >= randomNumberArrUniqueString.length) {
    gameButton.setAttribute("disabled", "disabled");
    gameButton.classList.add("game__button_disabled");
  } else if (this.value.length <= randomNumberArrUniqueString.length) {
    gameButton.setAttribute("disabled", "disabled");
    gameButton.classList.add("game__button_disabled");
  }
};
