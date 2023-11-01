const students =[
  {
    id: 1,
    firstName: "Riley",
    lastName: "Chapman",
    hairColor: "black",
    eyeColor: "green",
    favoriteFood: "sausages",
  },
  {
    id: 2,
    firstName: "Fay",
    lastName: "Hooper",
    hairColor: "red",
    eyeColor: "brown",
    favoriteFood: "roasted potatoes",
  },
  {
    id: 3,
    firstName: "Tracey",
    lastName: "Greengrass",
    hairColor: "blonde",
    eyeColor: "gray",
    favoriteFood: "lamb chops",
  },
  {
    id: 3,
    firstName: "Severus",
    lastName: "Farley",
    hairColor: "brown",
    eyeColor: "brown",
    favoriteFood: "roast beef",
  }
]
const app = document.querySelector("#app");
const btn = document.querySelector("#btn");

const renderToDom = (Students) =>{

  let domString = "";

  for(let student of students){

    domString += `<div class="card" style="width: 18rem;">
    <div class="card-header">
      Featured
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${student.firstName} ${student.lastName}</li>
      <li class="list-group-item">${student.hairColor}</li>
      <li class="list-group-item">${student.eyeColor}/li>
      <li class="list-group-item">${student.favoriteFood}/li>
    </ul>
  </div>`
  }
  const app = document.querySelector("#app")
  app.innerHTML = domString
}

renderToDom(students)

btn.addEventListener("click", () => {
  const form = document.querySelector("form");
  
  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
});

const form = document.querySelector("form");

const createStudent = (event) => {
  event.preventDefault();

  const newStudent = {
    id: students.length +1,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    hairColor: document.querySelector("hairColor").value,
    eyeColor: document.querySelector("#eyeColor").value,
    favoriteFood: document.querySelector("#favoriteFood").value,
  }
  students.push(newStudent);
  renderToDom(students);
  form.reset();
}
form.addEventListener("submit", createStudent)
