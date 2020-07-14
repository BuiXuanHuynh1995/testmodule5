import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../model/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  bookLength: number;

  constructor(private bookService: BookService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bookService.getBookList().subscribe(list => {
      this.books = list;
      this.bookLength = this.books.length;
    });
  }

  deleteBook(i) {
    const book = this.books[i];
    if (confirm('Bạn có muốn xóa cuốn sách ' + book.title + ' không?')) {
      this.bookService.deleteBook(book.id)
        .subscribe((result) => {
          this.books = this.books.filter(t => t.id !== book.id);
        });
    }
  }

  bookDetail(id: number){
    this.router.navigate(['details', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update', id]);
    this.reloadData();
  }


}
