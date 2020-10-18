//this addEeventListener method is waiting for the DOM content to load before saving
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const newGameForm = document.querySelector('#new-game-form');
    console.dir(newGameForm)
    newGameForm.addEventListener('submit', handleSaveGame);

    const deleteList = document.querySelector('#delete-list')
    deleteList.addEventListener('click', handleWipeList)
});

//creating function for what happens upon saving new game
const handleSaveGame = function (event) {
    event.preventDefault();

// these are creating the list item and the elements that make up it's contents
    const newGameListItem = document.createElement('li');
    const titleItem = document.createElement('h3');
    const developerItem = document.createElement('h4');
    const platformItem = document.createElement('h5');
    const playStatusItem = document.createElement('p')


// append the  individual contents created above to newGameListItem - also created above
    newGameListItem.appendChild(titleItem);
    newGameListItem.appendChild(developerItem);
    newGameListItem.appendChild(platformItem);
    newGameListItem.appendChild(playStatusItem)


 // assign values - taken from the form inputs - to the individual contents above
    titleItem.textContent = this.title.value;
    developerItem.textContent = this.developer.value;
    platformItem.textContent = this.platform.value;
    playStatusItem.textContent = this.playstatus.value;
    console.dir(playStatusItem)

    // created a variable that represents 
    const gameList = document.querySelector('#game-list');


// add entire newGameListItem which has been filled with above contents and had contents assigned above
    gameList.appendChild(newGameListItem);


// NO IDEA WHAT THIS DOES

    event.target.reset();
}

const handleWipeList = function (event) {
    const gameList = document.querySelector('#game-list');
    gameList.innerHTML = '';
}