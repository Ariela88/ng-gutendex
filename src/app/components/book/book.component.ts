import { Component, Input } from '@angular/core';
import { Author, Book, Formats } from 'src/app/model/book';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  constructor(private router: Router, public storage:StorageService){}

  @Input() books?: Book;
  @Input() authors?: Author;
  @Input() formats?: Formats;
  @Input() isFavourite: boolean = false;
  @Input() bColor: string = 'white';


  viewDetails(bookId: number) {
    console.log('book', this.books); 
    console.log('bookId', bookId);
    const url = `/book-details/${bookId}`;
    this.router.navigate([url]);
  }
}
