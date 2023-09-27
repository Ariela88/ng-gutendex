import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favouritesSubject = new BehaviorSubject<Book[]>([]);

  constructor() {
    
    if (localStorage.getItem('favourites')) {
      
      this.favouritesSubject.next(JSON.parse(localStorage.getItem('favourites')!))
    }
  }

  savebook(book: Book) {
    book.isFavourite = true;
    const actualArray = this.favouritesSubject.value;
    const newArray = [...actualArray, book];
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  removebook(book: Book) {
    book.isFavourite = false;
   
    const actualArray = this.favouritesSubject.value;
    const newArray = actualArray.filter((p) => p.id !== book.id);
    this.favouritesSubject.next(newArray);
    localStorage.setItem('favourites', JSON.stringify(newArray));
  }

  toggleFavourites(book: Book) {
    if (this.isFavourite(book)) {
      this.removebook(book)

    }else{
      this.savebook(book)
    }
  }


  isFavourite(book: Book):boolean {
    console.log('is favourite', book);
    return this.favouritesSubject.value.some(p => p.id===book.id);
  }
}
