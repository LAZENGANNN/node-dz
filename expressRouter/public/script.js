async function getAll() {
  const response = await fetch("/api/estate/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let responseText = await response.text();

  resultDiv.innerHTML = responseText;
}

getAll();
