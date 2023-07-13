import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Hero } from 'src/app/interfaces/hero';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products$!: Observable<Hero[]>;
  withRefresh = false;
  private searchText$ = new Subject<string>();

  constructor(private productService: ProductService) { }

  // Push a search term into the observable stream.
  search(productName: string) {
    this.searchText$.next(productName);
  }

  ngOnInit(): void {
    console.log("Testing");
    this.products$ = this.searchText$.pipe(
      // wait 300ms after each keystroke before considering the text
      // debounceTime(300),
      // ignore new text if same as previous text
      //  distinctUntilChanged(),

      // switch to new search observable each time the text changes
      switchMap((text: string) => this.productService.searchHeroes(text, this.withRefresh)),
    );
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}