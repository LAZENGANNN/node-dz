async function sendPOSTjson() {
    const title = titleInp.value;
    const content = contentInp.value;
    const author = authorInp.value;
  
    const sendData = {
        title,
        content,
        author,
    };
  
    if (title && content && author) {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });
  
      let responseText = await response.text();
      alert(responseText)
      
    } else {
      alert("заполните все поля");
    }
  }


  document.getElementById("createButton").addEventListener("click", () => {
    sendPOSTjson();
  });
  