import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';



const routes: Routes = [

{path: 'home', component: ListComponent},
{ path: 'book-details/:id', component: BookDetailsComponent },
{path:'favourites', component: FavouritesComponent},
{path:'', redirectTo:'/home', pathMatch: 'full'},
{path:'**', redirectTo:'/home'},



]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
