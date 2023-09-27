import { Component } from '@angular/core';
import { Book } from 'src/app/model/book';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  
  favourites: Book[] = [];

  constructor(public storage: StorageService){}

  ngOnInit(): void {
    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
      this.favourites = arrayOfFavourites;
     
    })
  }

}
