import { Routes } from "@angular/router";
import { HeaderComponent } from "./app/components/header/header.component";

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: HeaderComponent }
];