const inputBOx= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBOx.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBOx.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBOx.value= "";
    saveData();
}
 listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElementt.remove();
        saveData();
    }
    }, false);

    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHtml =localStorage.getIten("data");
    }
    showTask();
