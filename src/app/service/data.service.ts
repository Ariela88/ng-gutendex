import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged, map as rxMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  book?: Book | undefined;

  allBooks = new BehaviorSubject<Book[]>([]);
  readonly BASE_URL = 'https://gutendex.com/books/';
  pageNumber = 1;

  constructor(private http: HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(): void {
    const apiUrl = `${this.BASE_URL}?page=${this.pageNumber}`;
    this.http
      .get<any>(apiUrl)
      .pipe(
        map((data) => data.results),
       
        distinctUntilChanged(
          (prev, curr) =>
            prev.map((book: { id: any }) => book.id).join(',') ===
            curr.map((book: { id: any }) => book.id).join(',')
        )
      )
      .subscribe((books) => this.allBooks.next(books));
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

  searchBooks(searchTerm: any) {
    const apiUrl = `${this.BASE_URL}?search=${searchTerm}`;
    this.http
      .get<any>(apiUrl)
      .pipe(
        map((data) => data.results),

        distinctUntilChanged(
          (prev, curr) =>
            prev.map((book: { id: any }) => book.id).join(',') ===
            curr.map((book: { id: any }) => book.id).join(',')
        )
      )
      .subscribe((books) => this.allBooks.next(books));
  }
}
