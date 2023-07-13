import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search/search.component';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class HeaderModule { }
