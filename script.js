    let mylibrary = []
    const newBook = document.getElementById('add-new-book');
    const formContainer = document.getElementById('form-container');

    function Book (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    newBook.addEventListener("click", ()=>{

        displayForm();
    });

    function displayForm(){
        const form = document.createElement('form');
        form.innerHTML = `
        <label for = "title">Title :</label>
        <input type = "text" id = "title" required>

        <label for = "author"> Author: </label>
        <input type= "text" id = "author" required>

        <label for "pages">Pages: </label>
        <input type = "number" id = "pages" required>

        <label for "read">Read: </label>
        <input type = "checkbox" id = "read" >

        <button type = 'submit'>Add Book </button>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const title  = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages').value;
            const read = document.getElementById('read').checked;

            addBookToLibrary(title, author, pages, read);
            displayBook();

            form.reset();
            formContainer.removeChild(form);

        });

        formContainer.appendChild(form);
        formContainer.style.display = 'block';

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

  /*   addBookToLibrary("Harry Potter", "J.K.ROWLING", 500, true)
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, false);
    addBookToLibrary("1984", "George Orwell", 328, true);
 */