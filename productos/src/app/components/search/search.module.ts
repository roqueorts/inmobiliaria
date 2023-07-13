import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        // AppRoutingModule,
    ],
    exports: [SearchComponent]
})
export class SearchModule { }