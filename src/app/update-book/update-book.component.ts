import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id: number;
  book: Book = new Book();
  submitted: any;

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

  updateBook(){
    this.bookService.updateBook(this.id, this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
    this.gotoList();
  }

  onSubmit(){
    this.updateBook();
  }

  gotoList(){
    this.router.navigate(['/']);
  }

}