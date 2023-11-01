const app = document.querySelector("app");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const form = document.querySelector("sortCard");
  
  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
});
