let BookList = {};
const DisplayBooks = document.querySelector('.collection');
const NewTitle = document.querySelector('#title');
const NewAuthor = document.querySelector('#author');
let SaveBooks = localStorage.getItem('BookList');
const AddBook = document.querySelector('#btn');
const ErrorChecker = document.querySelector('.checker');
let StoreBooks = [];
const ClearFields = () => {
  NewTitle.value = '';
  NewAuthor.value = '';
};

const Validate = () => {
  if (NewTitle.value !== '' && NewAuthor.value !== '') {
    ErrorChecker.textContent = '';
    return true;
  }
};

const DisplayAllBook = () => {
  DisplayBooks.innerHTML = '';
  let keepBooks = JSON.parse(localStorage.getItem('BookList'));
  if (keepBooks !== null) {
    StoreBooks = keepBooks;
    keepBooks.forEach((Books, index) => {
      DisplayBooks.innerHTML += `
         <tr class="Display" >
         <td><span>"</span>${Books.Title}<span>" by </span>${Books.Author}</td>
         <td><button  class="remove">Remove</button></td>
         </tr>`;
    });
  }

  const remove = document.querySelectorAll('.remove');
  remove.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      event.target.parentElement.parentElement.remove();
      const Findid = Number(event.target.id);
      StoreBooks = StoreBooks.filter((Book, index) => {
        if (index !== Findid) {
          return Book;
        }
      });
    });
  });
};

const DecideOnDisplay = () => {
  if (SaveBooks === null) {
    DisplayBooks.innerHTML = '';
  } else {
    DisplayAllBook();
  }
};

const AddNewBook = () => {
  AddBook.addEventListener('click', () => {
    if (Validate()) {
      BookList = {
        Title: NewTitle.value,
        Author: NewAuthor.value,
      };
      StoreBooks.push(BookList);
      localStorage.setItem('BookList', JSON.stringify(StoreBooks));
      ClearFields();
      DecideOnDisplay();
    } else {
      ErrorChecker.textContent = 'Please fill in all fields';
    }
  });
};
export { AddNewBook, DisplayAllBook };
