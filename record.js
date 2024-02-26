// fill in javascript code here
let tbody = document.querySelector("tbody");
let submit = document.querySelector(".submit");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let Name = document.querySelector("#name").value;
  let EmplyeeId = document.querySelector("#employeeID").value;
  let Department = document.querySelector("#department").value;
  let Experience = document.querySelector("#exp").value;
  let Email = document.querySelector("#email").value;
  let Mobile = document.querySelector("#mbl").value;
  let Role;
  if (Experience <= 1) {
    Role = "Fresher";
  } else if (2 <= Experience && Experience < 5) {
    Role = "Junior";
  } else {
    Role = "senior";
  }
  //   let Delete = document.querySelector("#");
  let row = document.createElement("tr");
  row.innerHTML = ` <td>${Name}</td>
    <td>${EmplyeeId}</td>
    <td>${Department}</td>
    <td>${Experience}</td>
    <td>${Email}</td>
    <td>${Mobile}</td>
    <td>${Role}</td>
      <td> <a href="#"class = "delete" >Delete</a></td>`;

  tbody.appendChild(row);
  const deleteLink = row.querySelector(".delete");
  deleteLink.addEventListener("click", function () {
    tbody.removeChild(row);
  });
});
