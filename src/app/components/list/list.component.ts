import { Component } from '@angular/core';
import { Author, Book } from 'src/app/model/book';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private dataserv:DataService){

  }

  books:Book[]=[]
  authors:Author[]=[]
  searchTerm: string = '';

  ngOnInit(): void {
    this.dataserv.allBooks.subscribe(book => this.books = book)
    
  }

  searchBooks() {
    
    this.dataserv.searchBooks(this.searchTerm);
  }

}
