const newForm = document.getElementById("add-modal"); 
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancel = document.querySelector(".btn--passive"); 
const add = cancel.nextElementSibling; 
const userInputs = newForm.querySelectorAll("input"); //select all input 
const welcomeMessageBox = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        welcomeMessageBox.style.display = "box";
    } else {
        welcomeMessageBox.style.display = "none";
    }
};

const backdropGetsGray = () => {
    backDrop.classList.toggle("visible"); 
}

const showForm = () => {
    newForm.classList.toggle("visible");
    backdropGetsGray(); 
}

const backDropClickHandler = () => {
    showForm()
}

const clearInputs = () => {
    userInputs[0].value = ""; 
    userInputs[1].value = "";
    userInputs[2].value = ""; 
}

const cancelAddMovieHandler = () => {
    showForm();
    clearInputs();
    
}

const addMovieHandler = () => {//map through inputs and isolate the values
    const titleValue = userInputs[0].value; 
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value; 

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("UH-OH! Something went wrong! Please make sure you enter valid values!!");
        return; 
    }
    
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    } 

    movies.push(newMovie);
    console.log(movies);
    showForm();//close window
    clearInputs();
    updateUI(); 
}

startAddMovieBtn.addEventListener("click", showForm); 
backDrop.addEventListener("click", showForm);
cancel.addEventListener("click", cancelAddMovieHandler);
add.addEventListener("click", addMovieHandler)