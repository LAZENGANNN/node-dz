async function sendPOSTjson() {
  const title = taskInp.value;

  const sendData = {
    title,
  };

  if (title) {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();
    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

async function sendEditPOST() {
  const id = idInp.value;
  const eTitle = etaskInp.value;
  const completed = isCompletedSelect.value;

  const sendData = {
    id,
    eTitle,
    completed,
  };

  if (id && completed) {
    const response = await fetch("/api/todos/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();
    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

async function sendDelPOST() {
  const id = delIdInp.value;
  const sendData = {
    id,
  };

  if (id) {
    const response = await fetch("/api/todos/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    });

    let responseText = await response.text();
    alert(responseText);
  } else {
    alert("заполните все поля");
  }
}

if (document.getElementById("createButton")) {
  document.getElementById("createButton").addEventListener("click", () => {
    sendPOSTjson();
  });
}

if (document.getElementById("changeButton")) {
  document.getElementById("changeButton").addEventListener("click", () => {
    sendEditPOST();
  });
}

if (document.getElementById("delButton")) {
  document.getElementById("delButton").addEventListener("click", () => {
    sendDelPOST();
  });
}
