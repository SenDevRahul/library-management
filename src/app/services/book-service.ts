import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private http:HttpClient){}

  bookEntry(book:Book){
      const url=environment.apiBaseUrl+"/book/saveBook";
      return this.http.post(url,book);
    }
}
