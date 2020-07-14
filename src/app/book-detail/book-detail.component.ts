import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params.id;
    this.bookService.getBook(this.id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      }, error => console.log(error) );
  }

  list(){
    this.router.navigate(['/']);
  }

}
