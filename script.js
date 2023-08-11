let mylibrary = []

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book (title, author, pages, read);
    mylibrary.push(newBook);
}

function displayBook(){
    const libraryContainer = document.querySelector('.library')
    libraryContainer.innerHTML = '';

    mylibrary.forEach((book,index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('.book-card');
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p> Author : ${book.author}</p>
        <p> Pages : ${book.pages}</p>
        <p> Status : ${book.read ? 'Read' : 'Not Read'}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
        <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
        `;

        libraryContainer.append(bookCard);
    });
}

addBookToLibrary("Harry Potter", "J.K.ROWLING", 500, true)
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, false);
addBookToLibrary("1984", "George Orwell", 328, true);

displayBook();
