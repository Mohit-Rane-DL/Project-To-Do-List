add.addEventListener("click", () => {
    if (input.value !== "") {
      const li = document.createElement("li");
      lists.appendChild(li);
      li.setAttribute("class", "to-do");
      li.textContent = input.value;
      const close = document.createElement("span");
      li.appendChild(close);
      close.textContent = "x";
      const br = document.createElement("br");
      lists.appendChild(br);
      input.value = "";
      localStorage.setItem("to-do", lists.innerHTML);
      
  
      li.addEventListener("click", () => {
        if (li.style["textDecoration"] === "none") {
          li.style["text-decoration"] = "line-through";
        } else {
          li.style["textDecoration"] = "none";
        }
      });
  
      close.addEventListener("click", () => {
          lists.removeChild(li);
      });
    }
  });
  /*
  function saveData(){
      localStorage.setItem("to-do", lists.innerHTML);
  }*/
  
  function getData(){
      lists.innerHTML = localStorage.getItem("to-do");
  }
  
  getData();