document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(){
    event.preventDefault()
    var product = document.querySelector("#category").value;
    var productName = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;

    var tr = document.createElement("tr")
    var td1 = document.createElement('td');
    td1.innerText=product;
    var td2 = document.createElement("td");
    td2.innerText = productName;
    var td3 = document.createElement("td")
    td3.innerText= price;
    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr)
}