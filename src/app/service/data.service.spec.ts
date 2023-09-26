import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allBooks = new BehaviorSubject<Book[]>([]);
  readonly BASE_URL = 'https://gutendex.com/books/';
  pageNumber = 1;
  pageSize = 20;

  constructor(private http: HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(): void {
    const apiUrl = `${this.BASE_URL}?page=${this.pageNumber}&pageSize=${this.pageSize}`;
    this.http.get<any>(apiUrl).pipe(
      map(data => data.results)
    ).subscribe(books => this.allBooks.next(books));
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
