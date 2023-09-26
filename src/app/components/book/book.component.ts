import { Component, Input } from '@angular/core';
import { Author, Book, Formats } from 'src/app/model/book';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  constructor(private router: Router){}

  @Input() books?: Book;
  @Input() authors?: Author;
  @Input() formats?: Formats;


  viewDetails(bookId: number) {
    console.log('book', this.books); 
    console.log('bookId', bookId);
    const url = `/book-details/${bookId}`;
    this.router.navigate([url]);
  }
}
