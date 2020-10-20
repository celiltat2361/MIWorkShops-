const controlTecken = (newPassword) => {
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

  for (let i = 0; i < teckenList.length; i++) {
    if (newPassword.includes(teckenList[i])) {
      return true;
    }
  }
  return false;
};

const conditionBlog = (newPassword) => {
  if (newPassword.length >= 8 && controlTecken(newPassword)) {
    return true;
  } else if (newPassword.includes("-") && newPassword.length >= 12) {
    return true;
  } else if (newPassword.length >= 16) {
    return true;
  }
  return false;
};

const lastControl = () => {
  console.log("welcome");
  let newPassword = prompt("password");

  let newPasswords = [
    "12345678",
    "zxcvbnm?",
    "789456123%",
    "asdfghjklöqwertyui",
    "1234567789asd",
  ];
  newPasswords.push(newPassword); //Finally, I added the new password which I created myself to the list.
  console.log(newPasswords);

  newPasswords.forEach((newPassword) => {
    if (conditionBlog(newPassword) === true) {
      console.log(`Your password (${newPassword}) is secure.`);
    } else {
      console.log(`Warning!! This password (${newPassword}) is not secure.`);
    }
  });
};
lastControl();
//conditionBlog(newPassword);
