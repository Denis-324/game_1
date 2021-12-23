const getNumber = () => {
  let randomNumberArrUnique = [];
  //цикл будет повторяется пока число не будет больше двух цифр
  while (randomNumberArrUnique.length < 2) {
    // генерирует число в диапозоне от 100 - 999999
    function getRandomNuber() {
      min = Math.ceil(100);
      max = Math.floor(999999);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //сгенерированное число помещаем в перменную
    let randomNumber = getRandomNuber();

    //сгенерированное число представляем ввиде массива чисел
    let randomNumberArr = randomNumber.toString().split("");

    // Убирает поторяющиеся цифры из массива
    randomNumberArrUnique = randomNumberArr.reduce((result, item) => {
      return result.includes(item) ? result : [...result, item];
    }, []);
  }
  return randomNumberArrUnique;
};
let numberValue = getNumber();
