


document.querySelector("#form").addEventListener("submit",todoFn);

var todoArr =JSON.parse(localStorage.getItem("todoDataBase")) || [];

function todoFn(){
    event.preventDefault();
    console.log("inside my fn");
    var obj = {
        todo:document.querySelector("#name").value,
        quantity : document.querySelector("#qty").value,
        priority : document.querySelector("#priority").value
    }
    todoArr.push(obj);
    localStorage.setItem("todoDataBase",JSON.stringify(todoArr));
}