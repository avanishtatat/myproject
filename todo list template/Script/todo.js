
var todoList = JSON.parse(localStorage.getItem("todoDataBase"));

todoList.map(function(el){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.todo;
    var td2 = document.createElement("td");
    td2.innerText = el.quantity;
    var td3 = document.createElement("td");
    td3.innerText = el.priority;
    var td4 = document.createElement("td");
    td4.textContent= "complete";
    td4.addEventListener("click",function(){
        completeTodofn(el);
    })

    tr.append(td1,td2,td3,td4);
    document.querySelector("#body").append(tr);
})

var cmpTodoArr = JSON.parse(localStorage.getItem("compTodoDataBase")) || [];
function completeTodofn(el){
    console.log("inside my comp todo fn");
    cmpTodoArr.push(el);
    localStorage.setItem("compTodoDataBase",JSON.stringify(cmpTodoArr));

}