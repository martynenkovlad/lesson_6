function doubleLetter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    return result;
  }

  const inputString = "Hello";
  const doubledString = doubleLetter(inputString);
  console.log(doubledString); 