import { AddNewBook, DisplayAllBook } from './modules/AddRemove.js';
import AddTime from './modules/time.js';
import {
  AddNewBooks,
  ShowContactDetails,
  DisplayAllBooks,
} from './modules/navigation.js';

AddNewBook();
AddNewBooks();
DisplayAllBooks();
ShowContactDetails();
const todaystime = new AddTime();
todaystime.ShowTime();
DisplayAllBook();
