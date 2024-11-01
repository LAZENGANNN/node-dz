function opToText(operation) {
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

async function sendGET() {
  const num1 = input1.value;
  const num2 = input2.value;
  const operation = opSelect.value;

  const op = opToText(operation);

  window.location = `/calc?a=${num1}&b=${num2}&op=${op}`;
}

async function sendPOSTtext() {
  const num1 = input1.value;
  const num2 = input2.value;
  const operation = opSelect.value;

  let sendData = `${num1}${operation}${num2}`;

  if (num1 && num2) {
    let response = await fetch("/api/calcText", {
      method: "POST",
      body: sendData,
    });

    let responseText = await response.text();

    resultDiv.value = responseText;
  } else {
    alert("введите оба числа!!!");
  }
}

async function sendPOSTjson() {
  const num1 = input1.value;
  const num2 = input2.value;
  const operation = opSelect.value;

  let sendData = {
    num1: num1,
    num2: num2,
    operation: operation,
  };

  if (num1 && num2) {
    const response = await fetch("/api/calcJson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();

    resultDiv.value = responseText;
  } else {
    alert("введите оба числа!!!");
  }
}

document.getElementById("GETbutton").addEventListener("click", () => {
  sendGET();
});

document.getElementById("POSTtextButton").addEventListener("click", () => {
  sendPOSTtext();
});

document.getElementById("POSTjsonButton").addEventListener("click", () => {
  sendPOSTjson();
});
