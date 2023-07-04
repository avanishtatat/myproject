document.querySelector("form").addEventListener("submit",todoFn);
function todoFn(){
    event.preventDefault()
    var tr = document.createElement("tr")
    var td1 = document.createElement("td");
    var name = document.querySelector("#name").value;
    td1.append(name);
    var td2 = document.createElement("td");
    var qty = document.querySelector("#qty").value;
    td2.append(qty);
    var td3 = document.createElement("td");
    var pr = document.querySelector("#priority").value
    td3.append(pr)
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);
}