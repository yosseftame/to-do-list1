let input = document.getElementById("input");
let ul = document.getElementById("ul");
function Add() {
    if (input.value === "") {
        alert("its empty task please add your task");
        
    }
    else {
        
        let createEle = document.createElement("li");
        let createSpan = document.createElement("span");
        let createI = document.createElement("i");
        createSpan.innerHTML = input.value;
        createI.classList.add("fa-solid");
        createI.classList.add("fa-x");
        createEle.append(createSpan);
        createEle.append(createI);
        ul.append(createEle);
        createEle.onclick = function () {
            createSpan.classList.toggle("span-toggle");
        }
        input.value=""
        createI.onclick = function () {
            createEle.remove();
        }
    }
    
}
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (input.value === "") {
        alert("its empty task please add your task");
        
    }
    else {
        
       Add()
    }
    }
});

