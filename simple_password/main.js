console.log("welcome");
let newPassword = prompt("password");
let teckenList = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];
let newPassword1 = newPassword.split("");

let controlTecken = false;
for (let i = 0; i < teckenList.length; i++) {
  if (newPassword1.includes(teckenList[i])) {
    console.log();
    controlTecken = true;
    break;
  }
}

if (newPassword1.length >= 8 && controlTecken === true) {
  console.log("giltigt");
} else if (newPassword1.includes("-") && newPassword1.length >= 12) {
  console.log("giltigt");
} else if (newPassword1.length >= 16) {
  console.log("giltigt");
} else {
  console.log("inte giltigt");
}
