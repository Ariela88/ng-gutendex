import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  

  book?:Book;
  

  constructor(private route:ActivatedRoute, private dataServ: DataService, private router:Router){}

 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataServ.getSingleBook(id).subscribe(b => this.book = b)
    }
  
  }

}
