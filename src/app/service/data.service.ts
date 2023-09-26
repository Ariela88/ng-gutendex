import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookDetailsComponent } from '../components/book-details/book-details.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allBooks = new BehaviorSubject<Book[]>([]);
  readonly BASE_URL = 'https://gutendex.com/books/';
  pageNumber = 1;

  constructor(private http: HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(): void {
    const apiUrl = `${this.BASE_URL}?page=${this.pageNumber}`;
    this.http.get<any>(apiUrl).pipe(
      map(data => data.results)
    ).subscribe(books => this.allBooks.next(books));
  }

  getSingleBook(id: string): Observable<Book> {
    const apiUrl = `${this.BASE_URL}${id}`;
    return this.http.get<Book>(apiUrl);
  }
  

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getAllBooks();
    }
  }

  nextPage() {
    this.pageNumber++;
    this.getAllBooks();
  }
}
