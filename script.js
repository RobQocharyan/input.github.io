//Խնդիր 2։Ստեղծել input 5 հատ մուտքագրենք տվյալներ տեղափոխի աղյուսակի մեջ

let form = document.createElement("form");
document.body.appendChild(form);
let input = document.createElement("input");
let input1 = document.createElement("input");
let input11 = document.createElement("input");
let input111 = document.createElement("input");
let input1111 = document.createElement("input");
let button = document.createElement("button");
document.body.appendChild(button).innerHTML = "Button";

form.appendChild(input).type = "text";
form.appendChild(input1).type = "text";
form.appendChild(input11).type = "number";
form.appendChild(input111).type = "number";
form.appendChild(input1111).type = "text";

document.write("<br>");

input1.style.marginLeft = "20px";
input11.style.marginLeft = "20px";
input111.style.marginLeft = "20px";
input1111.style.marginLeft = "20px";

input.placeholder = "Name";
input1.placeholder = "LastName";
input11.placeholder = "Age";
input111.placeholder = "Salary";
input1111.placeholder = "Bonus";

button.setAttribute("autocomplete", "off") + "\n";

document.write("<br>");
document.write("<br>");

button.setAttribute("onclick", "clickFunction()");

let table = document.createElement("table");
document.body.appendChild(table);
table.style.cssText = "width:400px;height:200px;border:1px solid green";

function clickFunction() {
  let tr = document.createElement("tr");
  document.body.appendChild(tr);
  table.appendChild(tr);

  let td = document.createElement("td");
  document.body.appendChild(td);
  td.style.border = "1px solid  green";
  tr.appendChild(td).innerHTML = input.value;

  let td1 = document.createElement("td");
  document.body.appendChild(td1);
  td1.style.border = "1px solid  green";
  tr.appendChild(td1).innerHTML = input1.value;

  let td2 = document.createElement("td");
  document.body.appendChild(td2);
  td2.style.border = "1px solid  green";
  tr.appendChild(td2).innerHTML = input11.value;

  let td3 = document.createElement("td");
  document.body.appendChild(td3);
  td3.style.border = "1px solid  green";
  tr.appendChild(td3).innerHTML = input111.value;

  let td4 = document.createElement("td");
  document.body.appendChild(td4);
  td4.style.border = "1px solid  green";
  tr.appendChild(td4).innerHTML = input1111.value;
}
