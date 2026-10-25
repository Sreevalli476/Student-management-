
document.getElementById("studentForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    let li = document.createElement("li");

    li.innerHTML = name + " - " + roll + " - " + course;

    document.getElementById("list").appendChild(li);

    document.getElementById("studentForm").reset();
};
