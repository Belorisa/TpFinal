import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPage } from "./pages/search-page/search-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TpFinal');
}
