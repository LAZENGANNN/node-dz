document.querySelector("#searchButton").addEventListener("click", () => {
    window.location = `/students_list?minGrade=${avInput.value}&group=${groupInput.value}`;
  });



  const query = new URLSearchParams(window.location.search);
  if (query.has("minGrade")){
    avInput.value = query.get("minGrade")
  }

  if (query.has("group")){
    groupInput.value = query.get("group")
    }
