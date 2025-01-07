import { Component } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.page.html',
  styleUrls: ['./explorer.page.scss'],
})
export class ExplorerPage {
  posts = [
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
    { image: 'assets/outfit1.jpg' },
  ];
}
