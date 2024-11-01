async function sendPOSTjson() {
  const title = taskInp.value

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
  const id = idInp.value
  const title = taskInp.value
  const completed = isCompletedSelect.value

  const sendData = {
    id,
    title,
    completed,
  };
  console.log('sendData',sendData)

  if (id&&title&&completed) {
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

if(document.getElementById("createButton")){
  document.getElementById("createButton").addEventListener("click", () => {
  sendPOSTjson();
});
}

if(document.getElementById("changeButton")){
  document.getElementById("changeButton").addEventListener("click", () => {
    console.log('button')
  sendEditPOST();
});
}
