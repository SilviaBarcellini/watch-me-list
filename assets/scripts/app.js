const addMovieItem = document.getElementById("add-modal"); 
const startAddMovieBtn = document.querySelector("header button");

const showForm = () => {
    addMovieItem.classList.toggle("visible"); 
}

startAddMovieBtn.addEventListener("click", showForm)