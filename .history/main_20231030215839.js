const students =[
  {
    id: 1,
    firstName: "Riley",
    lastName: "Chapman",
    hairColor: "black",
    eyeColor: "green",
    favoriteFood: "sausages",
    house: "Hufflepuff"
  },
  {
    id: 2,
    firstName: "Fay",
    lastName: "Hooper",
    hairColor: "red",
    eyeColor: "brown",
    favoriteFood: "roasted potatoes",
    house: "Ravenclaw"
  },
  {
    id: 3,
    firstName: "Tracey",
    lastName: "Greengrass",
    hairColor: "blonde",
    eyeColor: "gray",
    favoriteFood: "lamb chops",
    house: "Slytherin",
  },
  {
    id: 4,
    firstName: "Severus",
    lastName: "Farley",
    hairColor: "brown",
    eyeColor: "brown",
    favoriteFood: "roast beef",
    house: "Gryffindor",
  }
]
const app = document.querySelector("#app");
const btn = document.querySelector("#btn");

const randomhouse = []
{"Hufflepuff","Ravenclaw","Slytherin","Gryffindor"}
   

const renderToDom = (Students) =>{

  let domString = "";

  for(let student of students){

    domString += `<div class="card" style="width: 18rem;">
    <div class="card-header">
    </div>
    <ul class="list-group list-group-flush">
       
      <li class="list-group-item">Name: ${student.firstName} ${student.lastName}
      <li class="list-group-item">Hair Color: ${student.hairColor}
      <li class="list-group-item">Eye Color: ${student.eyeColor}
      <li class="list-group-item"> Favorite Food: ${student.favoriteFood}
      <li class="list-group-item"> House: ${student.house}
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
    form.style.display = "none";
  }else{
    form.style.display = "block";
  }
});

const form = document.querySelector("form");

const createStudent = (event) => {
  event.preventDefault();
  const newStudent = {
    id: students.length +1,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    hairColor: document.querySelector("#hairColor").value,
    eyeColor: document.querySelector("#eyeColor").value,
    favoriteFood: document.querySelector("#favoriteFood").value,
  }
  students.push(newStudent);
  renderToDom(students);
  form.reset();
}
form.addEventListener("submit", createStudent)
