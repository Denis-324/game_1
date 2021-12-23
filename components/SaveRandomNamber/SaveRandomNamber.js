function SaveRandomNamber() {
  // уникальное число ввиде массива

  // уникальное число представляем ввиде строки, которое задумал компьтер
  let randomNumberArrUniqueString = numberValue.join("");

  let randomSave = document.createElement("div");
  randomSave.classList.add("random-save");

  let randomSaveButton = document.createElement("button");
  randomSaveButton.classList.add("random-save__button");
  randomSaveButton.textContent = "Показать ответ";

  let randomSaveOpen = document.createElement("div");
  randomSaveOpen.classList.add("random-save__open");
  randomSaveOpen.textContent = "";

  randomSave.append(randomSaveButton);
  randomSave.append(randomSaveOpen);
  RANDOM_NUMBER.append(randomSave);

  //показывает и скрывает ответ
  function getSaveOpen() {
    randomSaveButton.innerHTML =
      randomSaveButton.innerHTML === "Скрыть ответ"
        ? (randomSaveButton.innerHTML = "Показать ответ")
        : (randomSaveButton.innerHTML = "Скрыть ответ");

    randomSaveOpen.innerHTML =
      randomSaveOpen.innerHTML === ""
        ? (randomSaveOpen.innerHTML = randomNumberArrUniqueString)
        : (randomSaveOpen.innerHTML = "");
  }
  randomSaveButton.addEventListener("click", getSaveOpen);
}
SaveRandomNamber();
