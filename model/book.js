export default class Book{
    constructor(title, author, isbn, category, yop) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.yop = yop;
    }

    compareByTitle(secondBook){
        const myTitle=this.title;
        const yourTitle=secondBook.title;
        return myTitle.localeCompare(yourTitle);
    }

    compareByGenre(secondBook){
        const myGenre=this.category;
        const yourGenre=secondBook.category;
        return myGenre.localeCompare(yourGenre);
    }
    
    compareByYop(secondBook){
        const myYop = this.yop;
        const yourYop = secondBook.yop;
        if (myYop < yourYop) {
            return -1;
        } else if (myYop > yourYop) {
            return 1;
        } else {
            return 0;
        }
    }
}