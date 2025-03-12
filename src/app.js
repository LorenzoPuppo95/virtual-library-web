import DataService from "./services/data-service.js";

const service = new DataService();

function titleSort() {
    const booksData = service.getBooksByTitle();
    render(booksData);
}
window.titleSort = titleSort;

function genreSort() {
    const booksData = service.getBooksByGenre();
    render(booksData);
}
window.genreSort = genreSort;

function yopSort() {
    const booksData = service.getBooksByYop();
    render(booksData);
}
window.yopSort = yopSort;

const booksData = service.getBooksData();
render(booksData);
function render(booksData) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    booksData.forEach(books => {
        const booksContainer = document.createElement('div');
        const titleContainer = createTextElement('h2', books.title + "-" + books.author);
        const genreContainer = createTextElement('h4', "Genere: " + books.category);
        const infoContainer = createTextElement('h4', 'Published in: ' + books.yop + ', ISBN: ' + books.isbn);
        booksContainer.classList.add('books-container-son');
        container.appendChild(booksContainer);
        booksContainer.appendChild(titleContainer);
        booksContainer.appendChild(genreContainer);
        booksContainer.appendChild(infoContainer);
    });
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}

const titleButton = document.getElementById('title-button');
titleButton.addEventListener('click', titleSort);
const genreButton = document.getElementById('genre-button');
genreButton.addEventListener('click', genreSort);
const yopButton = document.getElementById('yop-button');
yopButton.addEventListener('click', yopSort);