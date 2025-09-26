import { Component, inject, signal } from '@angular/core';
import { DisneyCharacter } from '../../models/disney-character';
import { DisneyJsonApi } from '../../services/disney-json-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-page',
  imports: [RouterLink],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export class SearchPage {
  disneyCharacter = signal<DisneyCharacter | null>(null);
  page: number = 1;
  private readonly disneyJsonApi: DisneyJsonApi = inject(DisneyJsonApi)

  ngOnInit() {
    this.updatePage()
  }

  updatePage() {
    this.disneyJsonApi.getCharacterPage(this.page).subscribe({
      next: data => {
        this.disneyCharacter.set(data)
        console.log('Disney Response', this.disneyCharacter()!.data)
      },
      error: error => console.error(error)
    })

  }
}
