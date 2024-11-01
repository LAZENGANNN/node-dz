async function sendPOSTjson() {
  const text = textInp.value;
  const author = authorInp.value;

  const sendData = {
    text,
    author,
  };

  if (text && author) {
    const response = await fetch("/api/messages", {
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

document.getElementById("createButton").addEventListener("click", () => {
  sendPOSTjson();
});
