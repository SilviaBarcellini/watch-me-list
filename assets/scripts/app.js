const addMovieItem = document.getElementById("add-modal"); 
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancel = document.querySelector(".btn--passive"); 

const backdropGetsGray = () => {
    backDrop.classList.toggle("visible"); 
}

const showForm = () => {
    addMovieItem.classList.toggle("visible");
    backdropGetsGray(); 
}

const backDropClickHandler = () => {
    showForm()
}

const cancelAddMovie = () => {
    showForm()
}

startAddMovieBtn.addEventListener("click", showForm); 
backDrop.addEventListener("click", showForm);
cancel.addEventListener("click", cancelAddMovie);