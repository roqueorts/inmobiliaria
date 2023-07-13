import { Routes } from "@angular/router";
import { HeaderComponent } from "./app/components/header/header.component";

export const routes: Routes = [
    { path: 'inicio', title: 'First component', component: HeaderComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];