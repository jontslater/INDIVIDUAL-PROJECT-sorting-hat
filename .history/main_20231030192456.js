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
    favoriteFood: "sausages"
  }
]








const app = document.querySelector("app");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const form = document.querySelector("form");
  
  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
});
