function symbolToText(operation) {
  let op = "";

  switch (operation) {
    case "+":
      op = "plus";
      break;

    case "-":
      op = "minus";
      break;

    case "*":
      op = "multiply";
      break;

    case "/":
      op = "divide";
      break;
  }
  return op;
}

function textToSymbol(operation) {
  let op = "";

  switch (operation) {
    case "plus":
      op = "+";
      break;

    case "minus":
      op = "-";
      break;

    case "multiply":
      op = "*";
      break;

    case "divide":
      op = "/";
      break;
  }
  return op;
}

module.exports = {
  symbolToText,
  textToSymbol,
};
