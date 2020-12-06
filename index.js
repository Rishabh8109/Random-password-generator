const generatButton = document.getElementById("generatButton");
const pwdLength = document.getElementById("pwdLength");
const upper = document.getElementById("uppreType");
const lowerType = document.getElementById("lowerType");
const numberType = document.getElementById("numberType");
const symbolType = document.getElementById("symbolType");
const result = document.getElementById("result");
const submitForm = document.getElementById("passwordForm");

// random function

const randomFun = {
  hasLower: getLowerChar,
  hasUpper: getUpperChar,
  hasNumber: getNumber,
  hasSymbols: getSymbols,
};

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordCount = pwdLength.value;
  const hasLower = lowerType.checked;
  const hasUpper = upper.checked;
  const hasNumber = numberType.checked;
  const hasSymbols = symbolType.checked;

  result.innerText = generatePassword(
    passwordCount,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols
  );
});

function generatePassword(
  passwordCount,
  hasLower,
  hasUpper,
  hasNumber,
  hasSymbols
) {
  let generatedPassword = "";

  // typeConut
  const typeCount = hasLower + hasUpper + hasNumber + hasSymbols;

  // filtering typeArray
  const typeArr = [
    { hasLower },
    { hasUpper },
    { hasNumber },
    { hasSymbols },
  ].filter((item) => {
    return Object.values(item)[0];
  });

  // // get typeArr throw loop
  for (let i = 0; i < passwordCount; i += typeCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFun[funcName]();
    });
  }

  return generatedPassword;
}

// get random lower case letter
function getLowerChar() {
  let lowerChar = String.fromCharCode(Math.floor(Math.random() * 26 + 95));
  return lowerChar;
}

// get random uppercase letter
function getUpperChar() {
  let UpperChar = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  return UpperChar;
}

//get random numbers
function getNumber() {
  let numbers = Math.floor(Math.random() * 26);
  return numbers;
}

//get random symbols
function getSymbols() {
  let symbols = "!#$&%*^<>~";
  let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  return randomSymbols;
}
