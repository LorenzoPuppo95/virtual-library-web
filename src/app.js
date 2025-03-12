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
        booksContainer.classList.add('books-container-son');
        const titleAuthorGroup = document.createElement('div');
        titleAuthorGroup.classList.add('title-author-group');
        const titleContainer = createTextElement('h2', books.title);
        const authorContainer = createTextElement('h3', books.author);
        titleAuthorGroup.appendChild(titleContainer);
        titleAuthorGroup.appendChild(authorContainer);
        const genreInfoCodeGroup = document.createElement('div');
        genreInfoCodeGroup.classList.add('genre-info-code-group');
        const genreContainer = createTextElement('h4', "Genere: " + books.category);
        const infoContainer = createTextElement('h4', 'Pubblicato nel ' + books.yop);
        const codeContainer = createTextElement('h4', 'ISBN: ' + books.isbn);
        genreInfoCodeGroup.appendChild(genreContainer);
        genreInfoCodeGroup.appendChild(infoContainer);
        genreInfoCodeGroup.appendChild(codeContainer);
        booksContainer.appendChild(titleAuthorGroup);
        booksContainer.appendChild(genreInfoCodeGroup);
        container.appendChild(booksContainer);
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