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
];


const expelledKids =[]

const app = document.querySelector("#app");
const btn = document.querySelector("#btn");
const eApp = document.querySelector("#eApp") 

const houses = ["Hufflepuff","Ravenclaw","Slytherin","Gryffindor"]


const renderToDom = (students) =>{

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
      <button type="button" id="expel--${student.id}" class="btn-warning">Expel</button>
    </ul>
  </div>`
  }
  const app = document.querySelector("#app")
  app.innerHTML = domString
}

const twoRenderToDom = (students) =>{

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
      <button type="button" id="expel--${student.id}" class="btn-warning">Expel</button>
    </ul>
  </div>`
  }
  eApp.innerHTML = domString
}

renderToDom(students)
twoRenderToDom(expelledKids)

btn.addEventListener("click", () => {
  const form = document.querySelector("form");
  
  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
});



const houseRandomizer = (min, max) => {
  return Math.floor(Math.random() * 3);
}

app.addEventListener('click', (event) => {
  console.log("this is a click")
  if (event.target.id.includes("expel")) {
    const [ , id] = event.target.id.split("--");
    const index = students.findIndex(event => event.id === Number(id));
    students.splice(index, 1);
    console.log(id)
    expelledKids.push(students[index])
    renderToDom(students);
    twoRenderToDom(expelledKids)
  }
});



const form = document.querySelector("form");

const createStudent = (event) => {
  event.preventDefault();
  const randomHouse = houseRandomizer(0,3);
  const houseAssigned = houses[randomHouse]
  const newStudent
   = {
    id: students.length +1,
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    hairColor: document.querySelector("#hairColor").value,
    eyeColor: document.querySelector("#eyeColor").value,
    favoriteFood: document.querySelector("#favoriteFood").value,
    house: houseAssigned
  }
  students.push(newStudent);
  renderToDom(students);
  form.reset();
}
form.addEventListener("submit", createStudent)
