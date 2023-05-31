import { Component, Inject } from '@angular/core';

const TITLE = 'productos';
export class Pepe { }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: TITLE, useValue: 'Hero of the Month' },
    { provide: Pepe, useValue: {} }
  ]
})
export class AppComponent {
  constructor(
    // logger: MinimalLogger,
    public heroe: Pepe,
    @Inject(TITLE) public title: string) {
    // this.logs = logger.logs;
    // logger.logInfo('starting up');
  }
}
