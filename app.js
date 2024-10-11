let studentName = document.createElement("li");
let ul = document.querySelector("ul");
let list = document.createElement("li");
 function addStudent(studentName){
    let c = document.createElement("li");
    ul.append(c);
    c.append(studentName);
}
addStudent("Rustem");
addStudent("Ramil");
addStudent("Elman");