import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public $products: Observable<Hero[]> | undefined;
  constructor(private productService: ProductService) {


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.load();
  }

  load(): void {
    this.$products = this.productService.getHeroes();
    this.productService.getHeroes().subscribe(products => {
      console.log(products);
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addHero({ name } as Hero)
      .subscribe(hero => {
        //this.products.push(hero);
      });
  }

  delete(hero: Hero): void {
    // this.products = this.products.filter(h => h !== hero);
    this.productService.deleteHero(hero.id).subscribe();
  }

}
