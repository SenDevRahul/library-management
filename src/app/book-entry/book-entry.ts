import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Book } from '../models/book';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-book-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-entry.html',
  styleUrls: ['./book-entry.css']
})
export class BookEntryComponent {

  errorMessage: string = '';
  successMessage: string = '';

  book: Book = {
    bookId: '',
    bookName: '',
    writer: '',
    publication: '',
    blockNumber: '',
    subject: ''
  };

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  postBook() {

    // Simple validation
    if (
      !this.book.bookName ||
      !this.book.writer ||
      !this.book.publication
    ) {
      this.errorMessage = 'Please fill all required fields';
      return;
    }

    this.bookService.bookEntry(this.book).subscribe({

      next: (res) => {
        console.log('Book Saved', res);

        if (res != null) {

          this.successMessage = 'Book Added Successfully';
          this.errorMessage = '';
          // Reset form
          this.book = {
            bookId: '',
            bookName: '',
            writer: '',
            publication: '',
            blockNumber: '',
            subject: ''
          };
          setTimeout(() => {
            this.router.navigate(['home/book-entry']);
          }, 2000);
          // Optional navigation
          // this.router.navigate(['/dashboard']);

        } else {
          this.successMessage = '';
          this.errorMessage =
            `Something went wrong for book ${this.book.bookName}`;
        }
      },

      error: (err) => {
        console.error('Error', err);
        this.successMessage = '';
        this.errorMessage =
          `Unable to save book ${this.book.bookName}`;
      }
    });
  }
}