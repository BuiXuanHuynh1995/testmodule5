import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {AddBookComponent} from './add-book/add-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'update/:id', component: UpdateBookComponent},
  { path: 'details/:id', component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
