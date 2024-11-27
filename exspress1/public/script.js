async function getAll() {
  const response = await fetch("/api/student", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let responseText = await response.text();

  resultDiv.innerHTML = responseText;
}

async function getSelStudent() {
  const name = input.value;

  const sendData = JSON.stringify({
    name,
  });

  if (name) {
    let response = await fetch("/api/selStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });

    let responseText = await response.text();

    resultDiv.innerHTML = responseText;
  } else {
    alert("заполинте все поля");
  }
}

async function getBest() {
  const op = select.value;

  const sendData = JSON.stringify({
    op,
  });

  console.log(sendData);

  if (op) {
    let response = await fetch("/api/bestStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });

    let responseText = await response.text();

    resultDiv.innerHTML = responseText;
  } else {
    alert("заполинте все поля");
  }
}

getAll();

sendButton.addEventListener("click", () => {
  getSelStudent();
});

bestButton.addEventListener("click", () => {
  getBest();
});
